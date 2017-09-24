export default function() {

  this.namespace = '/api';

  let data =  [
        {
          type: 'shop',
          id: 0,
          attributes:{
            name: "Aldo",
            goods: [
                    {name: 'Shoes', price: 100, q: 15},
                    {name: 'Shirt', price: 50, q: 5},
                    {name: 'Watch', price: 70, q: 12}
                  ]
          }
        },
        {
          type: 'shop',
          id: 1,
          attributes:{
            name: "Zara",
            goods: [
                    {name: 'Blouse', price: 80, q: 6},
                    {name: 'Skirt', price: 90, q: 7},
                    {name: 'Vest', price: 60, q: 9}
                  ]
          }
        },
        {
          type: 'shop',
          id: 2,
          attributes:{
              name: "Puma",
              goods: [
                {name: 'Sneakers', price: 180, q:8},
                {name: 'Ball', price: 110, q: 2},
                {name: 'Swim Suit', price: 150, q: 5}
              ]
          }
        }
      ]

  this.get('/shops', function() {
    return {
      data
    }
  });

  this.get('shops/: id', function(db, req){
    let id = req.params['%20id'];
    return {data: data[id]} 
  });

}
