import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import history from '../history';

class Login extends Component {

    state ={
        credentials:{username: '',password: ''}
    
    }

    

    
    

    login = event =>{
        
        fetch('http://127.0.0.1:8000/auth/',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data =>{
                
                this.props.userLogin(data.token);
                history.push('/welcome');
            }
        )
        .catch(error =>console.error(error))
    }


    register = event =>{
        
        fetch('http://127.0.0.1:8000/api/users/',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data =>{
                console.log(data.token)
                history.push('/register');
            }
        )
        .catch(error =>console.error(error))
        
    }




    inputChanged = event =>{
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {

        return (
            <div style={{display: 'flex', justifyContent: 'center', padding: 60 }}>
                
                <Card style={{ width: '20rem', backgroundColor:'#2196F3' }}> 
                    <h2 style={{display: 'flex', justifyContent: 'center', padding: 35 ,fontWeight:'bold',fontFamily:'fantasy',backgroundColor:'#7B1FA2',color:'white'}}>Login user form</h2>
            
                    <label style={{display: 'flex', justifyContent: 'center',padding:5,fontWeight:'bold',fontFamily:'unset'}}>
                        <span> Username:&nbsp;&nbsp;</span>   
                        <input type="text" name="username" 
                        value={this.state.credentials.username}
                        onChange={this.inputChanged}/>
                    </label>
                    <br/>
                    <br/>
                    <label style={{display: 'flex', justifyContent: 'center',fontWeight:'bold',fontFamily:'unset'}}>
                        <span> Password:&nbsp;&nbsp;</span>   
                        <input type="password" name="password" 
                        value={this.state.credentials.password}
                        onChange={this.inputChanged}/>
                    </label>
                    <br/>
                    <br/>
                    <button variant="btn btn-primary btn-lg"  onClick={this.login}  style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20,backgroundColor:'ButtonHighlight'}}>Login</button>                 

                    <button variant="btn btn-primary btn-lg"  onClick={this.register}  style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 }}>Register</button>
                </Card>
              
               
            </div>
        );
    }
}


export default Login;
