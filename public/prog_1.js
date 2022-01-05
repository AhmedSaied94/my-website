let winH = $(window).height()
let headtopH = $(".headtop").innerHeight()
let navH = $(".headnav").innerHeight()
// $("#slider, .carousel-item").height(winH - (headtopH + navH))

// let items = $(".carousel-item")
// console.log(items[1].className)

$('.main-section').css('min-height', winH - (headtopH + navH))
$('.main-section').css('margin-top', (headtopH + navH))

// function slide(){
//   for(i=0;i<items.length;i++){
//     if(items[i].className.includes("active")){
//       items[i].className.replace("active", "")
//       if(i>1){
//         items[0].className += "active"
//         break;
//       }else{
//         items[i+1].className() += "active"
//         break;
//       }
//     }

//   }
// }

// setInterval(slide(), 5000)