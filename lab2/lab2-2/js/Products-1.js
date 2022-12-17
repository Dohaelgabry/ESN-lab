/////////////////////////////async&await//////////////////////////////////////////
let products = document.querySelector(".usersnames");
async function users() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  // console.log(data)

  for (let i = 0; i < data.length; i++) {
    let user = data[i].username;

    //  console.log(user);
    products.innerHTML += `

                 <button type="button" class="btn btn-outline-primary" onclick="display(${data[i].id})">${data[i].username} </button>

                 `;
  }
}

users();

let information = document.querySelector(".Userinformation");

async function display(id) {
  let info = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=" + id
  );
  let Response = await info.json();
  // console.log(Response)
   information.innerHTML="";
  for (let i = 0; i < Response.length; i++) {
    let userinfo = Response[i].title;
    // console.log(userinfo);

    information.innerHTML += `<p>${userinfo} </p>`;
  }

}

display();

///////////////////////fetch&then/////////////////////



// let products = document.querySelector(".usersnames");

// fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//   data.json().then((realdata) => {
//     for (let i = 0; i < realdata.length; i++) {
//       let user = realdata[i].username;

//       products.innerHTML += `
              
//                    <button type="button" class="btn btn-outline-primary" onclick="display(${realdata[i].id})">${realdata[i].username} </button>                
                  
//                    `;
//     }
//   });
// });

// let information = document.querySelector(".Userinformation");

// function display(id) {
//   fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id).then(
//     (Response) => {
//       Response.json().then((userinfo) => {
//         information.innerHTML="";
//         for (let i = 0; i < userinfo.length; i++) {
//           let info = userinfo[i].title;
//           information.innerHTML += ` ${info}`;
//         }     
//       });
        
//     }
//   );
// }

// display();
