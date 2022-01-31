import React from "react";
import {Button, Checkbox, Form} from 'semantic-ui-react';

const Create = () =>(
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
export default Create;
