import { connect } from "amqplib";

const run = async () => {
  try {
    const connection = await connect("amqp://localhost");
    // канал для взаимодействия с брокером
    const channel = await connection.createChannel();
    // создание обменика (точки входа)
    await channel.assertExchange("test", "topic", { durable: true });
    // создаем очередь для ответа от subscriber
    const replyQueue = await channel.assertQueue("", { exclusive: true });
    // слушаем очередь для получения ответа
    channel.consume(replyQueue.queue, (message) => {
      console.log(message?.content.toString());
      console.log(message?.properties.correlationId);
    });
    channel.publish("test", "my-command", Buffer.from("Работает!"), {
      // укзываем куда отвечать
      replyTo: replyQueue.queue,
      // идентификация сообщения
      correlationId: "1",
    });
  } catch (e) {
    console.error(e);
  }
};

run();