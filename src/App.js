import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from 'primereact/button';
import ListACTIVIDADComponent from './components/listaActividadComponentes';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <ListACTIVIDADComponent/>

    );
  }
}


