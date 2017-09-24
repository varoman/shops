export default function() {

  this.namespace = '/api';

  this.get('/shops', function() {
    return {
      data: [
        {
          name: "Aldo"/*,
          goods: [
                  {name: 'Shoes', price: 100},
                  {name: 'Shirt', price: 50},
                  {name: 'Watch', price: 70}
                ]*/
        },
        {
          name: "Zara"/*,
          goods: [
                  {name: 'Blouse', price: 80},
                  {name: 'Skirt', price: 90},
                  {name: 'Vest', price: 60}
                ]*/
        },
        {
          name: "Puma"/*,
          goods: [
            {name: 'Sneakers', price: 180},
            {name: 'Ball', price: 110},
            {name: 'Swim Suit', price: 150}
          ]*/
        }
      ]
    }
  });

}
