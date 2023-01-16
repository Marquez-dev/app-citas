const form = document.getElementById('form')
const week = document.getElementById('week')
// const submit = document.getElementById('submit')
// const loader = document.getElementById('loader')

// loader.style.display = 'none'
form.addEventListener('submit',async(e)=>{
  e.preventDefault();

  var array = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
  array.push(checkboxes[i].value)
}
//   loader.style.display = 'block'
// submit.style.display = 'none'
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
// console.log(formProps);

var array2 = []

array2.push({
    days:array,
    week:week.value,
    email:localStorage.getItem('user')
})
// array.push({week:week.value})
console.log(array2);


try {
    const sendData = await fetch('http://localhost:4000/api/schedule',{
       method:'POST',
       headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
       } ,
       body:JSON.stringify(array2)
    })

    const response = await sendData.json()

   if(response.mensaje ) alert(response.mensaje)
   form.reset()
} catch (err) {
    console.log(err);
}

})