import Ember from 'ember';

const restoreSlug = (slugName) => {
	let restoredName;
	if(slugName.includes('-')){
		restoredName = slugName.replace('-', ' ');
	}else {
		restoredName = slugName;
	}
	return restoredName
};

export default Ember.Route.extend({
	model(params) {

		var shops = this.modelFor('shops');
		return shops.find((item)=>{
				return item.name.includes(restoreSlug(params.slug));
		});
	}
});
