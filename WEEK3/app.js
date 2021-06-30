// class IceCreamFactory {
//     constructor() {
//       this.createIcecream = function(flavor) {
//         let iceCream;
//         if (flavor === 'chocolate'){
//             iceCream = new Chocolate();
//         }  
//         else if (flavor === 'mint'){
//             iceCream = new Mint();
//         } 
//         else if (flavor === 'strawberry'){
//             iceCream = new Strawberry();
//         }
//         return iceCream;
//       };
//     }
//   }
  
//   class Chocolate {
//     constructor() {
//       this.icecreamFlavor = "chocolate";
//       this.message = function() {
//         return `You chose the ${this.icecreamFlavor} flavor.`;
//       };
//     }
//   }
  
//   class Mint {
//     constructor() {
//       this.icecreamFlavor = "mint";
//       this.message = function() {
//         return `You chose the ${this.icecreamFlavor} flavor.`;
//       };
//     }
//   }
  
//   class Strawberry{
//     constructor() {
//       this.icecreamFlavor = "strawberry";
//       this.message = function() {
//         return `You chose the ${this.icecreamFlavor} flavor.`;
//       };
//     }
//   }
  
//   // creating objects
//   const iceCreamfactory = new IceCreamFactory();
  
//   const chocolate = iceCreamfactory.createIcecream('chocolate');
//   const mint = iceCreamfactory.createIcecream('mint');
//   const strawberry = iceCreamfactory.createIcecream('strawberry');
  
//   console.log(chocolate.message()); 
//   console.log(mint.message()); 
//   console.log(strawberry.message()); 


class Users {
    constructor(email, name, login){
        this.email = email;
        this.name = name;
        this.login = login;
        this.loginMessage = function() {
         if (this.login === true)  {
             return `${name} has successfully logged in`;
         } else {
             return "please you need to login";
         }

        };

    }
}

const nelson = new Users("nelson@gmail.com", "nelson", true);
const peter = new Users("peter@gmail.com", "peter", false);


console.log(nelson.loginMessage());
console.log(peter.loginMessage());