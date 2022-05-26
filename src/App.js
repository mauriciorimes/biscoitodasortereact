import React, { Component } from "react";
import "./stylesheet.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ``
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [`"Siga os bons e aprende com eles."`,
     `"Bom senso sempre vale mais que astúcia"`,
     `"O riso e a menor distancia entre duas pessoas."`,
     `"Deixe de lado as preocupacoes e seja feliz."`,
     `"Realize o obvio, pensa no improvavel e conquiste o impossivel."`,
     `"Acredite em milagres, mas nao depende eles."`,
     `"A maior barreira para o sucesso e o medo do fracasso."`]
  }

  quebraBiscoito() {
    let state = this.state;
    let random = Math.floor(Math.random() * this.frases.length);
    state.textoFrase =  this.frases[random];
    this.setState(state);
  }

  render() {
    return(
      <div className="container">
        <img src={require(`./assets/biscoito.png`)} className="img" alt="biscoito"/>
        <Botao nome="Abrir biscoito" btnAcao={this.quebraBiscoito} className="btn btn-warning"/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
       
      </div>
    );
  }

}

class Botao extends Component {

  render() {
    return(
      <div>
        <button onClick={this.props.btnAcao}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;
