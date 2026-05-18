$(document).ready(function () {
    const inputNama = $('#inputNama');
    const inputEmail = $('#inputEmail');
    const inputNim = $('#inputNim');
    const submitButton = $('#submitButton');

    const result = $('#result');

    submitButton.click(function () {
        const nama = inputNama.val().trim();
        const email = inputEmail.val().trim();
        const nim = inputNim.val().trim();

        result.html('');

        const pNama = $('<p>')
            .text('Nama: ' + nama)
            .addClass('nama');

        const pEmail = $('<p>')
            .text('Email: ' + email)
            .addClass('email');

        const pNim = $('<p>')
            .text('NIM: ' + nim)
            .addClass('nim');

        result.append(pNama);
        result.append(pEmail);
        result.append(pNim);
    });
});

