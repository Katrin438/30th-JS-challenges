    //adds the inputs into an array,the library checks if the arrays is contained 
    //and if it is exist  its being highlighet ,every subsstring that is being 
    //contained is added to the array 'isPresent'
    var stringMatch = function(strs){
      console.log('strs', strs);
      return function findCity(qry, sub){
        console.log(qry);

        var isPresent, substrRegex;
        isPresent = [];
        substrRegex = new RegExp(qry);

        $.each(strs, function(i, str){
          if(substrRegex.test(strs)){
            isPresent.push(str);
          }
        });
        sub(isPresent);
      };
    };
    cities = ['Burgas', 'Plovdiv',
                  'Veliko Tarnovo', 'Sofia',
                  'Sozopol', 'Qmbol',
                  'Varna', 'Zlatni pqsaci'];

    $('.search').typeahead({
      hint: true,
      highlight: true,
      minLenght: 1
    },
    {
      name: 'cities',
      source: stringMatch(cities)
    }
    )