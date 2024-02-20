console.log("hii dunia walo");
let age=prompt("enter your age","age")
console.log(age);
 if (age<18) {
    alert("you are below 18 ");
    console.log("you are below 18 and you are not permit");

}
else
  {  alert("you are above  18 ");
    console.log("you are above 18 So, you are permit");
}
let agechange=confirm("do you want to change your age :"+age);


 if (agechange>18) {
    console.log("you are permit");
 }
 else{
    console.log("you are not permit")
 }
 console.log(agechange);
