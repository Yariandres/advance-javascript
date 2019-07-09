        // reduce();
        // filter();
        // map();

        /* Higher-order functions = less bugs & less time in javascript function are values. */        

        /* we you can exploit this by dividing the code into small simple function        
        and composing them together by making function take other function as thier argument */

        
        
        var animals = [
            { name: 'Fluffykins', species: 'rabbit', age: '9' },
            { name: 'Caro', species: 'dog', age: '3' },
            { name: 'Hamilton', species: 'rabbit', age: '2' },
            { name: 'Harold', species: 'fish', age: '5' },
            { name: 'Ursula', species: 'cat', age: '2' },
            { name: 'Jimmy', species: 'fish', age: '4' }
        ]

    // long way    
    // filter function with a call back
    // var dogs = animals.filter(function(animals) {
    //     return animals.species === 'dog';
    // });

    // empty array
    // var dogs = [];
    // loop through animals array
    // for (var i = 0; i < animals.length; i++) {
    //     // for every animal which is a dog specie
    //     if (animals[i].species === 'dog')
    //     // push specie found to the dogs array
    //     dogs.push(animals[i]);            
    // }
       

    //    map() is another high order function
    /* also like filter it goes through an array but unlike filter it doesnt throw the object away. Instead it tramsform them */

    // var names = animals.map(function(animal) {
    //     return animal.name + ' is a ' + animal.species + ' age ' + animal.age;
    // });

    // long way
    // with a for loop
    // var names = [];
    // for (var i = 0; i < animals.length; i++) {
    //     names.push(animals[i].name);
    // }

    //   reduce();

    var orders = [
        { amount: 250 },
        { amount: 400 },
        { amount: 100 },
        { amount: 325 }
    ]

    // long way
    // var totalAmaount = 0;
    // for (var i = 0; i < orders.length; i++) {
    //     totalAmaount += orders[i].amount;
    // }

    // using high order function
    var totalAmaount = orders.reduce(function(sum, order) {
        return sum + order.amount;
    }, 0);

    console.log(totalAmaount);