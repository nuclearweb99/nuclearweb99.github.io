// AFTER 2 HOURS I HAVE MANAGED TO IMPLEMENT SPLASH TEXTS!!! 
function rand_item() {
    return(splashes[(Math.floor(Math.random() * splashes.length))]);
}

// the normal splashes
var splashes = [
    "DOOM!",
    "100% more BANG!",
    "Quake!",
    "No Trillinear filtering!",
    "Supply and demand!",
    "Fantastic!",
    "May contain nuts!",
    "Check out Terraria!",
    "Check out Factorio!",
    "Check out Half Life!",
    "Check out AoE!",
    "Check out Wolfenstein 3D!",
    "Check out Minecraft!",
    "Check out Fortnite!",
    "Check out Undertale!",
    "Check out Untitled Goose Game!",
    "Check out Baldi's Basics!",
    "This feature took 2 hours to implement!",
    "You see an APPLE!",
    "Mind the gap!",
    "I am bri'ish!",
    "ITS SPHERICAL!",
    "Mr. Howard eats pants!",
    "Hosted on Github!",
    "Zeroland!",
    "You'll rue this day!",
    "Coo Coo Crazy!",
    "Minecraft FRVR!",
    "The cake is a lie!",
    "Lorem Ipsum!",
    "As seen on TV!",
    "Game Theory!",
    "9 Years in development!",
    "AIR!",
    "Secure, contain, protect!",
    "Impulse 9!",
    "Includes garbage collection!",
    "Clown down!",
    "I just mined bedrock!",
    "Never gonna give you up...",
    "HAHAHAHA! RONALDINHO SOXXER!!",
    "You're Winner!",
    "Spy Mains!",
	"Saver of Humens!",
	"Mom has dead!",
	"I LOVED WIFE LIKE SUN RAISE! YOU WILL SUFFAR!",
	"Normal people close!",
	"The Pants were dead!",
    "Scout's pants ain't blue!",
    "I HATE C++",
    "Software renderer also available!",
    "Check out Papers, Please!",
    "Glory to Arstotzka!",
    "Check out 2B2T!",
    "64 bit integers!",
    "No integer overflow!",
    "Spy-checking!",
    "No bot problem!",
    "Should we friendly?",
    "Rip and tear 'till done!",
    "myhouse.wad!",
    "Follow the train CJ!",
    "^ Cool",
    "You deserve to be NUCLEAR!",
    "2FA Sucks!",
    "Prostagma!",
    "Bazinga!",
    "Their eyes met across the laboratory... the chemistry was instataneous!",
    "Still water!",
    "Highly Trained Professional!"
]
var p = document.createElement("p");
const windowArgument = window.location.search;
var splashContent = "";
p.id = "splashtext";
if (windowArgument == "?supersecret") {
    splashContent = "You found the secret!"
} else {
    splashContent = rand_item(splashes);
}
document.title = "Nuclear Web: ".concat(splashContent);
p.textContent = splashContent;
document.body.appendChild(p);