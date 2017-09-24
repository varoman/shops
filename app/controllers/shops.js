import Ember from 'ember';

export default Ember.Controller.extend({
	model() {
		this.get('model')
	},
	isAdding: false,
	newShopName:'',
	clickTarget: NaN,
	editableName: '',
	slugName: '',

	actions: {
		addShop(){
			this.set('isAdding', true);
		},

		enterShopName() {
			if(this.newShopName){
				this.model.pushObject({name: this.newShopName});
			}
				this.set('newShopName', '');
				this.set('isAdding', false);
		},

		removeShop(index) {
			this.model.removeObject(this.model[index])
		},

		editShop(index) {
			this.set('clickTarget', index);
			this.set('editableName', this.model[index].name)
		},

		editShopName() {
			Ember.set(this.model[this.clickTarget], 'name', this.editableName);
			this.set('clickTarget', NaN)
		},

		goTo(index){
			let slugName;
			slugName = this.model[index].name;
			if(slugName.includes(' ')){
				slugName = slugName.replace(' ', '-')
			}
			this.set('slugName', slugName);
			this.transitionToRoute('shop', this.slugName)
		}
	}
});
