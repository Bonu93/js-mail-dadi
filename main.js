/* 
Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo.
*/


// mail list

const emailList = ['luca.morucci.kb@gmail.com', 'gianlucamancini@yahoo.it', 'bonu93@hotmail.it', 'ale.d@gmail.com']

//refs
const emailInput = document.getElementById('email');
const btnSubmit = document.querySelector('.btn-submit');

//output
const validate = document.getElementById('confirm')

//check input in array
btnSubmit.addEventListener('click', function() {
    const email = emailInput.value.trim().toLowerCase();
    
    if (email === '') {
        alert('Prego inserire indirizzo email');
    } else {
        let emailFound = false;

        for (let i = 0; i < emailList.length; i++) {
            if (emailList[i] === email) {
                emailFound = true;   
                break;         
            }

        }

        //output rules
        if (emailFound) {
            validate.innerHTML = `Esito: Accesso eseguito, l'indirizzo ${email} è presente nella lista`
        } else {
            validate.innerHTML = `Esito: Accesso negato, l'indirizzo ${email} non è presente nella lista`
        }
    } 
})
