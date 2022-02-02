import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
var qs = require('qs');

export default function Create() {
    const [nonbre, setnombre] = useState('');
    const [director, setdirector] = useState('');
    const [anio_estreno, setanio_estreno] = useState('');
    const [idioma, setidioma] = useState('');
    const [Lugar, setlugar] = useState('');
    const [reparto, setreparto] = useState('');
    
    
    const enviarDatos = () => {
        console.log(nombre);
        console.log(director);
        console.log(anio_estreno);
        console.log(idioma);
        console.log(Lugar);
        console.log(reparto);

        
        var data = qs.stringify({
            'nombre': nombre,
            'director': director,
            'anio_estreno': anio_estreno,
            'idioma': idioma,
        });
        var config = {
            method: 'post',
            url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                window.alert("pelicula guardada")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                window.alert("ocurrio un error")
                console.log(error);
            });

    }
    return (

<Form>
    <Form.Field>
      <label>Nombre de la pelicula</label>
      <input placeholder="Pelicula"></input>

    </Form.Field>
    <Form.Field>
      <label>dDirector</label>
      <input placeholder="Director"></input>
    </Form.Field>
    <Form.Field>
      <Checkbox label="Usted es mayor de edad?"></Checkbox>
    </Form.Field>    
    <Form.Field>
      <label>Edad</label>
      <input type="number" placeholder="Edad"></input>
    </Form.Field>
    <Form.Field>
      <label>Contrasena</label>
      <input type="password" placeholder="Contrasena"></input>
    </Form.Field>
    <Button>Guardar</Button><br></br>
    
    <h2><label>S E R I E S </label></h2>
    <Form.Field>
        <label>Titulo de la serie</label>
        <input placeholder="Serie"></input>
      </Form.Field>
      <Form.Field>
        <label>Idioma</label>
        <select value ="Seleccione Idioma">
          <option>Ingles</option>
          <option>Español</option>
          <option>Chino</option>
        </select>
      </Form.Field> 
      <Form.Field>
        <label>N_serie</label>
        <input type="number" placeholder="N_serie"></input>
      </Form.Field>
      <Button>Guardar</Button>
</Form>

)
}