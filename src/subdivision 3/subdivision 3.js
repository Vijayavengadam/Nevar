import React, { Component} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import history from '../history';




class Subdivision3 extends Component {

    
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h3 style={{fontFamily:'fantasy'}}><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBDIVISIONS 3</span></h3>
                <br/>
                <br/>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk3 1</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2') } style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20,backgroundColor:'#FDA1FF',color:'white' }}>Taluk 1</button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk3 2</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#FA28FF',color:'white'}}>Taluk 2</button>
                            <ListGroup.Item style={{fontFamily:'cursive'}}>Taluk3 3</ListGroup.Item>
                            <button variant="btn btn-primary btn-lg" onClick={() => history.push('/App2')} style={{ justifyContent: 'center',fontFamily:'Garamond',fontSize:20 ,backgroundColor:'#AB149E',color:'white'}}>Taluk 3</button>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Subdivision3;

