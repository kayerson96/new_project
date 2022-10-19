const verificar= async()=>{
    const inputusuario= document.getElementById('usuario').value;
    const inputClve= document.getElementById('clave').value;
        if(inputusuario =="Kuepa2022" && inputClve =="kuepa2022*" ){
            const { value: accept } = await Swal.fire({
                title: 'Terminos y Condiciones',
                input: 'checkbox',
                inputValue: 1,
                inputPlaceholder:
                  'De acuerdo con nuestros T&C',
                confirmButtonText:
                  'Continue <i class="fa fa-arrow-right"></i>',
                inputValidator: (result) => {
                  return !result && 'es necesario que aceptes nuestros T&C'
                }
              })
              
              if (accept) {
                Swal.fire(window.location ='/back-project/administrador.html');
              };
        


        }else(Swal.fire("clave incorrecta"))


    }
    const  register= async()=>{


        const { value: accept } = await Swal.fire({
            title: 'Terminos y Condiciones',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
              'De acuerdo con nuestros T&C',
            confirmButtonText:
              'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
              return !result && 'es necesario que aceptes nuestros T&C'
            }
          })
          
          if (accept) {
            Swal.fire(window.location ='/back-project/index.html');
          }
    }