const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach( (btn) => {
    // console.log(btn);
    btn.addEventListener('click',(e) => {
        // console.log(e.target)
        // switch (e) {
        //     case grey:
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case white:
        //         body.style.backgroundColor = e.target.id
        //         break;
        //     case blue:
        //         body.style.backgroundColor = e.target.id
        //         break;
        
        //     default:
        //         body.style.backgroundColor = e.target.id
        //         break;
        // }
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey'
        } else if(e.target.id === 'white'){
            body.style.backgroundColor = 'white'
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
} )
