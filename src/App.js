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
            <Col className="option">
              <Form.Check inline type="radio" id="check" name="option"/>
              <img className="icon" src='./new.svg'/> 
              NOVO REGISTRO
            </Col>
          <Col className="option">
            <Form.Check inline type="radio" id="check" name="option"/>
            <img className="icon"  src="./report.svg"/>
            RELATÓRIO
          </Col>
          <Col className="option">
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
                <Form.Label className="lab">
                  CPF
                </Form.Label>
                <Form.Control className="inputer" type="text"/>
              </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group>
                <Form.Label className="lab">
                  CEP
                </Form.Label>
                <Form.Control className="inputer"  type="text"/>
              </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="lab">
                    NOME
                  </Form.Label>
                  <Form.Control className="inputer"  type="text"/>
              </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
              <Form.Group>
                <Form.Label className="lab">
                  GÊNERO
                </Form.Label>
                <Form.Control className="inputer"  as="select">
                  <option selected disabled>--Escolha--</option>
                  <option>Masculino</option>
                  <option>Feminino</option>
                </Form.Control>
              </Form.Group>
              </Col>
              <Col md={6}>
              <Form.Group>
                  <Form.Label className="lab">DATA FINAL</Form.Label>
                  <Form.Control className="inputer"  type="date"/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="lab">
                      CLIENTE JÁ FAZ PARTE DO CLUBE
                </label>
                </Col>
            </Row>
        <Row>
          <Col>
           <span></span>
            <span >CLIENTE DIAMANTE - SUPER SPOT CARTÃO</span>
          </Col>
        </Row>
      </Form>
        </Col>
          <Col md={5} className="first-column">
            <Row>
              <Col>
              <Form.Label className="lab"> 
                PRODUTO
              </Form.Label>
              <Form.Control className="inputer"  as="select">
                <option selected disabled>--Escolha--</option>
                <option>Cadeira de rodas</option>
              </Form.Control>
              </Col>
            </Row>
            <Row>
              <Col className="prod">
                <img className="cadeira" src="./cadeirante.png"/>
              </Col>
              <Col className="prod">
                <img className="cadeira" src="./cadeirante.png"/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      
    </div>
  );
}

export default App;
