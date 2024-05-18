

let amount ="100"
amount=Number(amount)

console.log(amount,typeof amount);

let number = 100
number=String(number)
console.log(number, typeof number)



let decimal= "99.5"
decimal=parseFloat(decimal)
console.log(decimal,typeof decimal)



let x;
name="januzaj"
age=30

//x=hello, myname is"+" "+name + +""+"my age is"+ age
x=`hello my name is ${name} and i am ${age}`
console.log(x)


const p = " ingenz januzaj"
s=p.toUpperCase()
//s=p.substring(0, 2)
s=p.replace("januzaj","mbabazi");
console.log(s);

let mytring = "developer"
//s=mytring.toUpperCase().substring(0,1)+mytring.substring(1)
s=mytring.toUpperCase().slice(0,1)+mytring.slice(1)
console.log(s)
console.log(Math);

console.log(Math)

let j;
j=Math.sqrt(9)
j=Math.round(9.5)
j=Math.pow(2,6)
console.log(j);


let q ;
let k;
q=Math.random()*50+1;
k=Math.random()*50+1;
t=q+s
h=q/k
console.log(q,"+",k,"=",t)
console.log(q,"/",k,"=",h)


