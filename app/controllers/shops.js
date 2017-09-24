import Ember from 'ember';

export default Ember.Controller.extend({
	isAdding: false,
	newShopName:'',
	clickTarget: NaN,
	editableName: '',
	slugName: '',
	id: 3,

	actions: {
		addShop(){
			this.set('isAdding', true);
		},

		enterShopName() {
			if(this.newShopName){
				this.get('store').push({
					data: [
						{
							type: 'shop',
							id: this.id,
							attributes:{
		              name: this.newShopName,
		              goods: [
		              ]
		          }
						}
					]
				});
				this.id++;
			}
				this.set('newShopName', '');
				this.set('isAdding', false);
		},

		removeShop(index) {
			this.get('content').content.removeObject(this.get('content').content[index])
		},

		editShop(index) {
			this.set('clickTarget', index);
			this.set('editableName', this.get('content').content[index]._data.name)
		},

		editShopName() {
			const self = this;
			this.get('store').findRecord('shop', this.clickTarget).then(function(data) {
  				data.set('name', self.editableName);
			 });
			this.set('clickTarget', NaN)
		},

		goTo(index){
			let slugName;
			slugName = this.get('content').content[index]._data.name;
			if(slugName.includes(' ')){
				slugName = slugName.replace(' ', '-')
			}
			this.set('slugName', slugName);
			this.transitionToRoute('shop', this.slugName);
		}
	}
});
