import { connect } from "amqplib";

const run = async () => {
  try {
    const connection = await connect("amqp://localhost");
    // канал для взаимодействия с брокером
    const channel = await connection.createChannel();
    // создание обменика (точки входа)
    await channel.assertExchange("test", "topic", { durable: true });
    // выделение очереди, откуда будет забираться сообщение
    const queue = await channel.assertQueue("my-queue", { durable: true });
    // связываем обменик с очередью
    channel.bindQueue(queue.queue, "test", "my-command");
    channel.consume(
      queue.queue,
      (message) => {
        if (!message) {
          return;
        }
        console.log(message.content.toString());
        if (message.properties.replyTo) {
          console.log(message.properties.replyTo);
          // отправка ответа в очередь
          channel.sendToQueue(
            message.properties.replyTo,
            Buffer.from("Ответ"),
            { correlationId: message.properties.correlationId }
          );
        }
      },
      // прочитать сообщение после его получения, чтобы оно не зависло в брокере
      {
        noAck: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};

run();