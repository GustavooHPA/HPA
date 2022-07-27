window.onload = function Ordenar() {
    var itensOrdenados = $('#filmes option').sort(function (a, b) {
        return a.text < b.text ? -1 : 1;
    });

    $('#filmes').html(itensOrdenados);
}

var ifrm = document.getElementById("iframe")

function Enviar() {
    var select = document.getElementById("filmes");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;
    console.log(opcaoTexto); 
    console.log(opcaoValor); 

    if (opcaoValor < 1) {
        alert("Escolha um Filme")
    } else if (opcaoValor == 1) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1rEw67FpmhXEaX4e2ernt_fxv2X2wUXgv/preview")
    } else if (opcaoValor == 2) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/0B7h6w2STaJk6Uy1xWml0TWk4bDA/preview?resourcekey=0-dFZsMEx19Amfs4FWH2MTkA")
    } else if (opcaoValor == 3) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/15wcl9kwSULQt4KbE4DGEz956ob-_Xkfz/preview")
    } else if (opcaoValor == 4) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1HqvBUeK6n2LQFwcdUX5Cm8jzIXbQEev9/preview")
    } else if (opcaoValor == 5) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/14VPGygwP9SraFOaSpIyM-WjaMERONuBB/preview")
    } else if (opcaoValor == 6) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/10WnqnxUWxsk_i22CXD6MJxow8nqZIKMS/preview")
    } else if (opcaoValor == 7) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/17X7Hw1j1SZg5V5VaXSCUNssqrdsNcp-b/preview")
    } else if (opcaoValor == 8) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/17X7Hw1j1SZg5V5VaXSCUNssqrdsNcp-b/preview")
    } else if (opcaoValor == 9) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1JkC9bAoMM0D9VSSp8gDJ8f_cEa-vwKni/preview")
    } else if (opcaoValor == 10) {
        ifrm.setAttribute("src", "")
    } else if (opcaoValor == 11) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1_DeBaSVdjxaJjXw0an3X464EyzM-s5sC/preview")
    } else if (opcaoValor == 12) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1EESPLeviQ_ONB-jJcyYy4sjECGlOLBnj/preview")
    } else if (opcaoValor == 13) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1C04v8oFxme96zcsEer0a0eKVhtSXNwRD/preview")
    } else if (opcaoValor == 14) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/17vIZH-5IFwHBB9aJ9ZUmXiSGKErbL-Cj/preview")
    } else if (opcaoValor == 15) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1cO3IvZ0cIVL07J9q5AExvNjQwVD0e_Kl/preview")
    } else if (opcaoValor == 16) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/1uY4DTE0KWGXOXyBHBEKwhjpUPXlvJKNs/preview")
    } else if (opcaoValor == 17) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/10RzSzDq_dkqydQtTj-WZPthv_SgCX9od/preview")
    } else if (opcaoValor == 18) {
        ifrm.setAttribute("src", "https://drive.google.com/file/d/15z-tKCwx8xaNcc2Rn55YyivUF24K1qNM/preview")
    }
}