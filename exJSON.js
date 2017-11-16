//Sintaxis Objeto JSON

    /*var persona = {
        "nombre": "Carlos",
        "apellido": "Mora",
        "edad": 25,
        "casado": true,
        "direccion": [{
                "provincia": "Cartago"
            },
            {
                "calle": 12,
                "avenida": 7
            }
        ]
    };
    

    console.log(persona);*/

    //var salida = `<li>${persona.nombre} vive en ${persona.direccion[0].provincia}</li>`;
    
    //document.getElementById('personas').innerHTML = salida;

    


   
     
    /*var personas = [
            {
            "nombre": "Carlos",
            "apellido": "Mora",
            "edad": 25,
            "casado": true,
            "direccion": [{
                    "provincia": "Cartago"
                },
                {
                    "calle": 12,
                    "avenida": 7
                }
            ]
            },
            {
            "nombre": "Andres",
            "apellido": "Gutierrez",
            "edad": 18,
            "casado": false,
            "direccion": [{
                    "provincia": "San Jose"
                },
                {
                    "calle": 10,
                    "avenida": 4
                }
            ]
            },
            {
            "nombre": "Mario",
            "apellido": "Bross",
            "edad": 29,
            "casado": true,
            "direccion": [{
                    "provincia": "Heredia"
                },
                {
                    "calle": 9,
                    "avenida": 11
                }
            ]
            },
            {
            "nombre": "Sandra",
            "apellido": "Lopez",
            "edad": 30,
            "casado": false,
            "direccion": [{
                    "provincia": "Limón"
                },
                {
                    "calle": 12,
                    "avenida": 7
                }
            ]
            }
        ];
     

      console.log(personas);

      var salida = '';
     
      for(var i = 0; i < personas.length; i++) {
        salida += `<li>${personas[i].nombre} vive en ${personas[i].direccion[0].provincia}</li>`;
      }
     
      document.getElementById('personas').innerHTML = salida;*/



//Pesticion a server para llamar objeto desde un archivo .json

     /*var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         var respuesta = JSON.parse(xhttp.responseText);
         var personas = respuesta.personas;

         var salida = '';

         for(var i = 0; i < personas.length; i++) {
           salida += `<li>${personas[i].nombre} vive en ${personas[i].direccion[0].provincia}</li>`;
         }

         document.getElementById('personas')
           .innerHTML = salida;

       }
     };
     xhttp.open("GET", "personas.json", true);
     xhttp.send();*/

   