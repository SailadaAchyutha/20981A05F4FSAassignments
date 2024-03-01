///////////////////////ANGULAR ASSIGNMENT1///////////////////////


console.log("**************1.BASIC TYPES*********************")

console.log("-----------------------NUMBER-----------------------");
var a:number=10
console.log("number with assigning number data type: ",a);  //10
// a='abc' -----> shows error

let num:any ='abc';
console.log("number without assigning any data type: ",num);    //abc
num=150 //hence its type is any it won't show error
console.log("After changing the value: ",num);  //150

console.log("----------------STRING AND BOOLEAN------------------")

var b:string='angular';
var c:boolean=!true;
console.log("string: ",b,"\nBoolean value: ",c); //angular, false

console.log("----------------ARRAY OF NUMBERS------------------")

var q :number[] =[1,2,4,3,5,32,43,9]
console.log("q:",q,"\nq[3]",q[3],"\nlast index value",q[(q.length)-1]);    //[1,2,4,3,5,32,43,9],3,9
q.push(5)
var w=q.indexOf(43)
console.log("q: ",q,"Index of 43 = ",w) ; //[1,2,4,3,5,32,43,9,5],6

console.log("----------------TUPLE------------------")

var tup=[81,"america",23.45,89]
console.log("tuple: ",tup)
var tup1 : [number,string]=[3,'achyu']
console.log("tuple1: ",tup1)

let tup2:any = []
tup2[0]= 8179
tup2[1]="achyu"
console.log("tuple2: ",tup2)

console.log("----------------ENUM FOR DAYS OF THE WEEK------------------")

enum daysOfWeek{sunday,monday,tuesday,wednesday,thursday,friday,saturday}
console.log("Monday number: ",daysOfWeek.monday)
console.log("friday number: ",daysOfWeek.friday)


enum dow{mon="monday",wed="wednesday",thur="thursday",fri="friday",sun="sunday",sat="saturday",tue="tuesday"}
console.log("mon: ",dow.mon)
console.log("sun: ",dow.sun)

console.log("**************2.FUNCTIONS*********************")

console.log("**************SUM OF TWO NUMBERS*********************\n")
function addnumbers(p:number,z:number)
{
    console.log("Sum of 2 numbers ",p,' and ',z,": ",p+z)
}
addnumbers(35,46)

console.log("-------------ANONYMOUS FUNCTION-----------------")

let l=function (p:number,z:number){
    return p+z
}
console.log("Sum of 2 numbers using ANONYMOUS function: ",l(234,56),"\n")

console.log("-------------ARROW FUNCTION-----------------")
 let r=(d:number,x:number)=>{
    return d+x
 }
 console.log("Sum of 2 numbers using ARROW function: ",l(123,456))

 console.log("----------------CAPITALIZE THE STRING------------------")

 let t=(sname:string)=>{
    return sname.charAt(0).toUpperCase() + sname.slice(1);
 }

 console.log("Capitalized string: ",t("angular"))

 console.log("**************3.INTERFACES*********************")

 interface Person{
    name:string,
    age:number,
    email:string
 }
 function user(user1:Person){
    console.log("Name: ",user1.name,"\nAge: ",user1.age,"\nEmail: ",user1.email)
 }
 let user2={name:"Angular",age:19,email:"angular@ts"}
 user(user2)

 console.log("\n**************4.CLASSES*********************")

class Car{
    make:string;
    model:string;
    year:number;
    displayInfo(){
        console.log("Make: ",this.make,"\nModel: ",this.model,"\nYear: ",this.year);
    }
}
let opt=new Car();
opt.make="Ford"
opt.model="Ecosport"
opt.year=2019
opt.displayInfo()

console.log("**************5.GENERICS*********************")


function ReverseArray<T>(array: any): any {
    return array.reverse();
}
let h=[1,45,23,78,45,78,34]
console.log("Before array reversing: ",h,"\n");
let ot = ReverseArray(h); 
console.log("After array reversing: ",ot);






