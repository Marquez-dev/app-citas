  const form = document.getElementById('form2')
  const submit = document.getElementById('submit')
  const loader = document.getElementById('loader')
  
  loader.style.display = 'none'
  form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    loader.style.display = 'block'
submit.style.display = 'none'
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    // console.log(formProps);

    try {
        const rawResponse = await fetch('http://localhost:4000/developer/company', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                formProps
          )
          });
          const content = await rawResponse.json();
          console.log(content);

          content.saveUser && content.saveCompany 
          ?(alert('Guardado con exito'),loader.style.display = 'none',
          submit.style.display = 'block',form.reset())
          :(alert(content.mensaje), loader.style.display = 'none',
          submit.style.display = 'block')
    } catch (e) {
        console.log(e);
    }
  })