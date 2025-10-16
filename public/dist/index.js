"use strict";
(() => {
    const todo = {
        description: 'todo',
        done: false
    };
    const reminder = {
        description: 'reminder',
        date: '16/10/2025'
    };
    const taskView = {
        render(tasks) {
            const taskList = document.getElementById('tasksList');
            while (taskList === null || taskList === void 0 ? void 0 : taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
            tasks.forEach((task) => {
                const li = document.createElement('li');
                const textNode = document.createTextNode(JSON.stringify(task));
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
