import axios from 'axios';

const ACTIVIDAD_API_BASE_URL = "http://localhost:8080/api/v1/ACTIVIDAD";

class ActividadService {

    getActividades(){
        return axios.get(ACTIVIDAD_API_BASE_URL);
    }

    createActividad(actividad){
        return axios.post(ACTIVIDAD_API_BASE_URL, actividad);
    }

    getActividadById(actividadId){
        return axios.get(ACTIVIDAD_API_BASE_URL + '/' + actividadId);
    }

    updateActividad(actividad, actividadId){
        return axios.put(ACTIVIDAD_API_BASE_URL + '/' + actividadId, actividad);
    }

    deleteActividad(actividadId){
        return axios.delete(ACTIVIDAD_API_BASE_URL + '/' + actividadId);
    }
}

export default new ActividadService()