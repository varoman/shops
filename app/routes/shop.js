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

let shopData;

export default Ember.Route.extend({
	model(params) {
		if(!this.modelFor('shops')) return;
		var shops = this.modelFor('shops').content;
		shopData = shops.find((item)=>{
				return item._data.name.includes(restoreSlug(params.slug));
		});
		//arrVahlabi.push(vahlabi._data);
		return shopData._data.goods;
	}
});
