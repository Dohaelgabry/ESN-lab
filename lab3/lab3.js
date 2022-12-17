///problem1
// let object = {
//   userName: "Doha Gamal",
//   age: 27,
//   address: "Cairo",
// };
// let handle = {
//   get(object, prop, proxy) {
//     console.log(prop);
//     if (prop in object) {
//       return object[prop];
//     } else {
//       throw `property ${prop} Not Found `;
//     }
//   },
//   set(object, prop, value, proxy) {
//     if (prop in object) {
//       if (prop == "userName") {
//         if (value.length == 7 && typeof value === "string") {
//           console.log(prop);
//           object[prop] = value;
//         } else {
//           console.log("name property must be 7 characters long.");
//         }
//       } else if (prop == "age") {
//         if (value > 25 && value < 60) {
//           console.log(prop);
//           object[prop] = value;
//         } else {
//           console.log("age property must be between a 25 and 60");
//         }
//       } else if (prop == "address") {
//         if (typeof value === "string") {
//           console.log(prop);
//           object[prop] = value;
//         } else {
//           console.log(prop);
//         }
//       }
//     } else {
//       throw " address property must be characters";
//     }
//   },
// };
// let Proxyobj = new Proxy(object, handle);
// // console.log(Proxyobj.userName);

// Proxyobj.userName = prompt("enter your name");
// console.log(Proxyobj.userName);

// Proxyobj.age = prompt(parseInt("enter your age"));
// console.log(Proxyobj.age);

// Proxyobj.address = prompt("enter your address");
// console.log(Proxyobj.address);

//problem2
// Object.prototype.toString=function()
// {
//     this.area();
//     this.parameter();
//     console.log("Lenth = "+this.length);
//     console.log("Width = "+this.width);
// }

// class Shape {
//     static count=0 ;
//     constructor (length,width){
//         Shape.count++;
//         this.length=length;
//         this.width=width;
//     }
//     area(){
//         console.log("Area = "+this.length*this.width);
//     }
//     parameter(){
//         console.log("Parameter = "+(this.length+this.width)*2);
//     }

//     static getCount()
//     {
//         return Shape.count;
//     }

// }

// class Rectangle extends Shape {
//     constructor(length,width) {
//         super(length,width);
//     }

// }

// class Square extends Shape {
//     constructor(length,width) {
//         super(length,width);
//     }
// }

// let rect= new Rectangle (10,20);
// let squ= new Square (20,5);

// a
// rect.area();
// rect.parameter();
// squ.area();
// squ.parameter();

//  b
// rect.toString();
// squ.toString();

// c
// console.log("number of created classes = "+Shape.getCount());

//problem3
// let numb = parseInt(prompt("enter number"));
// let arr = [0, 1];
// function* ser_function(numb) {
//   if (numb == 1) {
//     arr.pop();
//   } else if (numb == 2) {
//     arr.push(1);
//   } else {
//     for (let x = 0; x < numb - 2; x++) {
//       arr[x + 2] = arr[x] + arr[x + 1];
//     }
//   }

//   for (let i of arr) {
//     console.log(i);
//   }
// }

// let generator = ser_function(numb);
// generator.next();

// function* ser_function_max(numb) {
//   if (numb == 1) {
//     arr.pop();
//   } else if (numb == 2) {
//     arr.push(1);
//   } else {
//     for (let index = 0; index < numb; index++) {
//       if (arr[index] + arr[index + 1] < numb) {
//         arr[index + 2] = arr[index] + arr[index + 1];
//       }
//     }
//   }
//   for (let i of arr) {
//     console.log(i);
//   }
// }
// let generator_max = ser_function_max(numb);
// generator_max.next();

//problem4
// let person={
//     userName:"Doha",
//     address:"cairo",
//     age:27,
//     job:"Meran eng",
// }

// person[Symbol.iterator]=function()
// {
//     let keys=Object.keys(this);
//     let values=Object.values(this);
//     let i=0;
//     return{
//         next:()=>
//         {
//             if(i<keys.length)
//             {
//                 let res={value:`${keys[i]}: ${values[i]}`,done:false};
//                 i++;
//                 return res;
//             }
//             else
//             {
//                 return {value:undefined,done:true}
//             }
//         }
//     }
// }

// for(let key of person)
// {
//     console.log(key);
// }

//problem5
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//a
let itemsstring = fruits.filter((item, indx) => {
  return typeof item == "string";
});

console.log(itemsstring);

// b

let itemsstartsa = fruits.filter((item) => {
  return item.startsWith("a") == true;
});

console.log(itemsstartsa);

//  c
let itemsstartsbos = fruits.filter((item) => {
  return item.startsWith("s") == true || item.startsWith("b") == true;
});

console.log(itemsstartsbos);
