import moment from 'moment';

export default class ListController {
	constructor(Tasks) {
		this.Tasks = Tasks;

		this.list = this.Tasks.getTasks();
	}

	getIncompleteTasks() {
		return this.list.filter(item => {
			const aMonthAgo = moment().subtract(1, 'months'),
				aWeekAgo = moment().subtract(7, 'days'),
				dayTask = moment(item.date);

			if (dayTask.isBefore(aWeekAgo)) {
				item.warning = true;
			} else {
				item.warning = false;
			}

			if (dayTask.isAfter(aMonthAgo)) {
				if (item.status === false) {
					return item;
				}
			}

			return false;
		});
	}

	getCompletedTasks() {
		return this.list.filter(item => {
			const aMonthAgo = moment().subtract(1, 'months'),
				dayTask = moment(item.date);

			if (dayTask.unix() >= aMonthAgo.unix()) {
				if (item.status === true) {
					return item;
				}
			}

			return false;
		});
	}

	completeTask(task) {
		task.status = true;

		this.Tasks.updateTask(task);

		this.list = this.Tasks.getTasks();
	}

	undoTask(task) {
		task.status = false;

		this.Tasks.updateTask(task);

		this.list = this.Tasks.getTasks();
	}

	deleteTask(task) {
		this.Tasks.deleteTask(task);

		this.list = this.Tasks.getTasks();
	}
}

ListController.$inject = ['Tasks'];