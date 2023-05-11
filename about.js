console.log('about connected');

document.querySelector("body > div > div > div.topBar > div.oneThird > i").addEventListener('click', function(){



    document.getElementById("aboutMenu").style.display = "none";
    document.querySelector("body > div > div > div.menu").style.display = "block";
    document.querySelector("body > div > div > div.topBar > div.oneThird > i").style.display = 'none';
    document.querySelector("body > div > div > div.topBar > div.oneThird > div").style.display = 'block';
    
   
})

document.querySelector("body > div > div > div.topBar > div.oneThird > div").addEventListener('click', function(){


    document.getElementById("aboutMenu").style.display = "block";
    document.querySelector("body > div > div > div.menu").style.display = "none";
    document.querySelector("body > div > div > div.topBar > div.oneThird > i").style.display = 'block';
    document.querySelector("body > div > div > div.topBar > div.oneThird > div").style.display = 'none';
})


document.querySelector("#home").addEventListener('click', function(){    
    window.location.href="mobile_template.html"
});

document.querySelector("#aboutUs").addEventListener('click', function(){    
    window.location.href="about.html"
});

document.querySelector("#contact").addEventListener('click', function(){    
    window.location.href="contact.html"
});


document.querySelector("#privacy").addEventListener('click', function(){    
    window.location.href="privacy.html"
});

