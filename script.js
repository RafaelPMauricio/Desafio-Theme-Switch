let backgroundTheme = document.getElementById('body')
let button = document.getElementById('switch-button')

let theme = 'light'

function changeTheme(){
    switch(theme){
        case 'light':
            backgroundTheme.style.backgroundColor = "var(--dark)"
            button.style.transform = "translateX(-55px)"
            theme = 'dark'
        break;
        case 'dark':
            backgroundTheme.style.backgroundColor = 'var(--light)'
            button.style.transform = "translateX(0px)"
            theme = 'light'
        break;
        default:

        break;
    }
}