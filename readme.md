# 📝 Projeto Todo/Reminder em TypeScript

Este é um projeto simples de **Gerenciamento de Tarefas** (To-Do List e Reminders) desenvolvido com **TypeScript**. Ele demonstra a aplicação de conceitos fundamentais da Programação Orientada a Objetos (POO), como Classes, Interfaces, Enums e o padrão Controller-View, para criar uma aplicação dinâmica no front-end.

***

### 💡 Inspiração

O código é uma adaptação das aulas da série de TypeScript do canal **4ALL Tests** no YouTube, com algumas modificações na lógica de renderização e estruturação.

* **Aula de Referência:** [Typescript básico - todo list - Finalizando o Projeto](http://www.youtube.com/watch?v=VdQM5LgDZVQ)
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