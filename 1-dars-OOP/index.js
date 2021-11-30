//!OOP
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const btn = document.querySelector(".login");
const box1 = document.querySelector(".box-1");
const mony = document.getElementById("mony");
var users = [];
const Person = function (lastName, firstName, pull) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.pull = pull;
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let obj = new Person(fname.value, lname.value, mony.value);
  // fname.value = "";
  // lname.value = "";
  users.push(obj);
  console.log(users);
  let res = users.map(() => {
    return (box1.innerHTML += `<div class="box>
    <p class="pp">${fname.value}, ${lname.value}, ${mony.value}</p>
    </div>`);
  });
  // const amout = user.reduce((total, person) => {
  //   return total + person;
  // });
  // console.log(fname.value);
  // console.log(lname.value);
});
