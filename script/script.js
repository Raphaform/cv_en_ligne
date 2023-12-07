        
        var y = document.getElementById("overlay_burger");
        var x = document.getElementById("open_burger");
        var z = document.getElementById("close_bar");
        var barre_burger = document.querySelectorAll(".burgericon");
        console.log(barre_burger);
        x.addEventListener('click',function(){
            y.classList.toggle('closeNav');
            console.log('test');
            barre_burger.forEach(div => {
                this.classList.toggle('burger_open');
            });
        })
    
        var tech1 = document.getElementById("technique_part1")
        var tech2 = document.getElementById("technique_part2")
        var tech3 = document.getElementById("technique_part3")
    

