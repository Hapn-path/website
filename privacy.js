

document.querySelector("#genIn").addEventListener('click', function(){
    document.getElementById("genText").style.display = "block";
    document.getElementById("genIn").style.display = "none";
    document.getElementById("genOut").style.display = "block";
    document.getElementById("genRow").style.border='none';
    

})

document.querySelector("#genOut").addEventListener('click', function(){
    document.getElementById("genText").style.display = "none";
    document.getElementById("genIn").style.display = "block";
    document.getElementById("genOut").style.display = "none";
    document.getElementById("genRow").style.borderBottom='1px solid white';

})


document.querySelector("#polIn").addEventListener('click', function(){
    document.getElementById("polText").style.display = "block";
    document.getElementById("polIn").style.display = "none";
    document.getElementById("polOut").style.display = "block";
    document.getElementById("polRow").style.border='none';
    

})

document.querySelector("#polOut").addEventListener('click', function(){
    document.getElementById("polText").style.display = "none";
    document.getElementById("polIn").style.display = "block";
    document.getElementById("polOut").style.display = "none";
    document.getElementById("polRow").style.borderBottom='1px solid white';

})

document.querySelector("#aboutUs").addEventListener('click', function(){    
    console.log('test')
});
