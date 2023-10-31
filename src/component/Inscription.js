import React from 'react';
export default class Inscription extends React.Component{
    constructor(props){
        super(props);
        this.state={nom:"",prenom:"",email:""};
    }
    changerNom(e){
        this.setState({nom:e.target.value});
    }
    changerPrenom(e){
        this.setState({prenom:e.target.value});
    }
    changerEmail(e){
        this.setState({email:e.target.value});
    }
    render(){
        return(
            <div>
                <h1>Inscription</h1>
                <label>Nom :</label>
                <input type='text' className='input' value={this.state.nom} onChange={(e)=>this.changerNom(e)}/>                
                <label>Prénom :</label>
                <input type='text' className='input' value={this.state.prenom} onChange={(e)=>this.changerPrenom(e)}/>
                <label>Email :</label>
                <input type='text' className='input' value={this.state.email} onChange={(e)=>this.changerEmail(e)}/>
                <button >Valider</button>
                <button >Annuler</button><br/><br/>
                <fieldset>
                    <h3>Informations :</h3>
                    <p>{this.state.nom}  {this.state.prenom}  {this.state.email}</p>
                </fieldset>
            </div>
        )
    }
}