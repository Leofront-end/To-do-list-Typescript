"use strict";
(() => {
    class Reminder {
        constructor(description, date, notification) {
            this.id = '';
            this.dateCreated = new Date;
            this.dateUpdate = new Date;
            this.description = '';
            this.date = new Date;
            this.notification = ['Email'];
            this.description = description;
            this.date = date;
            this.notification = notification;
        }
        render() {
            return JSON.stringify(this);
        }
    }
    class Todo {
        constructor(description) {
            this.id = '';
            this.dateCreated = new Date;
            this.dateUpdate = new Date;
            this.description = '';
            this.done = false;
            this.description = description;
        }
        render() {
            return JSON.stringify(this);
        }
    }
    const todo = new Todo('To do criado com a classe');
    const reminder = new Reminder('Reminder criado com a classe', new Date(), ['Email']);
    const taskView = {
        render(tasks) {
            const taskList = document.getElementById('tasksList');
            while (taskList === null || taskList === void 0 ? void 0 : taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement('li');
                const textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(li);
            });
        }
    };
    const taskControler = (view) => {
        var _a;
        const tasks = [todo, reminder];
        const handleEvent = (event) => {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document.getElementById('taskForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleEvent);
    };
    taskControler(taskView);
})();
