// Array of GIF URLs
const gifElement = document.getElementById("current");

const laptopButton = document.getElementById("laptopbutton");

const hamperButton = document.getElementById("hamperbutton");

const resetButton = document.getElementById("resetbutton");

const tellyButton = document.getElementById("tellybutton");

const homePre = document.getElementById("spawntext");

const laptopPre = document.getElementById("laptoptext");

const tvPre = document.getElementById("tvtext");

let currentIndex = 0;

gifList = [];

// Function to change the GIF

function changeScene() {
        gifElement.src = gifList[currentIndex];
        currentIndex++;  
}

function reset() {
    currentIndex = 0;
    gifList = [];
}

function setLaptop() {
    gifList = [
        "roomgifs/tolaptop.gif",
        "roomgifs/laptop.gif",
        "roomgifs/fromlaptop.gif"
    ];
}

function setTelly() {
    gifList = [
        "roomgifs/totelly.gif",
        "roomgifs/telly.gif",
        "roomgifs/fromtelly.gif"
    ];
}

function setHamper() {
    gifList = [
        "roomgifs/tohamper.gif",
        "roomgifs/hamper.gif",
        "roomgifs/fromhamper.gif"
    ];
}

function setTelly() {
    gifList = [
        "roomgifs/totelly.gif",
        "roomgifs/telly.gif",
        "roomgifs/fromtelly.gif"
    ];
}

function setSpawn() {
    gifElement.src = "roomgifs/spawn.gif";
    homePre.style.display = "inline";
    laptopPre.style.display = "none";
    tvPre.style.display = "none";
}

laptopButton.addEventListener("click", function () {
    setLaptop();
    changeScene();

    homePre.style.display = "none";
    tvPre.style.display = "none";

    laptopButton.style.display = "none";
    hamperButton.style.display = "none";
    tellyButton.style.display = "none";

    resetButton.style.display = "inline";
    laptopPre.style.display = "inline";

    if (currentIndex <= gifList.length - 2) {
        setTimeout(changeScene, 996); 
    }
});

tellyButton.addEventListener("click", function () {
    setTelly();
    changeScene();

    homePre.style.display = "none";
    laptopButton.style.display = "none";
    hamperButton.style.display = "none";
    tellyButton.style.display = "none";

    resetButton.style.display = "inline";
    tvPre.style.display = "inline";
    if (currentIndex <= gifList.length - 2) {
        setTimeout(changeScene, 996); 
    }
});

hamperButton.addEventListener("click", function () {
    setHamper();
    changeScene();

    homePre.style.display = "none";
    
    laptopButton.style.display = "none";
    hamperButton.style.display = "none";
    tellyButton.style.display = "none";

    resetButton.style.display = "inline";

    if (currentIndex <= gifList.length - 2) {
        setTimeout(changeScene, 996); 
    }
});

resetButton.addEventListener("click", function() {
    laptopButton.style.display = "inline";
    hamperButton.style.display = "inline";
    tellyButton.style.display = "inline";

    resetButton.style.display = "none";
    changeScene();
    setTimeout(setSpawn, 996); 
    reset();
    
})
