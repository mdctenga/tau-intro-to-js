const cookie = {
  name: "Chocolate Chip",
  isGlutenFree: false,
  "+Yummy": true,
  eatCookie: function(){
    console.log("I am eating " + this.name);
  }
};

cookie.name = "Chip Chocolate"; // overwrites the cookie object's name property
cookie.isGlutenFree = true; //overwrites the cookie object's isGlutenFree property
// console.log(cookie);
// console.log(cookie["+Yummy"]);
cookie.eatCookie(); // accesses the eatCookie property in the object cookie and invokes it. This only works because I know that eatCookie is a function

class Cookie {
  constructor(name,isGlutenFree){
    this.name = name;
    this.isGlutenFree = isGlutenFree;
  }

  eatCookie(){
    console.log("I am eating " + this.name);
  }
}
const myCookie = new Cookie("Iced Oatmeal", false);
myCookie.eatCookie();