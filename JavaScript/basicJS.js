

function myfunction() {
    var fname ='Cuvette';
    console.log(fname);
}

myfunction();

const person = {
    name : 'vara',
    age : 21,
    isStudent : true,
    greet : function(){
        return `Hello  ${this.name} `;
    }
}

console.log(person.greet());

// let x = '10'
// console.log(typeof x); // string


const temp = 30;

switch (temp) {
    case 30:
        console.log("It's 20 degree Celsius");
        break;

    case 40:
        console.log("It's not 20 degree Celsius");
        break;
}

for (let i =1;i<=5;i++) {
    console.log("Hi", i)
}


const numbers = [1,2,3];

numbers.push(4);
numbers.unshift(0);

numbers.splice(2,2,1.5);
console.log(numbers);



const products = [
    {id:101,name:"laptop",price:1000,inStock:true},
    {id:102,name:"mouse",price:100,inStock:false},
    {id:103,name:"wifi",price:300,inStock:true},
    {id:104,name:"key",price:400,inStock:false},
    
]

const availiableproducts = products.filter(product => product.price>400)

console.log(availiableproducts);

const prices = products.map(product => product.price)
console.log(prices);


arr1 = [1,2,3]
arr2 = [4,5,6]
arr3 = [...arr1,...arr2]
console.log(arr3);



function createUser(name,age) {
    return {
        name,
        age,
        isAdult: function() {
            return this.age >= 18
        }
    }
}

const user1 = createUser("vara",21)

console.log(user1.isAdult())


// let p = 10

// let q = p

// console.log(q)
// q= 20
// console.log(p)



const animanl = {name:"leo"}

animanl.age = 12
animanl.home = "mum"

delete animanl.age

console.log(animanl)

const now = new Date()

console.log(now.getFullYear())

console.log(greet)
var greet ='Hiii'



function sumTraditional() {
    console.log(arguments)
    total = 0
    for (let i=0;i<arguments.length;i++) {
        total += arguments[i]
    }
    return total
}

console.log(sumTraditional(1,2,3,4))


