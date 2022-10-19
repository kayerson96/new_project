var verFactura = () => {
  const espacio = document.getElementById("espacio");
  const fecha = document.getElementById("fecha").value;
  let agosto = "8";
  let septiembre = "9";
  let octubre = "10";

  if (fecha == agosto) {
    espacio.innerHTML = '<img  class="container" src=img/factura8.jpg>';
        } 
        else if (fecha == septiembre) {
            espacio.innerHTML = '<img class="container" src=img/factura9.jpg>';
        }
             else if (fecha == octubre) {
                espacio.innerHTML = '<img class="container" src=img/factura10.jpg>';
            }   
            else{
                espacio.innerHTML = '<h3>No hay Factura disponible</h3>';
            }

  espacio.hidden = false;
};
function ocultar() {
  espacio.hidden = true;

}

