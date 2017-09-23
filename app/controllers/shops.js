import Ember from 'ember';

export default Ember.Controller.extend({
	isAdding: false,
	newShopName:'',
	clickTarget: NaN,
	editableName: '',

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
			let model = this.get('model');
			this.set('clickTarget', index);
			this.set('editableName', model[index].name)
		},

		editShopName: function () {
			let model = this.get('model');
			Ember.set(model[this.clickTarget], 'name', this.editableName);
			this.set('clickTarget', NaN)
		}
	}
});
