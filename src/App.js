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
        <Col md={2} className="option">
        <Form.Check inline type="radio" id="check" name="option"/>
          <img className="icon" src='./new.svg'/> 
          NOVO REGISTRO
        </Col>
        <Col md={2} className="option">
        <Form.Check inline type="radio" id="check" name="option"/>
          <img className="icon"  src="./report.svg"/>
          RELATÓRIO
        </Col>
        <Col md={2} className="option">
        <Form.Check inline type="radio" id="check" name="option"/>
          <img className="icon" src='./control.svg' />
          TODOS FLASHES
        </Col>
      </Row>
    </div>
  );
}

export default App;
