

const formularioContato = document.getElementById('formulario');

formularioContato.addEventListener('submit', function (e) {

    e.preventDefault()

    let nome = document.getElementById('name').value;
    let fone = document.getElementById('fone').value;
    let email = document.getElementById('email').value;
    let texto = document.getElementById('texto').value; 
    

    fetch('https://webhook.site/8a41ec94-db0b-41f5-8228-12340c84c52a', {

        method: 'POST',

        body: JSON.stringify({

            name: nome,
            fone: fone,
            email: email,
            texto: texto

        })

    })
   
})

function enviar() {
   alert("Obrigado, seus dados foram enviados com sucesso!");
  }