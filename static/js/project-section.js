let buttons = document.getElementsByClassName('project-button')
let text_title = [
    'Catch The Pearls', 'Moodie', 'Codetu Collection'
]
let content = [

    'Catch The Pearls is a Gaming Application, <br>It is inspired by the classic Snake Game. <br>' +
    '\n' +
    'The project is completely developed in Python Language using PyGame Module.',

    'Moodie is a Flask Web App integrated with a Machine Learning Model, <br>' +
    'It asks user to enter his current thougths and according to that predicts the user\'s mood. <br>' +
    'The model itself has been developed using advanced NLP Techniques and written in Python.',

    'Codetu Collection is a website developed with HTML/CSS, MongoDB and NodeJs.<br>' +
    'The website aims to distribute used books to students.' +
    'The database stores the customer\'s details and notifies it to the owner.',

]
// add event listener to each button
buttons[0].style.backgroundColor = '#a4161a'
buttons[0].style.color = '#FFFFFF'

for(let i = 0; i < buttons.length; i ++){
    // adding color change effect
    buttons[i].addEventListener('click', function (){

        // changing all other buttons to black
        for (let j = buttons.length - 1; j >= 0; j--) {
            console.log('trying to change')
            buttons[j].style.backgroundColor = '#FFFFFF';
            buttons[j].style.color = '#444444'
        }
        // console.log(i)
        // animating the current active button
        anime.remove('.project-button')
        console.log('Clicked the button')
        console.log(this)

        anime({
            targets : this,
            backgroundColor : '#a4161a',
            color: '#FFFFFF',
            duration : 800,
            easing : 'linear',
            loop : 1
        })
        let title = text_title[i]
        console.log(title)
        // anime({
        //     targets : '.project-title',
        //     duration : 800,
        //     innerHTML : title,
        //     easing: 'linear',
        //     loop: 1
        // })
        document.getElementsByClassName('project-title')[0].innerHTML = title
        document.getElementsByClassName('project-content')[0].innerHTML = content[i]
        // anime({
        //     targets : '.project-content',
        //     duration : 800,
        //     innerHTML: title,
        //     easing : 'linear',
        //     loop : 1
        // })
    })


    // resetting the color
    // buttons[i].addEventListener('mouseleave', function (){
    //     console.log('Clicked the button')
    //     console.log(this)
    //     anime({
    //         targets : this,
    //         backgroundColor : '#000000',
    //         duration : 500,
    //         easing : 'linear',
    //         loop : 1
    //     })
    // })
}
