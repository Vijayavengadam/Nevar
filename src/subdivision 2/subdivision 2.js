import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import history from '../history';

class Subdivision2 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h3 style={{fontFamily:'fantasy'}}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBDIVISIONS 2</span></h3>
                <br/>
                <br/>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk2 1</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20,backgroundColor:'#73D8FF',color:'white' }}>Taluk 1</button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk2 2</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#009CE0',color:'white'}}>Taluk 2</button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk2 3</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#0062B1',color:'white'}}>Taluk 3</button>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Subdivision2;

