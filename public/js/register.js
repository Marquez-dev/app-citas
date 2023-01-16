
var name2 = document.getElementById('name')
var email = document.getElementById('email')
var password = document.getElementById('password')
const form = document.getElementById('form')
const submit = document.getElementById('submit')
const loader = document.getElementById('loader')
loader.style.display = 'none'
form.addEventListener('submit',async(e)=>{

    e.preventDefault()
    loader.style.display = 'block'
submit.style.display = 'none'
    var data = {
        name:name2.value,
        email:email.value,
        password:password.value
    }

    try {
        const query = await fetch('http://localhost:4000/api/register',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })

        const response = await query.json()

        !response.error ? window.location.replace(window.location.origin + "/api/login")
        : (alert(response.error),loader.style.display = 'none',
        submit.style.display = 'block')
        // console.log(response);
    } catch (err) {
        console.log(err);
    }
})