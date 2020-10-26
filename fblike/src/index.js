import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  
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
         <Info/>
         <Bio/>
        </div>
        
      );
    }
  }

  class Info extends React.Component {
  
    render() {
      return (
        <div>
          <Photo/>
          <Nom/>
          <Prenom/>
          <DateN/>
          <Style/>
         
        </div>
        
      );
    }
  }

   class Comptes extends React.Component{
     render(){
       return(
         <button className="comptes" onClick={()=>alert('switchprofile')}>
           {this.props.value}
         </button>
       )
     }
   }
   class Bio extends React.Component{
     render(){
       return(
           <p> Ici c'est la bio</p>
       )
     }
   }
   class Photo extends React.Component{
    render(){
      return(
        <p> Ici c'est la photo</p>
      )
    }
  }

  class Nom extends React.Component{
    render(){
      return(
        <p> Ici c'est le nom</p>
      )
    }
  }

  class Prenom extends React.Component{
    render(){
      return(
        <p> Ici c'est le prénom</p>
      )
    }
  }

  class DateN extends React.Component{
    render(){
      return(
        <p> Ici c'est la date de naissance</p>
      )
    }
  }
  class Style extends React.Component{
    render(){
      return(
        <button className="style" onClick={()=>alert('changestyle')}> Style
         </button>
      )
    }
  }
  
  class Page extends React.Component {
    render() {
      return (
        <div className="profil">
            <Profil />
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  );
  