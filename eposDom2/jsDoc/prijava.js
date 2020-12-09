const form = document.getElementById('forma');
const ime = document.getElementById('Ime');
const prezime = document.getElementById('Prezime');
const password = document.getElementById('password');
const greska = document.getElementById('greska');

form.addEventListener('submit', (e) => {

    let messges = [];

    if (!(ime.value.includes(''))) {
        messges.push('Morate uneti ime\n');
    }

    if (!(prezime.value.includes(''))) {
        messges.push('Morate uneti prezime\n');
    }

    if (password.value.length < 6) {
      var al = window.alert('Šifra je kraća od 6 karaktera.')
      var openedWindow = window;
      openedWindow.close();
    }

    if (messges.length > 0) {
        e.preventDefault();
        greska.innerText = messges.join("");
    } else {
        var alert = window.alert('Uspešno ste se prijavili!')
        var openedWindow = window;
        openedWindow.close();
    }


});