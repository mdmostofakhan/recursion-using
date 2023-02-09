// const numbers = [12, 44, 43, 54, 56, 75];
// for (i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }


// const numbers = [12, 44, 43, 54, 56, 75];
// for (const number of numbers){
//     console.log(number)
//  }

const products = [
    { id: 1, name: 'walton phone', price: 180000},
    { id: 2, name: 'xomi ', price: 190000},
    { id: 3, name: 'lenovo yoga laptop ', price: 190000},
    { id: 4, name: 'Dell inspiron laptop', price: 190000},
    { id: 5, name: 'Samsung phon noto 7', price: 190000},
    { id: 6, name: 'Nokia old age phone gone', price: 190000},
    { ids: 7, name: 'phone one', price: 190000},
    { id: 8, name: 'Ferish', price: 190000},
    { id: 9, name: 'cycles', price: 190000},
    { id: 20, name: 'walton Phone is wonderfull', price: 190000},
];

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCass().includes(search.toLowerCass())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone')
console.log(result);