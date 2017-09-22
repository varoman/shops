import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [{name:"Aldo"}, {name: "Puma"}, {name: "Big Shop"}];
	}
});
