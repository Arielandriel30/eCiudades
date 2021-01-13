// JavaScript source code
window.onload = function () {
    fetch('https://my-json-server.typicode.com/Arielandriel30/ApiCP/content')
        .then(response => response.json() )
        .then(data => {
            data.forEach(element => {
                document.querySelector('.ciudades').innerHTML += `
                    
                    
                        <div class="cont-ciudades"> 
                            <p>ID ${element.id}</p>
                            <h4 class="codigopostal"><span>CP:</span> ${element.codigoPostal}</h4>
                            <h4 class="asentamiento"><span>Asentamiento:</span> ${element.asentamiento}</h4>
                            <h4 class="tipoAsentamiento"><span>Tipo:</span> ${element.tipoAsentamiento}</h4>
                            <h4 class="municipio"><span>Municipio:</span> ${element.municipio}</h4>
                            <h4 class="ciudad"><span>Ciudad:</span> ${element.ciudad}</h4>
                            <h4 class="estado"><span>Estado:</span> ${element.estado}</h4>
                            
                           </div>
                       
                `
            });
          })
         }