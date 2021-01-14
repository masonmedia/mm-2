import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Row, Col, Button } from 'react-bootstrap';

export default function Test() {
 let [counter, setCounter] = useState(0);

 let increment = () => setCounter(++counter);

 return (
   <Layout>
     <Row className="min-h-100 flex-center">
       <Col xl={12}>
       <Button variant="dark" onClick={increment}>Increment Counter</Button>
        <ChildComponent counterValue={counter} />
       </Col>
     </Row>
   </Layout>
 );
}

function ChildComponent(props) {
  return (
    <div>
      <p>Value of counter: {props.counterValue}</p>
    </div>
  );
 }