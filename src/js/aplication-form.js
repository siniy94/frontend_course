$(window).on('load', function() {
    console.log('aplication');

    const formEl = document.forms.aplication;

    formEl.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = formEl.elements.name;
        const phoneInput = formEl.elements.phone;

        if (!nameInput.value && !phoneInput.value)
        {
            alert('Поля с Вашем именем и номером телефона не заполнены');
            return;
        }

        const user = {
            name: nameInput.value,
            phone: phoneInput.value
        }

        console.log(user);
    });
});