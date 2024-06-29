function scuberGreetingForFeet(distance) {
  let result;

  if (distance <= 400) {
    result = "This one is on me!";
  } else if (distance <= 2000) {
    result = "That will be twenty bucks.";
  } else if (distance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else {
    result = "No can do.";
  }
  return result;
}
console.log(scuberGreetingForFeet(199));


function ternaryCheckCity(location) {
  const isCity = (location === "NYC") ? ("Ok, sounds good.") : ("No go.");

  return isCity;
}
console.log(ternaryCheckCity("Pitsburgh"))
// // Write your code here!
// Eeeeiiii Mailoooooood!!!!

function switchOnCharmFromTip(clientTip) {
  
  let response;
  switch (clientTip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you."
      break;
    default:
      response = "Bye.";
      break;
  }
  return response;
}
console.log(switchOnCharmFromTip("generous"));

// // Write your code here!

