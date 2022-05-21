const SOCKET_BASE_PATH = 'http://localhost:3090/'

let loginForm = document.getElementById('loginForm');
let loggedIn = false;

let username = document.getElementById('username');
let loginButton = document.getElementById('setNameBtn');
loginButton.onclick = login

let disconnectBtn = document.getElementById('disconnectBtn');
disconnectBtn.onclick = logout

let charArea = document.getElementById('charArea');

function login(){
    if (!username.value || loggedIn) return;

    loggedIn = true;
    loginForm.setAttribute('hidden', true)
    disconnectBtn.removeAttribute('hidden')
    charArea.removeAttribute('hidden')
    createConnection()

}

function logout(){
    if (loggedIn){
        loginForm.removeAttribute('hidden');
        charArea.setAttribute('hidden', true)
        charArea.innerHTML=""
        disconnectBtn.setAttribute('hidden', true)
        loggedIn = false
        destroyConnection()
    }
}

function createConnection(){
    socket = io( SOCKET_BASE_PATH, { query: { name: "QuErY" } } )
}

function destroyConnection(){
    socket.disconnect()
}