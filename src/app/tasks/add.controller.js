export default class AddController {
	constructor($location, Tasks) {
		this.$location = $location;

		this.Tasks = Tasks;

		this.name = '';

		this.maxlength = 255;
	}

	save(form) {
		if (form.$valid) {
			this.Tasks.saveTask({
				id: new Date().getTime(),
				name: this.name,
				date: new Date(),
				status: false
			});
			
			this.name = '';

			this.$location.path('/');
		}
	}
}

AddController.$inject = ['$location', 'Tasks'];