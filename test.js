const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const result = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(result); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One euro should be 127.9 yen", function(){
    //import the function from app.js
    const { fromEuroToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromEuroToYen(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const result = 3.5 * 127.9; 
    
    // this is the comparison for the unit test
     expect(yen).toBe(result); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One euro should be .8 pounds", function(){
    //import the function from app.js
    const { fromEuroToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromEuroToPound(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const result = 3.5 * .8; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(result); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("One dollar should be 106.6 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(3.5)
    const result = (Math.floor((3.5 / 1.2) * 127.9));
    expect(yen).toBe(result);
})
test("One yen should be .006 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(3.5)
    const result = Math.floor(3.5 * .006);
    expect(pounds).toBe(result);
})