(() => {
    interface Task {
        id: string;
        dateCreated: Date;
        dateUpdate: Date;
        description: string;
        render(): string;
    }

    class Reminder implements Task {
        id: string = ''
        dateCreated: Date = new Date;
        dateUpdate: Date = new Date;
        description: string = '';

        date: Date = new Date;
        notification: Array<string> = ['Email']

        constructor(description:string, date: Date, notification: Array<string>) {
            this.description = description;
            this.date = date;
            this.notification = notification;
        }

        render(): string {
            return JSON.stringify(this)
        }   
    }

    class Todo implements Task {
        id: string = '';
        dateCreated: Date = new Date;
        dateUpdate: Date = new Date;
        description: string = '';

        done: Boolean = false;

        constructor (description: string) {
            this.description = description
        }

        render(): string {
            return JSON.stringify(this)
        }
    }

    const todo = new Todo('To do criado com a classe')

    const reminder = new Reminder('Reminder criado com a classe', new Date(), ['Email'])

    const taskView = {
        render(tasks: Array<Task>) {
            const taskList = document.getElementById('tasksList');
            while(taskList?.firstChild) {
                taskList.removeChild(taskList.firstChild)
            }

            tasks.forEach((task) => {
                const li = document.createElement('li')
                const textNode = document.createTextNode(task.render())
                li.appendChild(textNode)
                taskList?.appendChild(li)
            })
        }
    }

    const taskControler = (view: typeof taskView) => {
        const tasks: Array<Task> = [todo, reminder]

        const handleEvent = (event: Event) => {
            event.preventDefault()
            view.render(tasks)
        }

        document.getElementById('taskForm')?.addEventListener('submit', handleEvent)
    }

    taskControler(taskView)
})()