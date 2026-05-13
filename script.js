// =========================
// FLUXO DE TELAS
// =========================

function openScreen(id){

    const screens = document.querySelectorAll('.screen');

    screens.forEach(screen => {

        screen.classList.remove('active');

    });

    document.getElementById(id).classList.add('active');

}

// =========================
// SISTEMA DE VOZ
// =========================

function speak(text){

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = 'pt-BR';

    speech.volume = 1;

    speech.rate = 0.9;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

// =========================
// AVATAR
// =========================

const avatars = document.querySelectorAll('.avatar');

avatars.forEach(avatar => {

    avatar.addEventListener('click', () => {

        avatars.forEach(a => {

            a.classList.remove('selected');

        });

        avatar.classList.add('selected');

    });

});

// =========================
// TOGGLES
// =========================

const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {

    toggle.addEventListener('click', () => {

        toggle.classList.toggle('active');

    });

});

// =========================
// LOGIN
// =========================

function login(){

    let email = document.getElementById('email').value;

    let senha = document.getElementById('senha').value;

    if(email === '' || senha === ''){

        alert('Preencha todos os campos');

    }else{

        alert('Login realizado com sucesso!');

        openScreen('home');

    }

}

// =========================
// RECUPERAR SENHA
// =========================

function recoverPassword(){

    let email = document.getElementById('recover-email').value;

    if(email === ''){

        alert('Digite seu e-mail');

    }else{

        alert('Código enviado para ' + email);

    }

}

// =========================
// CRIAR CONTA
// =========================

function createAccount(){

    alert('Conta criada com sucesso!');

    openScreen('home');

}
