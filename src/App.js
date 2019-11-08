import React from "react";
import "./App.css";
import Photo from "./components/Photo"
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
<div className="page_container">
      <Row>
        <Col xs="1" lg="3"></Col>
        <Col xs="10" lg="6"><Photo /></Col>
        <Col xs="1" lg="3"></Col>
      </Row>
   </div>
    
  
  );
}

export default App;
