//problem 1
// var  x=10;
// var  y=20;

// var[y,x]=[x,y];
// console.log(y,x);

//problem 2

// function arr(...rest){
//     console.log(rest)
//    let newarr=[rest];
//     console.log(Math.max(...rest));
//     console.log(Math.min(...rest));

// }
// arr (100,20,80,1000);

//problem 3
//  الطريقة الاولى
//  let obj={
//     name:"Doha",
//     University:"Helwan",
//     faculty:"Educational Technology",
//     grade:"excellent with honors"
//  }
//  let{name,University,faculty,grade}= obj;
//  console.log(name,University,faculty,grade);
//  console.log(`${name} is a student in faculty of ${faculty} in university ${University} And his final grad is ${grade}.`);

//   الطريقة الثانية
// let obj={
//     name:"Doha",
//     University:"Helwan",
//     faculty:"Educational Technology",
//     grade:"excellent with honors"
//  }
//  console.log(`${obj.name} is a student in faculty of ${obj.faculty} in university ${obj.University} And his final grad is ${obj.grade}.`)

//problem 4
//a&b
//  let countries =new Set([ "Brazil","Australia","Canada","India" ]) ;
// countries.add("Brazil");
// console.log(countries.size);
// for(let i of countries){
//     console.log(i)
// }
// console.log(...countries);

// c.	return the numbers of repeated items in set 
// let arr =[10,20,30,40,40]
// let arr1 =new Set(arr);

// console.log((arr.length)- (arr1.size));

// d.	make difference from s1 and s2
// function difference(setA, setB) {
//     const diff = new Set(setA);

//     for (const elem of setB) {
//         diff.delete(elem);
//     }

//     return diff;
// }

// const setA = new Set([1, 2, 3, 4]);
// const setB = new Set([3, 4, 5, 6]);

// console.log(difference(setA, setB));
// console.log(difference(setB, setA));

// //e.	make union in another way
// const setx = new Set([1, 2, 3, 4]);
// const sety = new Set([5, 6, 7, 8]);
// const setz = new Set([...setx,...sety]);
// console.log(setz)

//problem 5
let mymap = new Map();
mymap.set("Negm", [
  { Coursename: "JavaScript", Grade: "Excellent" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "React", Grade: "V.Good" },
  { Coursename: "ESNext", Grade: "Good" },
  { Coursename: "NodeJS", Grade: "V.Good" },
]);

mymap.set("Doha", [
  { Coursename: "JavaScript", Grade: "Excellent" },
  { Coursename: "Jquery", Grade: "Good" },
  { Coursename: "React", Grade: "V.Good" },
  { Coursename: "ESNext", Grade: "Good" },
  { Coursename: "NodeJS", Grade: "V.Good" },
]);
let mySelect = document.getElementById("myselect");

function getdata() {
  if (mySelect.value === "Negm") {
    console.log(`Negm Grades :`);
    for (let i = 0; i < mymap.get("Negm").length; i++) {
      console.log(`
                ${mymap.get("Negm")[i].Coursename} course : ${
        mymap.get("Negm")[i].Grade
      } 
                `);
    }
  } else if (mySelect.value === "Doha") {
    console.log(`Doha's Grades :`);
    for (let i = 0; i < mymap.get("Doha").length; i++) {
      console.log(`
                ${mymap.get("Doha")[i].Coursename} course : ${
        mymap.get("Doha")[i].Grade
      } 
                `);
    }
  }
}
