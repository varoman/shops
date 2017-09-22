import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var shops = this.modelFor('shops');
		console.log(params);
		return shops.findBy('name', params.slug);
	}
});
