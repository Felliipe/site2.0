var a = document.getElementsByClassName('num')
        a.addEventListener('click', clicar)
        a.addEventListener('mouseenter', entrar)
        a.addEventListener('mouseout', sair)
        function clicar() {
            a.innerText = 'clicou!'
            a.style.background = 'blue'
        }
        function entrar() {
            a.innerText = 'Entrou!'
            a.style.background = 'black'
        }
        function sair() {
            a.innerText = 'Saiu!'
            a.style.background = 'blue'
        }
