const submitBtn = document.getElementById('submitButton');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const text = document.getElementById('textInput').value;

    if(name == '' || email == '' || text ==''){
        alert('Fields cannot be ampty');
    }
    else{
        const body = "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + text;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "yermekalbina@gmail.com",
            Password : "F9BBEC16ACED2A41BB0C3B52EEDAEEE9551F",
            To : 'yermekalbina@gmail.com',
            From : 'yermekalbina@gmail.com',
            Subject : 'Contact us',
            Body : body
        }).then(
            message => alert(message)
        ).cathc(
            error => alert(error)
        );
    }
});
