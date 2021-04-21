let header = document.getElementById("header")
// console.log(header)

function change_color()
{
    // console.log('scrolled');
    let banner_bottom = document.getElementsByClassName('banner-space')[0].offsetHeight - document.getElementById("header").offsetHeight - 15

    if(window.pageYOffset >= banner_bottom)
    {
        document.getElementById("header").style.backgroundColor = '#a4161a'
    }
    else if(window.pageYOffset >= 15)
    {
        document.getElementById("header").style.backgroundColor = 'black'
    }
    else
    {
        document.getElementById("header").style.backgroundColor = '#212529'
    }
}

window.addEventListener('scroll', function(){
    return change_color()
}, true);

