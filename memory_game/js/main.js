 // console.log("Up and running!");

 // var cardOne = "king";
 // var cardTwo = "king";
 // var cardThree = "queen";
 // var cardFour = "queen";

 // console.log("User flipped " + cardOne);

 var cards = ["queen", "queen", "king", "king"];

 var cardsInPlay = [];
 cardsInPlay.push("queen");
 console.log("User flipped queen");

 var cardOne = ["queen"];
 // console.log("User flipped queen");

 var cardTwo = [].push("queen");
 console.log("User flipped king");

 if (cardsInPlay.length === 2) {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 		alert("You found a match");
 	} else {
 		alert("Sorry, try again.");
 	}
 }
