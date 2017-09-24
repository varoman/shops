import Ember from 'ember';

function getTotal(model){
  let sum = 0;
  model.forEach((item) => {
    sum += Number(item.price);
  })
  return sum;
}

export default Ember.Controller.extend({
isAdding: false,
newProduct: {
  name:'',
  q: 0,
  price: 0
},
total: NaN,
clickTarget: NaN,

ifPopulated: (obj) => {
  for (let key in obj){
    if(!obj[key]){
      return false;
    }
  }
  return true;
},

  actions: {
    addProduct() {
      this.set('isAdding', true);
    },

    enterProduct() {
      if(this.ifPopulated(this.newProduct)){
        this.model.pushObject(this.newProduct);
        this.set('total', getTotal(this.model));
        this.set('isAdding', false);
        this.set('newProduct', {name:'', q: 0, price: 0});
      }
    },

    removeProduct(index) {
      this.model.removeObject(this.model[index]);
      this.set('total', getTotal(this.model));
    },

    editProduct(index) {
      this.set('clickTarget', index);
      this.set('editableName', this.model[index].name);
      this.set('editableQ', this.model[index].q);
      this.set('editablePrice', this.model[index].price)
    },

    saveProduct() {
      Ember.set(this.model[this.clickTarget], 'name', this.editableName);
      Ember.set(this.model[this.clickTarget], 'q', this.editableQ);
      Ember.set(this.model[this.clickTarget], 'price', this.editablePrice);
      this.set('total', getTotal(this.model));
      this.set('clickTarget', NaN);
    }
  }
});
