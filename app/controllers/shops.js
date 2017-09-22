import Ember from 'ember';

export default Ember.Controller.extend({
	isAdding: false,
	isEditing: {0: false, 1: false, 2: false},
	newShopName:'',
	vahlabi:'',

	actions: {
		addShop: function(){
			this.set('isAdding', true);
		},

		enterShopName: function() {
			let model = this.get('model');
			if(this.newShopName){
				model.pushObject({name: this.newShopName});
			}
				this.set('newShopName', '');
				this.set('isAdding', false);
		},

		removeShop: function(index) {
			let model = this.get('model');
			model.removeObject(model[index])
		},

		editShop: function(index) {
			Ember.set(this.isEditing, index.toString(), true);
			this.set('vahlabi', this.isEditing[index]);
		}
	}
});
