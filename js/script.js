// ============================================
// EFEITO DE DIGITAÇÃO NO HERO
// ============================================

// Aqui você pode trocar as frases que vão ser "digitadas"
const frases = [
    "Desenvolvedor Front-End em Formação",
    "Analista de Sistemas e Interfaces (UI/UX)",
    "Apaixonado por Games e Código"
];

let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;
const elementoDigitado = document.getElementById("texto-digitado");

function digitar() {
    const frase = frases[fraseAtual];

    if (!apagando) {
        // Escrevendo letra por letra
        elementoDigitado.textContent = frase.substring(0, letraAtual + 1);
        letraAtual++;

        if (letraAtual === frase.length) {
            // Terminou de escrever, espera 2 segundos e começa a apagar
            apagando = true;
            setTimeout(digitar, 2000);
            return;
        }
    } else {
        // Apagando letra por letra
        elementoDigitado.textContent = frase.substring(0, letraAtual - 1);
        letraAtual--;

        if (letraAtual === 0) {
            // Terminou de apagar, vai pra próxima frase
            apagando = false;
            fraseAtual = (fraseAtual + 1) % frases.length;
        }
    }

    // Velocidade: escrevendo = 80ms, apagando = 40ms
    const velocidade = apagando ? 40 : 80;
    setTimeout(digitar, velocidade);
}

// Começa o efeito quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
    if (elementoDigitado) {
        setTimeout(digitar, 1000);
    }
});

// ============================================
// MENU HAMBÚRGUER (para celular)
// ============================================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("ativo");
    });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("ativo");
    });
});

// ============================================
// NAVBAR MUDA AO FAZER SCROLL
// ============================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ============================================
// ANIMAÇÃO DAS BARRAS DE HABILIDADES
// ============================================
function animarBarras() {
    const barras = document.querySelectorAll(".barra-progresso");

    barras.forEach(function(barra) {
        const porcentagem = barra.getAttribute("data-porcentagem");
        const posicao = barra.getBoundingClientRect();

        // Só anima quando a barra aparece na tela
        if (posicao.top < window.innerHeight && posicao.bottom > 0) {
            barra.style.width = porcentagem + "%";
        }
    });
}

// Verifica toda vez que o usuário faz scroll
window.addEventListener("scroll", animarBarras);
// Verifica quando a página carrega
window.addEventListener("load", animarBarras);

// ============================================
// BOTÃO VOLTAR AO TOPO
// ============================================
const btnTopo = document.getElementById("btn-topo");

window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        btnTopo.classList.add("visivel");
    } else {
        btnTopo.classList.remove("visivel");
    }
});

if (btnTopo) {
    btnTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ============================================
// FORMULÁRIO DE CONTATO (alerta ao enviar)
// ============================================
const formContato = document.getElementById("form-contato");

if (formContato) {
    formContato.addEventListener("submit", function(evento) {
        evento.preventDefault();

        // Pega os valores dos campos
        const nome = document.getElementById("nome").value;

        // Mostra mensagem de sucesso
        alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso! (Este é um site de demonstração)");

        // Limpa o formulário
        formContato.reset();
    });
}

// ============================================
// ANIMAÇÃO DE ENTRADA DAS SEÇÕES (scroll)
// ============================================
function animarEntrada() {
    const elementos = document.querySelectorAll(".secao, .projeto-card, .habilidade-card");

    elementos.forEach(function(elemento) {
        const posicao = elemento.getBoundingClientRect();
        const alturaJanela = window.innerHeight;

        if (posicao.top < alturaJanela - 100) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
        }
    });
}

// Aplica estilo inicial (invisível e deslocado pra baixo)
document.querySelectorAll(".secao, .projeto-card, .habilidade-card").forEach(function(el) {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

window.addEventListener("scroll", animarEntrada);
window.addEventListener("load", animarEntrada);