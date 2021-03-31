import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'corner', padding: 30 ,color:'black'}}>
                <div>
                    <h2 style={{fontStyle:'oblique',color:'maroon',fontWeight:'bolder'}}>CONTACT PAGE</h2>
                    <br/>
                    <div style={{display:'flex',padding: 10,color: ''}}>
                        <h3 style={{fontStyle:'italic'}}>1)Vijayavengadam.A , Phone number : 6382159287 <br/>2)Vishwa Santhosh.S, Phone number : 8072160815  </h3>
                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;