import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  
 let profils=[
   {
     Nom: 'Deminguet',
     Prenom: 'Jessy',
     DateN: '07/01/1998',
     Photo:'deminguet.jpg',
     Bio:'Joueur du Stade Malherbes de Caen.',
  },

  {
    Nom: 'Samba',
    Prenom: 'Brice',
    DateN: '25/03/1994',
    Photo:'Samba.jpg',
    Bio:'Joueur de Nottingham Forest, ancien joueur du Stade Malherbe.',

 },

 {
  Nom: 'Da Silva',
  Prenom: 'Damien',
  DateN: '17/05/1988',
  Photo:'DaSilva.png',
  Bio:'Ancien joueur du SMC et actuel défenseur central du Stade Rennais.',
},]
let choix=0;
let couleur= 'white';

class Comptes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      choix :null
    };
  }
    switchprofil1() {
      choix = 0;
      this.setState({choix:0});
   }
   switchprofil2() {
    choix = 1;
    this.setState({choix:1});
 }
 switchprofil3() {
  choix = 2;
  this.setState({choix:2});
}
   render(){
     return(
       <div id="boutons">
       <button class="comptes" onClick={()=>this.switchprofil1()}>
         Deminguet
       </button>
       <button class="comptes" onClick={()=>this.switchprofil2()}>
         Samba
       </button>
       <button class="comptes" onClick={()=>this.switchprofil3()}>
         Da Silva
       </button>
       <Info id={choix}/>
       </div>

     )
   }
   
 }

  class Info extends React.Component {
  
    render() {
      return (
        <div>
         <div> 
           <div>
            <div id="photo">
            <img src={profils[this.props.id].Photo}></img>
            </div>
            <div>
              <h2>Prénom: {profils[this.props.id].Prenom}</h2>
            </div>
            <div>
              <h2>Nom: {profils[this.props.id].Nom}</h2>
            </div>
            <div>
              <h2>Date de Naissance: {profils[this.props.id].DateN}</h2>
            </div>
            <div>
              <h2>Bio: {profils[this.props.id].Bio}</h2>
            </div>
            

           </div>
           
         </div>
        </div>
        
      );
    }
  }

  class Bio extends React.Component {
  
  }


   
  class Style extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        couleur :null
      }
    }
    switchcolor(){
      this.setState({couleur : "red"});
    }
    render(){
      return(
        <button className="style" onClick={()=>alert(couleur)}> Style
         </button>
         
      )
    }
  }
  

  
  // ========================================
  
  ReactDOM.render(
    <Comptes />,
    document.getElementById('root')
  );
  