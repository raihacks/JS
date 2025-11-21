// const temp = -20;
// if(temp > 0 && temp <= 30){
//     console.log("The weather is GOOD");
// }
// else{
//     console.log("the wether is BAD")
// }

// let username =" ";
// while(username === " "){
//     username=window.prompt("entername");
// }
// console.log(`hello ${username}`);

// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart();
// console.log(text2);

// let userName;
// do{
//     userName = window.prompt(" enetr ur name:");
// }while(userName === "" || userName === null)
//     console.log(`hello ${userName}`);

// let loggedIn = false;
// let userName;
// let password;
// do{
//     userName = window.prompt("enter ur username:");
//     password = window.prompt("enter ur password:");
//     if(userName === "1" && password === "2"){
//         loggedIn = true;
//         console.log(`Welcome! `);
//     }
//     else{
//         console.log(`the user name or password is not corret`);
//     }
// }while(!loggedIn)

// for(let i=10; i>0; i-=2){
//     console.log(i);
// }
// console.log("HAPPY NEW YEAR!!")
// for(let i=1; i<=20; i++){
//     if(i==13){
//         break;
//     }
//     else{
//     console.log(i);
//     }
// }

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random()*(maxNum- minNum - 1));
// let attempts = 0;
// let guess;
// let running = true;
// while(running){
//     console.log(answer);
//     guess = window.prompt(`Guess a number`);
//     guess = Number(guess);
//     if(isNaN(guess)){
//         window.alert("please enter a valid number");
//     }
//     else if(guess<minNum||guess>maxNum){
//         window.alert("please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("too low! try again!");
//         }
//         else if(guess > answer){
//             window.alert("too high! try again!");
//         }
//         else{
//             window.alert(`congrates!! the answer is ${answer}`);
//         }
//         running = false;
//     }
// }

// function happyBirthday(userName,age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log(`Happy Birthday to you, ${userName}!`);
//     console.log("Happy Birthday to you!");
//     console.log(`Happy ${age}th Birthday!`);
// }
// happyBirthday("sid",18);

// function add(x,y){
//     return x+y;
// }
// function sub(x,y){
//     return x-y;
// }
// function mul(x,y){
//     return x*y;
// }
// function div(x,y){
//     return x/y;
// }
// function isEven(num){
//     // if(num%2===0){
//     //     console.log(`${num} is a prime number`);
//     // }
//     // else{
//     //     console.log(`${num} is not a prime number`)
//     // }
//     return num %  2===0 ? "it is prime number":"it is not prime number";
// }
// console.log(isEven(9));

