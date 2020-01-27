import React from 'react';
import {Row, Col, Form} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col md={{span: 2, offset:10}} className="avatar">
          <span className="foto">FT</span>
          <span id="name">Nome</span>
        </Col>  
      </Row>
      <Row>
        <Col className="title">
          <h1>EMPRÉSTIMOS</h1>  
          <span>Home/Empréstimos</span>
        </Col>
      </Row>
      <Row className="options">
        <Col md={6}>
          <Row>
            <Col md className="option">
              <Form.Check inline type="radio" id="check" name="option"/>
              <img className="icon" src='./new.svg'/> 
              NOVO REGISTRO
            </Col>
          <Col md className="option">
            <Form.Check inline type="radio" id="check" name="option"/>
            <img className="icon"  src="./report.svg"/>
            RELATÓRIO
          </Col>
          <Col md className="option">
            <Form.Check inline type="radio" id="check" name="option"/>
            <img className="icon" src='./control.svg' />
          CONTROLE
          </Col>
          </Row>
        </Col>
      </Row>
      <div className="principal">
        <Row class="columns">
        <Col md={6} className="first-column">
          <Form>
            <Row>
              <Col md={6}>
              <Form.Group>
                <Form.Label>
                  CPF
                </Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group>
                <Form.Label>
                  CEP
                </Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>
                    NOME
                  </Form.Label>
                  <Form.Control type="text"/>
              </Form.Group>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={6}>

        </Col>
          
        </Row>
      </div>
      
    </div>
  );
}

export default App;
