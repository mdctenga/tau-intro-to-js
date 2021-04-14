const cookie = {
  name: "Chocolate Chip",
  isGlutenFree: false,
  "+Yummy": true
};

cookie.name = "Chip Chocolate"; // overwrites the cookie object's name property
cookie.isGlutenFree = true; //overwrites the cookie object's isGlutenFree property
console.log(cookie["+Yummy"]);