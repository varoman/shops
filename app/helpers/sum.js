import Ember from 'ember';

export function sum(params) {
  let sum = 0
  params[0].forEach((item) => {
    sum += item.price;
  })
  return sum;
}

export default Ember.Helper.helper(sum);
