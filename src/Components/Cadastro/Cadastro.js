import React from 'react';
import CadastroStyle from './CadastroStyle';


class Cadastro extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            nome: '',
            idade: '',
            rg: '',
            cpf: '',
            cep: '',
            telefone:'',
            ocupacao: '',
            renda: '',
        }
    }

    // fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response)
    
    
    render(){
        return(
            <div>
                <input value={this.state.nome} type="text" placeholder='Digite seu nome' />
                {/* <input value={this.state.idade} type="text" placeholder='Digite sua idade' /> */}
                <input value={this.state.rg} type="text" placeholder='Digite seu rg' />
                <input value={this.state.cpf} type="text" placeholder='Digite seu cpf' />
                <input value={this.state.cep}type="text" placeholder='Digite seu cep' />
                <input value={this.state.telefone}type="text" placeholder='Digite seu telefone' />
                <input value={this.state.ocupacao}type="text" placeholder='Digite sua ocupacao' />
                <input value={this.state.renda}type="text" placeholder='Digite sua renda' />
                <button>Vai</button>
            </div>
            )
        }
    }
    
    export default Cadastro;