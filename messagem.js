window.addEventListener('load', function() {
    emailjs.init('2Sr6BC9drHhpdIq-S'); // Your User ID
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        emailjs.send('portofolio_service_gwcw8', 'template_rivk42w', {
            from_name: name,
            from_email: email,
            message: message,
        }).then(function() {
            responseMessage.style.display = 'block';
            responseMessage.textContent = 'Mensagem enviada com sucesso!';
            form.reset();
        }, function(error) {
            responseMessage.style.display = 'block';
            responseMessage.textContent = 'Erro ao enviar a mensagem: ' + JSON.stringify(error);
        });
    });
});
