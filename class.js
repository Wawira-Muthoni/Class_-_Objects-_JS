//Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
//'orange' the program should fetch its price (30.00) and multiply with the quantity 
//requested (2) and return total cost in this printed format (2 Oranges for KES 
//60.00). 
//calculateFruitCost(fruitName, quantity)
//For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 


let Fruitkiosk=[
    {
        name:"melon",
        quantity:2,
        price: 30.00,
    }
]
 function calculateFruitCost(name,quantity){
    let x=Fruitkiosk.find(item=>item.name===name)
    console.log(`${quantity} ${name} for KES ${x.price*quantity}`);
}
calculateFruitCost("melon",9)

//Write a class KioskCalc that has the following fruitsPriceList object.
//this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
//and takes two parameters (fruit, quantity) when initialized i.e. 
//var kioskCalc = new KioskCalc(“orange”, 2);
//Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
//getTotalCost( ) method. 
//kioskCalc.getTotalCost( )  // returns “2 orange for KES 60
class kioskCalc{
    constructor(fruit,quantity){
        this.quantity=quantity
        this.fruit=fruit
        this.fruitpriceList={"Grapes":50,"Blackberry":70,"Pawpaw":30};
        this.getTotalCost=function(){
            return `${quantity} ${fruit} for KES ${quantity*this.price}`
        }
    }
    }
    kioskCalc.prototype.price=90;
     var kiosk=new kioskCalc("Grapes",2);
     console.log(kiosk.getTotalCost());
  
   