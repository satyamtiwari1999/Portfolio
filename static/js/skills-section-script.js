
// -----------------------------------------------------------------------------------

// filling the blocks

let skill_count = [9, 8, 8, 7, 6, 8, 7, 8]
let to_color_in_counter = []

// listing all the indices which have to be coloured
let index = 0
for(let i = 0; i < skill_count.length; i ++)
{
    let current = skill_count[i]
    for(let j = 0; j < 10; j ++)
    {
        if(current)
        {
            to_color_in_counter.push(index)
            current -= 1
        }
        index ++
    }
}
// console.log(to_color_in_counter)
// console.log();

let elems = document.getElementsByClassName('skill-counter')
// console.log(elems.length);


let useful_elems = []
for(let i = 0; i < to_color_in_counter.length; i ++)
{
    useful_elems.push(elems[to_color_in_counter[i]])
}

function fill_skill_count_blocks(useful_elems)
{
    anime({
        targets: useful_elems,
        backgroundColor: '#a4161a',
        loop: 1,
        duration: 1000,
        delay: function(_el, i, l) {
            return i * 80;
          },
        endDelay: function(_el, i, l) {
        return (l - i) * 100;
        }
    })
}


to_be_done = true

window.addEventListener('scroll', function(){
    let sections = document.getElementsByClassName('outermost-container')
    let skill_depth = 0
    // console.log('Entered into scrolling');
    for(let i = 0; i < 2; i ++)
    {
        skill_depth += sections[i].offsetHeight
    }
    // console.log(skill_depth);
    if (window.pageYOffset > skill_depth && to_be_done)
    {
        to_be_done = false
        return fill_skill_count_blocks(useful_elems)
    }
}, true)

// -----------------------------------------------------------------------------------

// spinning the eyeballs

anime({
    targets: document.getElementsByClassName('skill-point'),
    // backgroundColor: 'hsla(120, 60%, 70%, 0)',
    // scale: 1,
    rotate: {
        value: 360,
        duration: 1000,
        easing: 'linear'
      },
    duration: 800,
    easing: 'linear',
    // direction: 'alternate',
    loop : true
});


// -----------------------------------------------------------------------------------

// moving texts

// anime({
//     targets: '.skill-line, .skill-name',
//     translateX: -100,
//     direction: 'reverse',
//     loop: 1,
//     delay: function(el, i, l) {
//       return i * 150;
//     },
//     endDelay: function(el, i, l) {
//       return (l - i) * 100;
//     }
//   });


  // -----------------------------------------------------------------------------------

