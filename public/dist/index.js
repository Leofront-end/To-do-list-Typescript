"use strict";
(() => {
    let notificationPlataform;
    (function (notificationPlataform) {
        notificationPlataform["SMS"] = "SMS";
        notificationPlataform["EMAIL"] = "EMAIL";
        notificationPlataform["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    })(notificationPlataform || (notificationPlataform = {}));
    const UUID = () => {
        return Math.random().toString(32).substring(2, 9);
    };
    const DateUtils = {
        today() {
            return new Date;
        },
        tomorrow() {
            const tomorrow = new Date;
            tomorrow.setDate(tomorrow.getDate() + 1);
            return tomorrow;
        },
        formatDate(date) {
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        }
    };
    class Reminder {
        constructor(description, date, notification) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdate = DateUtils.today();
            this.description = '';
            this.date = DateUtils.tomorrow();
            this.notification = [notificationPlataform.EMAIL];
            this.description = description;
            this.date = date;
            this.notification = notification;
        }
        render() {
            return `
            ----> REMINDER <----
            Description: ${this.description},
            Date: ${DateUtils.formatDate(this.date)}
            Plataform: ${this.notification.join(',')}
            `;
        }
    }
    class Todo {
        constructor(description) {
            this.id = UUID();
            this.dateCreated = DateUtils.today();
            this.dateUpdate = DateUtils.today();
            this.description = '';
            this.done = false;
            this.description = description;
        }
        render() {
            return `
            ---> TODO <---
            description: ${this.description}
            done: ${this.done}
            `;
        }
    }
    const todo = new Todo('To do criado com a classe');
    const reminder = new Reminder('Reminder criado com a classe', new Date(), [notificationPlataform.EMAIL]);
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
