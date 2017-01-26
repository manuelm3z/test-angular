import angular from 'angular';
import angularroute from 'angular-route';
import angularanimate from 'angular-animate';

import routes from './tasks.routes';
import ListController from './list.controller';
import AddController from './add.controller';
import Tasks from './tasks.service.js';

import './styles.module.css'; 

export default angular.module('app.tasks', [angularroute, angularanimate, Tasks])
	.config(routes)
	.controller('ListController', ListController)
	.controller('AddController', AddController)
	.name;
