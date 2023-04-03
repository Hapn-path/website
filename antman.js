console.log('connected');

document.querySelector("body > div > div > div.topBar > div.oneThird > i").addEventListener('click', function(){



    document.querySelector("body > div > div > img").style.display = "none";
    document.querySelector("body > div > div > div.menu").style.display = "block";
    document.querySelector("body > div > div > div.topBar > div.oneThird > i").style.display = 'none';
    document.querySelector("body > div > div > div.topBar > div.oneThird > div").style.display = 'block';
    
   
})

document.querySelector("body > div > div > div.topBar > div.oneThird > div").addEventListener('click', function(){

    document.querySelector("body > div > div > img").style.display = "block";
    document.querySelector("body > div > div > div.menu").style.display = "none";
    document.querySelector("body > div > div > div.topBar > div.oneThird > i").style.display = 'block';
    document.querySelector("body > div > div > div.topBar > div.oneThird > div").style.display = 'none';
})