# 📝 Projeto Todo/Reminder em TypeScript

Este é um projeto simples de **Gerenciamento de Tarefas** (To-Do List e Reminders) desenvolvido com **TypeScript**. Ele demonstra a aplicação de conceitos fundamentais da Programação Orientada a Objetos (POO), como Classes, Interfaces, Enums e o padrão Controller-View, para criar uma aplicação dinâmica no front-end.

***

### 💡 Inspiração

O código é uma adaptação das aulas da série de TypeScript do canal **4ALL Tests** no YouTube, com algumas modificações na lógica de renderização e estruturação.

* **Playlist:** [Série TypeScript 4ALL Tests](https://www.youtube.com/playlist?list=PLPcbeMjzG5_0y7S06P2-rtIMTHPdOrhDj)

***

### 🛠️ Tecnologias Utilizadas

* **TypeScript:** Linguagem principal para estruturação e tipagem do código.
* **HTML/CSS/JavaScript (DOM):** Utilizados para a interface e manipulação dos elementos visuais.

***

### 🧩 Conceitos Chave do TypeScript

O projeto aplica diversos conceitos para manter o código organizado e seguro:

| Conceito | Aplicação no Projeto |
| :--- | :--- |
| **Interfaces** | `Task`: Define o contrato base (`id`, `description`, `render()`) que todas as tarefas devem seguir. |
| **Classes** | `Todo` e `Reminder`: Implementações concretas que implementam a interface `Task`. |
| **Enums** | `notificationPlataform` e `viewMode`: Utilizados para tipagem estrita de valores, como as plataformas de notificação e os modos de visualização de formulário. |
| **Tipagem de Retorno e Argumentos** | Todas as funções, classes e métodos têm seus tipos de entrada e saída claramente definidos. |
| **Padrão Controller-View** | Separado em `taskControler` (Lógica e Estado) e `taskView` (Renderização e Interação com o DOM). |

***

### ⚙️ Estrutura do Código

A aplicação é dividida em módulos lógicos:

1.  **Enums e Utilitários:**
    * `notificationPlataform`: Plataformas de notificação (SMS, EMAIL, PUSH_NOTIFICATION).
    * `viewMode`: Modos de exibição de formulário (TODO, REMINDER).
    * `UUID()`: Gerador de IDs simples.
    * `DateUtils`: Utilitários para `today()`, `tomorrow()` e `formatDate()`.

2.  **Modelos (Interface e Classes):**
    * `interface Task`: Contrato base para as tarefas.
    * `class Reminder`: Tarefa com data de agendamento e plataformas de notificação.
    * `class Todo`: Tarefa com status de conclusão (`done`).

3.  **View (`taskView`):**
    * Responsável por extrair dados do formulário (`getTodo`, `getReminder`) e renderizar a lista de tarefas no DOM.
    * O método `render` também cuida de alternar a visibilidade dos formulários (`todoSet` e `reminderSet`) baseado no `viewMode`.

4.  **Controller (`taskControler`):**
    * Gerencia o estado da aplicação (`tasks` e `mode`).
    * Contém a lógica para a criação de novas tarefas (`handleEvent`) e a alternância do modo de visualização (`handleTangleMode`).
    * Gerencia os *event listeners* do DOM.

***

### ✨ Modificações em Destaque

O projeto introduz uma forma diferente de renderização das tarefas:

* **Renderização Fragmentada:** O método `render()` dentro das classes `Todo` e `Reminder` retorna uma string com campos delimitados por vírgula.
* **Exibição na View:** O método `taskView.render` usa essa string de retorno, divide-a pela vírgula (`split(',')`), e cria um novo elemento `<p>` para cada parte, resultando em uma exibição mais estruturada na lista de tarefas (`tasksList`).