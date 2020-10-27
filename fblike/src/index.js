import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

  
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
let couleur='red';


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
       <div id="main">
         
       <div id="boutons" className="container">
    
          <div className="row">
            <div className="col-4">
            <button class="comptes" onClick={()=>this.switchprofil1()}>
            Deminguet
          </button>
            </div>
          <div className="col-4">
          <button class="comptes" onClick={()=>this.switchprofil2()}>
            Samba
          </button>
          </div>
          <div className="col-4">
          <button class="comptes" onClick={()=>this.switchprofil3()}>
            Da Silva
          </button>
          </div>
        </div>
       </div>
      
       <Info id={choix}/>
       
       </div>

     )
   }
   
 }

  class Info extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        couleur : 'red'
      }
      
    }
    switchcolor(){
      if( couleur == 'red'){
        couleur = 'blue';
        this.setState({couleur: 'blue'});
        document.getElementById("infoprofil").style.backgroundColor = 'blue';
      }
      else{
        couleur ='red';
        this.setState({couleur:'red'});
        document.getElementById("infoprofil").style.backgroundColor = 'red';
      }
     
      
     
    }
  
    render() {
      return (
        
         
           <div id="infoprofil">

             <h1>Profil</h1>
            <div id="photo">
            <img src={profils[this.props.id].Photo}></img>
            </div>
            <div>
              <h4>Prénom: {profils[this.props.id].Prenom}</h4>
            </div>
            <div>
              <h4>Nom: {profils[this.props.id].Nom}</h4>
            </div>
            <div>
              <h4>Date de Naissance: {profils[this.props.id].DateN}</h4>
            </div>
            <div>
              <h4>Bio: {profils[this.props.id].Bio}</h4>
            </div>
            <button className="style" onClick={()=>this.switchcolor()}> Style
         </button>
         

           </div>
           
      
        
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Comptes />,
    document.getElementById('root')
  );
  