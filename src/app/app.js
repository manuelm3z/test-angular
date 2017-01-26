import angular from 'angular';

import tasks from './tasks';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [tasks]);

export default MODULE_NAME;