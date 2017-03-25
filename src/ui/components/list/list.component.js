var ListComponent = {
  bindings: {
    type: '<'
  },
  template: require('./list.partial.html'),
  controller: 'ListController'
};

module.exports = function (module) {
  require('./list.controller')(module);
  module.component('list', ListComponent);
}