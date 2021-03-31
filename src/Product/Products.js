import React, { Component } from 'react';
import { Card, ListGroup,Button } from 'react-bootstrap';
import history from '../history';

class Products extends Component {
    
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2 style={{fontFamily:'fantasy'}}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LPB SUBDIVISIONS</span></h2>
                <br/>
                <br/>
                    <Card style={{ width: '20rem' }}>
                        <ListGroup>
                            
                            <ListGroup.Item style={{fontFamily:'cursive'}}> Subdivision 1</ListGroup.Item>
                        
                            <Button variant="btn btn-primary btn-lg" onClick={() => history.push('/subdivision 1')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20,backgroundColor:'#7B1FA2' }}>Subdivision 1</Button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Subdivision 2</ListGroup.Item>
                            <Button variant="btn btn-primary btn-lg" onClick={() => history.push('/subdivision 2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#512DA8'}}>Subdivision 2</Button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Subdivision 3</ListGroup.Item>
                            <Button variant="btn btn-primary btn-lg" onClick={() => history.push('/subdivision 3')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#1A237E'}}>Subdivision 3</Button>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Products;

