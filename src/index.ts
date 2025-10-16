(() => {
    const todo = {
        description: 'todo',
        done: false
    }

    const reminder = {
        description: 'reminder',
        date: '16/10/2025'
    }

    const taskView = {
        render(tasks: Array<Object>) {
            const taskList = document.getElementById('tasksList');
            while(taskList?.firstChild) {
                taskList.removeChild(taskList.firstChild)
            }

            tasks.forEach((task) => {
                const li = document.createElement('li')
                const textNode = document.createTextNode(JSON.stringify(task))
                li.appendChild(textNode)
                taskList?.appendChild(li)
            })
        }
    }

    const taskControler = (view: typeof taskView) => {
        const tasks: Array<Object> = [todo, reminder]

        const handleEvent = (event: Event) => {
            event.preventDefault()
            view.render(tasks)
        }

        document.getElementById('taskForm')?.addEventListener('submit', handleEvent)
    }

    taskControler(taskView)
})()