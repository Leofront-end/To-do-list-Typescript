(() => {
    enum notificationPlataform {
        SMS = 'SMS',
        EMAIL = 'EMAIL',
        PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
    }

    const UUID = ():string => {
        return Math.random().toString(32).substring(2,9)
    }

    const DateUtils = {
        today(): Date {
            return new Date;
        },
        tomorrow (): Date {
            const tomorrow = new Date;
            tomorrow.setDate(tomorrow.getDate() + 1)
            return tomorrow 
        }, 
        formatDate(date: Date): string {
            return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
        }
    }

    interface Task {
        id: string;
        dateCreated: Date;
        dateUpdate: Date;
        description: string;
        render(): string;
    }

    class Reminder implements Task {
        id: string = UUID();
        dateCreated: Date = DateUtils.today();
        dateUpdate: Date = DateUtils.today();
        description: string = '';

        date: Date = DateUtils.tomorrow();
        notification: Array<notificationPlataform> = [notificationPlataform.EMAIL]

        constructor(description:string, date: Date, notification: Array<notificationPlataform>) {
            this.description = description;
            this.date = date;
            this.notification = notification;
        }

        render(): string {
            return `
            ----> REMINDER <----
            Description: ${this.description},
            Date: ${DateUtils.formatDate(this.date)}
            Plataform: ${this.notification.join(',')}
            `
        }   
    }

    class Todo implements Task {
        id: string = UUID();
        dateCreated: Date = DateUtils.today();
        dateUpdate: Date = DateUtils.today();
        description: string = '';

        done: Boolean = false;

        constructor (description: string) {
            this.description = description
        }

        render(): string {
            return `
            ---> TODO <---
            description: ${this.description}
            done: ${this.done}
            `
        }
    }

    const todo = new Todo('To do criado com a classe')

    const reminder = new Reminder('Reminder criado com a classe', new Date(), [notificationPlataform.EMAIL])

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