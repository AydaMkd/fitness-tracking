import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";

function CreateProfile(){
    return(
        <Form>
  <Form.Group className="mb-3" controlId="formBasicUserName">
    <Form.Control type="text" placeholder="Choose a user name" require />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">        
    <Form.Control type="password" placeholder="Choose a password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPersonal">        
    <Form.Control type="text" placeholder="Enter your first name" />
    <Form.Control type="number" placeholder="Enter your age" />
  </Form.Group>

  <Form.Label>Optional</Form.Label>
  <Form.Group className="mb-3" controlId="formBasicMeasurements">
    <Form.Check type="checkbox" label="Do you want to track your measurements?"  />
    <Form.Group>
      <Row>
        <Col>
    <Form.Control type="number" placeholder="Starting weight in pounds" />
    </Col>
    <Col>
    <Form.Control type="number" placeholder="Goal weight in pounds" />
    </Col>
    </Row>
    </Form.Group>
    <Form.Control type="number" placeholder="Starting chest measurement in inches" />
    <Form.Control type="number" placeholder="Starting waist measurement in inches" />
    <Form.Control type="number" placeholder="Starting hips measurement in inches" />
    <Form.Control type="number" placeholder="Starting thigh measurement in inches" />
    <Form.Control type="number" placeholder="Starting arm measurement in inches" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicGlucose">
    <Form.Check type="checkbox" label="Do you want to track your glucose" />
  </Form.Group>

  <Button variant="outline-secondary" type="submit">
    Create Profile
  </Button>
</Form>
    )
}

export default CreateProfile;