const form = document.getElementById('form1')
const submit = document.getElementById('submit')
const loader = document.getElementById('loader')

loader.style.display = 'none'
// submit.style.display = 'none'
form.addEventListener('submit',async(e)=>{
e.preventDefault()
var url = window.location.pathname
lastPart = url.split('/')[1];
// console.log(lastPart);
loader.style.display = 'block'
submit.style.display = 'none'

let email = document.getElementById('email')
let pass = document.getElementById('password')


   try {
    const rawResponse = await fetch('http://localhost:4000/'+lastPart+'/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.value, 
          password: pass.value
      })
      });
      const content = await rawResponse.json();
    //   console.log(window.location.origin);
      loader.style.display = 'none'
      console.log(content);
     if(content.token) { 
     

      window.location.replace(window.location.origin + "/" + content.userData.company + "/main") ;
     localStorage.setItem('user',content.userData.email)
     localStorage.setItem('rol',content.userData.rol)
     localStorage.setItem('token',content.token)
    }else{
        alert(content)
        loader.style.display = 'none'
        submit.style.display = 'block'
        
    }
    
   } catch (e) {
    console.log(e);
   }


})

// how to center a div?