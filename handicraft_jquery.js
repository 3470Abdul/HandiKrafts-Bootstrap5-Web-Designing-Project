
$(document).ready(function() {
    $(".click_header").hide(.5)
    $(".fa-bars").click(function() {
        $(".click_header").slideToggle("fast")
        
        
    })
    
    $("#open_search").click(function() {
        $(".search_bar").fadeToggle("fast")
       
    })
    $("#search_open").click(function() {
        $(".search_bar").fadeToggle("fast")
       
    })
    $("#dcs").click(function() {
        $("#description_cont1").show(500)
        $("#spec_cont").hide(500)
        $("#care_cont").hide(500)
        $("#dcs").css("background-color"," rgb(255, 196, 0)")
        $("#dcs").css("color","white")
        $("#dcs").css("border","1px solid white")
        $("#dcs").css("border-bottom","none")
        $("#dcs").css("font-weight","700")
        
        
        $("#spec").css("background-color"," white")
        $("#spec").css("color","black")
        $("#spec").css("border","1px solid rgb(157, 157, 157)")
        $("#spec").css("border-bottom","none")
        $("#spec").css("font-weight","500")

        $("#care").css("background-color"," white")
        $("#care").css("color","black")
        $("#care").css("border","1px solid rgb(157, 157, 157)")
        $("#care").css("border-bottom","none")
        $("#care").css("font-weight","500")
    })

    $("#spec").click(function() {
        $("#description_cont1").hide(500)
        $("#spec_cont").show(500)
        $("#care_cont").hide(500)
        $("#spec").css("background-color"," rgb(255, 196, 0)")
        $("#spec").css("color","white")
        $("#spec").css("border","1px solid white")
        $("#spec").css("border-bottom","none")
        $("#spec").css("font-weight","700")

        
        $("#dcs").css("background-color"," white")
        $("#dcs").css("color","black")
        $("#dcs").css("border","1px solid rgb(157, 157, 157)")
        $("#dcs").css("border-bottom","none")
        $("#dcs").css("font-weight","500")


        $("#care").css("background-color"," white")
        $("#care").css("color","black")
        $("#care").css("border","1px solid rgb(157, 157, 157)")
        $("#care").css("border-bottom","none")
        $("#care").css("font-weight","500")

    })

    $("#care").click(function() {
        $("#description_cont1").hide(500)
        $("#spec_cont").hide(500)
        $("#care_cont").show(500)
        $("#care").css("background-color"," rgb(255, 196, 0)")
        $("#care").css("color","white")
        $("#care").css("border","1px solid white")
        $("#care").css("border-bottom","none")
        $("#care").css("font-weight","700")

        $("#dcs").css("background-color"," white")
        $("#dcs").css("color","black")
        $("#dcs").css("border","1px solid rgb(157, 157, 157)")
        $("#dcs").css("border-bottom","none")
        $("#dcs").css("font-weight","500")

        $("#spec").css("background-color"," white")
        $("#spec").css("color","black")
        $("#spec").css("border","1px solid rgb(157, 157, 157)")
        $("#spec").css("border-bottom","none")
        $("#spec").css("font-weight","500")
    })
    $("#products").click(function() {
       
        $("#show_products").slideToggle()
        
    })
    $("#products10").click(function() {
       
        $("#show_products10").slideToggle()
        
    })
    
    
    
})



// _____________________________SLIDERS______________________
var index = 0;
show(index);

function currentslide(n) {
  index = n;
  show(index);
}
function show() {
  var slides = document.getElementsByClassName("slides")
  var dots = document.getElementsByClassName("dots")
  for( i = 0; i < slides.length; i++ ) {
    slides[i].style.display="none"
  }
  if (index == slides.length) {
    index = 0
  }
  for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

  slides[index].style.display="block"
  dots[index].className += " active";

  index++;
  setTimeout(function() {show(index);}, 3000)}

// ________________________STICKY HEADER____________________________

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("header10");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > 1) {
        header.classList.add("sticky");

        } 
        else {
        header.classList.remove("sticky");
        }
        
    }
    
    
    


// _____________________HANDICRAFT_PRODUCTS HOVER_______________________

    // function product_hover() {
    // document.getElementById("show_products").style.display="flex"
    // window.scrollTo({top:'1', behavior: 'smooth'})
    // }

   

    function wall() {
    document.getElementById("img1").style.display="flex"
    document.getElementById("img2").style.display="none"
    document.getElementById("img3").style.display="none"
    document.getElementById("img4").style.display="none"
    document.getElementById("img5").style.display="none"
    document.getElementById("img6").style.display="none"

   
    }

    function spics() {
    document.getElementById("img2").style.display="flex"
    document.getElementById("img1").style.display="none"
    document.getElementById("img3").style.display="none"
    document.getElementById("img4").style.display="none"
    document.getElementById("img5").style.display="none"
    document.getElementById("img6").style.display="none"


    }

    function brass() {
    document.getElementById("img3").style.display="flex"
    document.getElementById("img1").style.display="none"
    document.getElementById("img2").style.display="none"
    document.getElementById("img4").style.display="none"
    document.getElementById("img5").style.display="none"
    document.getElementById("img6").style.display="none"
    }


    function jars() {
    document.getElementById("img4").style.display="flex"
    document.getElementById("img1").style.display="none"
    document.getElementById("img3").style.display="none"
    document.getElementById("img2").style.display="none"
    document.getElementById("img5").style.display="none"
    document.getElementById("img6").style.display="none"
    }


    function pots() {
    document.getElementById("img5").style.display="flex"
    document.getElementById("img1").style.display="none"
    document.getElementById("img3").style.display="none"
    document.getElementById("img4").style.display="none"
    document.getElementById("img2").style.display="none"
    document.getElementById("img6").style.display="none"
    }

    function tis() {
    document.getElementById("img6").style.display="flex"
    document.getElementById("img1").style.display="none"
    document.getElementById("img3").style.display="none"
    document.getElementById("img4").style.display="none"
    document.getElementById("img5").style.display="none"
    document.getElementById("img2").style.display="none"
    }




