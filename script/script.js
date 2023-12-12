        
        var y = document.getElementById("overlay_burger");
        var x = document.getElementById("open_burger");
        var z = document.getElementById("close_bar");
        var barre_burger = document.querySelectorAll(".burgericon");

        
        var msg = document.getElementById("overlay_msg");
        var bgblur = document.getElementById("tel_background")
        var openmsg = document.getElementById("open_msg") 
        var openmail = document.getElementById("contacter_mail") 
        var opentel = document.getElementById("contacter_tel") 
        var maillink = document.getElementById("lienmail") 
        var tellink = document.getElementById("lientel") 

        x.addEventListener('click',function(){
            y.classList.toggle('closeNav');
            barre_burger.forEach(div => {
                this.classList.toggle('burger_open');
            });
        })
    

    function open_overlay_msg(){
        msg.classList.toggle('overlay_msg');
        bgblur.classList.toggle('tel_background');
        openmail.classList.toggle('contacter_mail');
        opentel.classList.toggle('contacter_tel');
        tellink.classList.toggle('lientel');
        maillink.classList.toggle('lienmail');
    }

    function close_overlay(){
        document.getElementsByClassName("tel_background").style.display = "none";
    }