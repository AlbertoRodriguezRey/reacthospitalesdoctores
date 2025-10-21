import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'

export default class CreateHospital extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    url = Global.apiHospitales

    insertHospital = (event) => {
        event.preventDefault();
        let request = "webresources/hospitales/post"
        //DEBEMOS RESPETAR LOS TIPOS DE DATOS DEL JSON
        let id = parseInt(this.cajaId.current.value);
        let camas = parseInt(this.cajaCamas.current.value);
        //EL OBJETO JSON DE REACT DEBE RESPETAR MAYUSCULAS/MINUSCULAS
        //Y EL NOMBRE DE LAS PROPIEDADES IGUAL QUE EL SERVICIO
        let hospital = {
            "idhospital": id,
            "nombre": this.cajaNombre.current.value,
            "direccion": this.cajaDireccion.current.value,
            "telefono": this.cajaTelefono.current.value,
            "camas": camas
        };
        axios.post(this.url + request, hospital).then(response => {
            this.setState({
                mensaje: "Hospital insertado: " + hospital.nombre
            })
        })

    }

    state = {
        mensaje: ""
    }
  render() {
    return (
      <div>
        <h1>Create Hospital</h1>
        <h3 style={{color:"fuchsia"}}>
            {this.state.mensaje}
        </h3>
        <form>
            <label>Id Hospital: </label>
            <input type="text" ref={this.cajaId} className='form-control'/>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre} className='form-control'/>
            <label>Dirección: </label>
            <input type="text" ref={this.cajaDireccion} className='form-control'/>
            <label>Telefono: </label>
            <input type="text" ref={this.cajaTelefono} className='form-control'/>
            <label>Camas: </label>
            <input type="text" ref={this.cajaCamas} className='form-control'/><br/>
            <button className='btn btn-primary' onClick={this.insertHospital}>
                Nuevo Hospital
                </button>
        </form>
      </div>
    )
  }
}
