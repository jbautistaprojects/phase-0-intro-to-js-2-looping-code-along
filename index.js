// Code your solutions in this file
//for (let age = 30; age < 40; age++){
  //  console.log(`I'm ${age} years onload. Happy Birthday to me!`);
   //debugger; 
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //  for (let i = 0; i<gifts.length; i++) {
    //    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //}
    //return gifts;
//}
//wrapGifts(gifts);

function writeCards(nameArray, event){
    const writeCardArray = [];
    for (let i=0; i < nameArray.length; i++) {
    writeCardArray[i]=(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
   // debugger;
    }
    return(writeCardArray)
}
 writeCards(["Charlie", "Samip", "Ali"], "birthday")

 //const gifts = ["teddy bear", "drone", "doll"];

 //function wrapGifts(gifts) {
   //let i = 0; // the initialization moves OUTSIDE the body of the loop!
   //while (i < gifts.length) {
     //console.log(`Wrapped ${gifts[i]} and added a bow!`);
     //i++; // the iteration moves INSIDE the body of the loop!
   //}
 
   //return gifts;
 //}
 
 //wrapGifts(gifts);

function countDown(i) {
    while (i >= 0) {
        console.log(i--);
        i=i--;
    }
    return(i);
}
countDown(4);