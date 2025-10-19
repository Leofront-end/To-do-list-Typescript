"use strict";
(() => {
    let notificationPlataform;
    (function (notificationPlataform) {
        notificationPlataform["SMS"] = "SMS";
        notificationPlataform["EMAIL"] = "EMAIL";
        notificationPlataform["PUSH_NOTIFICATION"] = "PUSH_NOTIFICATION";
    })(notificationPlataform || (notificationPlataform = {}));
    let viewMode;
    (function (viewMode) {
        viewMode["TODO"] = "TODO";
        viewMode["REMINDER"] = "REMINDER";
    })(viewMode || (viewMode = {}));
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
            Id: ${this.id}
            description: ${this.description}
            done: ${this.done}
            `;
        }
    }
    const todo = new Todo('To do criado com a classe');
    const reminder = new Reminder('Reminder criado com a classe', new Date(), [notificationPlataform.EMAIL]);
    const taskView = {
        getTodo(form) {
            const todoDescription = form.todoDescription.value;
            form.reset();
            return new Todo(todoDescription);
        },
        getReminder(form) {
            const ReminderNotifications = [
                form.notification.value,
            ];
            const reminderDate = new Date(form.reminderDate.value);
            const reminderDescription = form.reminderDescription.value;
            form.reset();
            return new Reminder(reminderDescription, reminderDate, ReminderNotifications);
        },
        render(tasks, mode) {
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
            const todoSet = document.getElementById('todoSet');
            const reminderSet = document.getElementById('reminderSet');
            if (mode == viewMode.TODO) {
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('style', 'display: block');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.removeAttribute('disabled');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('style', 'display: none');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('disabled', 'true');
            }
            else {
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.setAttribute('style', 'display: block');
                reminderSet === null || reminderSet === void 0 ? void 0 : reminderSet.removeAttribute('disabled');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('style', 'display: none');
                todoSet === null || todoSet === void 0 ? void 0 : todoSet.setAttribute('disabled', 'true');
            }
        }
    };
    const taskControler = (view) => {
        var _a, _b;
        const tasks = [];
        let mode = viewMode.TODO;
        const handleEvent = (event) => {
            event.preventDefault();
            const form = event.target;
            switch (mode) {
                case viewMode.TODO:
                    tasks.push(view.getTodo(form));
                    break;
                case viewMode.REMINDER:
                    tasks.push(view.getReminder(form));
                    break;
            }
            view.render(tasks, mode);
        };
        const handleTangleMode = () => {
            switch (mode) {
                case viewMode.TODO:
                    mode = viewMode.REMINDER;
                    break;
                case viewMode.REMINDER:
                    mode = viewMode.TODO;
                    break;
            }
            view.render(tasks, mode);
        };
        (_a = document.getElementById('toggleMode')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleTangleMode);
        (_b = document.getElementById('taskForm')) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', handleEvent);
    };
    taskControler(taskView);
})();
