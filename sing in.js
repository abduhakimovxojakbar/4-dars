window.localStorage.setItem('name' , 'abduhakimovxojakbar57@gmail.com')
window.localStorage.setItem('password' , 'parolyoq')    

let error = document.getElementById('error')
let name = document.getElementById('email')
let password = document.getElementById('password')
let button = document.getElementById('button')

button.addEventListener('click' , (e) => {
    e.preventDefault();
    if (window.localStorage.getItem('name') == name.value && window.localStorage.getItem('password') == password.value) {
    window.location.href = 'https://kun.uz/'
    }else{
        error.style.display = 'block'
    }
}

)