import angular from 'angular';

class Tasks {
    constructor() {
        this.list = [];

        if (localStorage.getItem('list') !== null) {
            this.list = JSON.parse(localStorage.getItem('list'));
        }
    }

    getTasks() {
        return this.list;
    }

    saveTask(task) {
        this.list.push(task);

        localStorage.setItem('list', JSON.stringify(this.list));
    }

    updateTask(task) {
        this.list = this.list.filter(item => {
            if (item.id === task.id) {
                return task;
            }

            return item;
        });

        localStorage.setItem('list', JSON.stringify(this.list));
    }

    deleteTask(task) {
        this.list = this.list.filter(item => {
            return item.id !== task.id ? item : false;
        });

        localStorage.setItem('list', JSON.stringify(this.list));
    }

}

export default angular.module('services.storage', [])
    .service('Tasks', Tasks)
    .name;