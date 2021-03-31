import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import history from '../history';

class Subdivision1 extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h3 style={{ fontFamily:'fantasy'}}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBDIVISIONS 1</span></h3>
                <br/>
                <br/>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk 1</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20,backgroundColor:'#DBDF00',color:'white' }}>Taluk 1</button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk 2</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#B0BC00',color:'white'}}>Taluk 2</button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk 3</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#68BC00',color:'white'}}>Taluk 3</button>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Subdivision1;

