import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  
 let profils=[
   {
     Nom: 'Deminguet',
     Prenom: 'Jessy',
     DateN: '07/01/1998',
     Photo:'',
     Bio:'Joueur du Stade Malherbes de Caen',
     id:1
  },

  {
    Nom: 'Samba',
    Prenom: 'Brice',
    DateN: '25/03/1994',
    Photo:'',
    Bio:'Joueur de Nottingham Forest, ancien joueur du Stade Malherbes',
    id:2

 },

 {
  Nom: 'Da Silva',
  Prenom: 'Damien',
  DateN: '17/05/1988',
  Photo:'',
  Bio:'Ancien joueur du SMC et actuel défenseur central du Stade Rennais',
  id:3
},]
let choix=0;

class Comptes extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      choix :null
    };
  }
    switchprofil1() {
      choix = 1;
      this.setState({choix:1});
   }
   switchprofil2() {
    choix = 2;
    this.setState({choix:2});
 }
 switchprofil3() {
  choix = 3;
  this.setState({choix:3});
}
   render(){
     return(
       <div>
       <button className="comptes" onClick={()=>this.switchprofil1()}>
         Deminguet
       </button>
       <button className="comptes" onClick={()=>this.switchprofil2()}>
         Samba
       </button>
       <button className="comptes" onClick={()=>this.switchprofil3()}>
         Da silva
       </button>

       <button onClick={()=>alert(choix)}>

       </button>
       </div>
     )
   }
 }

  class Profil extends React.Component {
  
    renderComptes(i){
      return<Comptes value={i}/>;
    }
    
  
    render() {
      return (
        <div>
         <p> TEST </p>
         <div> 
           {this.renderComptes(0)}
           {this.renderComptes(1)}
           {this.renderComptes(2)}
         </div>
        </div>
        
      );
    }
  }

  class Bio extends React.Component {
  
  }


   
  class Style extends React.Component{
    render(){
      return(
        <button className="style" onClick={()=>alert('changestyle')}> Style
         </button>
      )
    }
  }
  

  
  // ========================================
  
  ReactDOM.render(
    <Profil />,
    document.getElementById('root')
  );
  