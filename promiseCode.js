const button = document.getElementById("btn");
const checkerDisplay = document.getElementById("checkerr");
var mg = document.querySelector("img");

function runPromise() {
  return new Promise((resolve, reject) => {
    mg.src = '';
    let condition = Math.floor(Math.random() * 2);
    mg.alt = "Image Loading...";
    setTimeout(() => {
      if (condition === 1) {
        resolve(condition);
      } else {
        reject(condition);
      }
    }, 2000);
  })
  .then((condition) => {
        // console.log("promise one resolved");
        mg.src = "sweet.png";
        checkerDisplay.innerText = condition;
    })
    .catch((condition) => {
        checkerDisplay.innerText = condition;
            mg.src = "";
            mg.alt = "Error in loading the image";
            // console.log("promise one rejected");
        });
}

button.addEventListener("click", () => {
  runPromise();
});


// const button = document.getElementById("btn");
// const checkerDisplay = document.getElementById("checkerr");
// var mg = document.querySelector("img");
// function imageLoaded() {
//     // Math.floor(Math.random() * 1.5)
//   var checker = Math.floor(Math.random() * 1.5);
//   checkerDisplay.innerText = checker;
//   return new Promise((resolve, reject) => {
//     mg.alt = "Image Loading...";
//     setTimeout(() => {
//       if (checker === 1) {
//         console.log(`its onspot checker: ${checker}`);
//         resolve();
//       } else reject();
//     }, 2000);
//   });
// }

// button.addEventListener("click", () => {
//   imageLoaded().then(() => {
//     console.log("promise one resolved");
//     mg.src = "sweet.png";
// });

// imageLoaded().catch(() => {
//     mg.src = "";
//     mg.alt = "Error in loading the image";
//     console.log("promise one rejected");
// });

// imageLoaded().finally(() => {
//     console.log("Promise 1 ended");
// });
// });

// var userObj = {
//     Name: 'Muhammad Saad',
//     Age:  '18'
// }

// var userObjFailed = {
//     statuss: 'failed'
// }

// const promiseTwo = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if (checker > 0.5) {
//           resolve(userObj);
//         }else{

//             reject(userObjFailed);
//         }
//       }, 2000);

//     });

// promiseTwo.then((userNameAndAge)=>{
//     console.log(userNameAndAge);
// })

// promiseTwo.catch((userObjFailed)=>{
//     console.log(userObjFailed);
// })

// promiseTwo.finally(()=>{
//     console.log('Promise 2 ended')
// }) //


//modification in promises
function runPromise(statement, delay) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log(statement);
      if(statement === 5) reject()
      resolve();
    }, delay);
  })
}
runPromise('promise one', 2000)
.then(() => runPromise(5, 1000))
.then(() => runPromise('promise two', 500))
.catch(() => console.log('promise two failed'))
.finally(() => console.log('promise ended'));
