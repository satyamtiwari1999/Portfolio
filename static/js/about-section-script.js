// finding dimension of about section

let element = document.getElementsByClassName('about-color');

let container_width = element[0].offsetWidth;
let container_height = element[0].offsetHeight;

// console.log(window.getComputedStyle(element[0])['margin-bottom'])
// ------------------------------------------------------------------------------------------

// filling the container

var parent = document.getElementById('rotate-boxes');

// console.log(container_width, container_height);

// finding cell dimensions
let pix_width = Math.max(container_width / 100, container_height / 70);
let rep = Math.floor(container_width / pix_width)

var cell = `<div class="boxes">${`<p class="box" style="width:${pix_width}px; height:${pix_width}px"></p>`.repeat(rep)}</div>`


// console.log('comparision', rep * pix_width, container_height);

// filling number of rows
for(let i = 0; i < container_height / pix_width - 4; i ++)
{
    parent.innerHTML += cell
}


// this will vary to select cells or columns for the animation
let boxes = document.querySelectorAll('.boxes');




// ---------------------------------------------------------------------------------------------

// adding animation

function strips_on_mouse_hover()
{
    for(let j = 0; j < boxes.length; j ++)
    {
        // when cursor enters
        anime.remove(this)
        boxes[j].addEventListener('mouseenter', function(){
            anime.remove(this)
            anime({
                    targets: this,
                    backgroundColor: 'rgba(164,22,26,0.5)',
                    // scaleY: 1,
                    duration: 300,
                    easing: 'linear',
                    // direction: 'alternate',
                    loop : 1
                });
            })
        
        // when cursor leaves
        anime.remove(this)
        boxes[j].addEventListener('mouseleave', function(){ 
        anime({
                targets: this,
                backgroundColor: 'hsla(0,0%,100%,0)',
                // scale: 1,
                duration: 600,
                easing: 'linear',
                // direction: 'alternate',
                loop : 1
            });
        })

    }
}




strips_on_mouse_hover();


// ---------------------------------------------------------------------------------------------------

// window.addEventListener("scroll", function(){
//     let all_box = document.getElementsByClassName('box')
//     let numbers = []
//     for (let i = 0; i < 1000; i++) {
//         numbers.push(all_box[Math.floor(Math.random() * all_box.length) % all_box.length])
//     }
//
//     anime({
//         targets : numbers,
//         // scale : 2,
//         backgroundColor : 'rgba(164,22,26,0.07)',
//         duration : 100,
//         easing : 'linear',
//         direction: 'reverse',
//         loop : true
//     })
// }, true)
