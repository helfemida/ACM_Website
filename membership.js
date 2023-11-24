const dynamicText = document.querySelector("h1 span")

const words = ["improve your skills?", "productively spend time?", "become competetive?"]
 
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

 const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    console.log(currentWord, currentChar);
    dynamicText.textContent = currentChar; 
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 150)
    } else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100)
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex 
        setTimeout(typeEffect, 1200)
    }
 }
 typeEffect();

var redirectButton = document.getElementById("select-button1");
    redirectButton.addEventListener("click", function() {        
        var redirectUrl = 'https://forms.gle/9KPv4rerwszFypE66'
        window.location.href = redirectUrl;
    }
);

var redirectButton = document.getElementById("select-button2");
    redirectButton.addEventListener("click", function() {        
        var redirectUrl = 'https://forms.gle/9KPv4rerwszFypE66'
        window.location.href = redirectUrl;
    }
);

var redirectButton = document.getElementById("select-button3");
    redirectButton.addEventListener("click", function() {        
        var redirectUrl = 'https://forms.gle/9KPv4rerwszFypE66'
        window.location.href = redirectUrl;
    }
);