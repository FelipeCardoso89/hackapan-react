import React from 'react';
import logo from './assets/img/logo.png';
import AppStyle from './AppStyle.js';

function App () {
  return (
    <div style={AppStyle.body} className="App">

      <header style={AppStyle.header} className="App-header">
        <img style={AppStyle.img} src={logo} alt="logo" />
        <h1 style={AppStyle.h1}>Financiamento de veículos leves</h1>
      </header>

      <div style={AppStyle.form} >
        <div >
          <label style={AppStyle.label} for="valor">Digite o valor do veículo</label>
          <input style={AppStyle.input}  type="text" id="valor" />
        </div>

        
        <div style={AppStyle.marginTop}>
          <label style={AppStyle.label} for="placa">Procure seu veículo pela placa</label>
          <input style={AppStyle.input} type="text" id="placa" />  
        </div>

      </div>

      <div style={AppStyle.selecao} >
        <div>
          <label style={AppStyle.label}>Selecione:</label>   
        </div>
        <div style={AppStyle.botao}>
          <button style={AppStyle.btn1}>Carro</button>
          <button style={AppStyle.btn2}>Moto</button>  
        </div>
      </div>
      
      <div style={AppStyle.p}>
        <p>Ao clicar em valor do veículo ou selecione veículo você concorda com os nossos termos de uso e politica de privacidade.</p>
      </div>
    </div>
  );
  }
  
  export default App;
  