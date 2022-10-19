const verificar= ()=>{
    const inputusuario= document.getElementById('usuario').value;
    const inputClve= document.getElementById('clave').value;
        if(inputusuario =="Kuepa2022" && inputClve =="kuepa2022*" ){
            window.location ='/back-project/administrador.html';
        
        }else(alert('Cave incorrecta'))
    }