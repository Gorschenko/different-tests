# Паттерны

## Creational (порождающие)

Порождающие паттерны - это шаблоны проектирования, которые занимаются механизмами создания объектов.
Они позволяют создавать объекты с определенными характеристиками в различных ситуациях, обеспечивая гибкость и удобство управления процессом создания объектов.
Порождающие паттерны обеспечивают инкапсуляцию создания объектов, а также приводят к уменьшению связанности между компонентами системы.

### Singleton

Singleton гарантирует существование только одного экземпляра класса и предоставляет глобальную точку доступа к этому экземпляру.
Он часто используется, когда требуется обеспечить единственный экземпляр класса, например, для доступа к глобальным ресурсам, конфигурации, или для создания центрального объекта управления в приложении.

### Factory Method

Factory Method определяет интерфейс для создания объектов, но оставляет подклассам решение о том, какой класс создавать. Таким образом, он делегирует создание объектов дочерним классам, позволяя им предоставлять специфичные для них реализации создания объектов.

### Abstract Factory

Abstract Factory предоставляет интерфейс, группирующий другие фабрики.

### Prototype

Применяется для создания копий объектов, сохраняя при этом их структуру.

### Builder

Используется для пошагового создания сложных объектов с использованием одного и того же процесса построения. Он позволяет создавать различные конфигурации объекта, изолируя детали конструирования от самого объекта.
