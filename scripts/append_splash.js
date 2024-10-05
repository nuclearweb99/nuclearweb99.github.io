// AFTER 2 HOURS I HAVE MANAGED TO IMPLEMENT SPLASH TEXTS!!!
function rand_item() {
    return(splashes[(Math.floor(Math.random() * splashes.length))]);
}
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
    ""
]
var p = document.createElement("p");
p.style.color = "yellow";
p.style.fontStyle = "bold";
p.textContent = rand_item();
document.body.appendChild(p);