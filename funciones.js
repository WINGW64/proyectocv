window.onload = function (){
    document.getElementById("button0").addEventListener("click", function(){
        console.log ("capturamos el click");
        document.getElementById("titulo_principal").innerHTML = "Sebastian Alexander";
    }) 
    document.getElementById("button1").addEventListener("click", function(){
        console.log ("capturamos el click");
        document.getElementById("titulo_principal").innerHTML = "(775)345 094";
    })
    document.getElementById("button2").addEventListener("click", function(){
        console.log ("capturamos el click");
        document.getElementById("titulo_principal").innerHTML = "8907 Camden Ave";
    })
    document.getElementById("button3").addEventListener("click", function(){
        console.log ("capturamos el click");
        document.getElementById("titulo_principal").innerHTML = "tracy.gray@.gmail.com"; 
    });
    
    }
