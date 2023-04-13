import React, { Component } from 'react'
import actividadServices from '../services/actividadServices'

class ListACTIVIDADComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                actividad: []
        }
        this.addACTIVIDAD = this.addACTIVIDAD.bind(this);
        this.editACTIVIDAD = this.editACTIVIDAD.bind(this);
        this.deleteACTIVIDAD = this.deleteACTIVIDAD.bind(this);
    }

    deleteACTIVIDAD(id){
        actividadServices.deleteACTIVIDAD(id).then( res => {
            this.setState({actividad: this.state.actividad.filter(actividad => actividad.id !== id)});
        });
    }
    viewACTIVIDAD(id){
        this.props.history.push(`/view-actividad/${id}`);
    }
    editACTIVIDAD(id){
        this.props.history.push(`/add-actividad/${id}`);
    }

    componentDidMount(){
        actividadServices.getactividad().then((res) => {
            this.setState({ actividad: res.data});
        });
    }

    addACTIVIDAD(){
        this.props.history.push('/add-actividad/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">actividad List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addACTIVIDAD}> Add ACTIVIDAD</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> ACTIVIDAD id</th>
                                    <th> ACTIVIDAD nombre</th>
                                    <th> ACTIVIDAD descripcion</th>
                                    <th> ACTIVIDAD fechaInicio</th>
                                    <th> ACTIVIDAD fechaFin</th>
                                    <th> ACTIVIDAD tiempoEstimado</th>
                                    <th> ACTIVIDAD archivo</th>
                                    <th> ACTIVIDAD recurso</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.actividad.map(
                                        actividad => 
                                        <tr key = {actividad.id}>
                                             <td> { actividad.nombre} </td>   
                                             <td> {actividad.descripcion}</td>
                                             <td> {actividad.fechaInicio}</td>
                                             <td> { actividad.fechaFin} </td>   
                                             <td> {actividad.tiempoEstimado}</td>
                                             <td> {actividad.archivo}</td>
                                             <td> {actividad.recurso}</td>
                                             <td>
                                                 <button onClick={ () => this.editACTIVIDAD(actividad.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteACTIVIDAD(actividad.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewACTIVIDAD(actividad.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListACTIVIDADComponent