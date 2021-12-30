// var arr=[a,b,c,d]
// var prime = function (){
//     var num;
//     for (num=0; num<101; num++){
//         if(num%2===0){
//             break;
//         }
//         else if(num%3===0){
//             break;
//         }else if(num%3===0){
//             break;
//         }els
        

//     }
// }







// add new element e btw b and c without using loop

// 3)

// print prime numbers btw 1 to 100

// function prime(n){
//     (n%2 !==0 && n%1==0)
//     return prime
// }
// console.log(prime(100))
 

const prime=n =>[...Array(n).keys()].slice(2).every(diviser => n% diviser !==0)
const primenumber=[...Array(101).keys()].filter(prime)
console.log(primenumber);

// const arr = ["a","b","c","d"]
// console.log(arr.splice(2,0,"e"))
// console.log(arr)

