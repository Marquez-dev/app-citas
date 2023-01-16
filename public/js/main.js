
let rol = localStorage.getItem('rol')
const divcompany = document.getElementById('divcompany')
const divusuarios = document.getElementById('divusuarios')
const divhorario = document.getElementById('divhorario')
 const divcliente = document.getElementById('divcliente')
if(rol != 'developer')divcompany.style.display = 'none'
if(rol =='user'){
    divcompany.style.display = 'none'
    divusuarios.style.display = 'none'
    divhorario.style.display = 'none'
    divcliente.style.display = 'none'
}