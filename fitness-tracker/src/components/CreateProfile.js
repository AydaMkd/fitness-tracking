import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";

function CreateProfile(){
    return(
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" require />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">        
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPersonal">        
    <Form.Control type="text" placeholder="First name" />
    <Form.Control type="number" placeholder="Age" />
  </Form.Group>

  <Form.Label>Optional</Form.Label>
  <Form.Group className="mb-3" controlId="formBasicMeasurements">
    <Form.Check type="checkbox" label="Track measurements" />
   
    <Form.Control type="number" placeholder="Starting chest measurement in inches" />
    <Form.Control type="number" placeholder="Starting waist measurement in inches" />
    <Form.Control type="number" placeholder="Starting hips measurement in inches" />
    <Form.Control type="number" placeholder="Starting thigh measurement in inches" />
    <Form.Control type="number" placeholder="Starting arm measurement in inches" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicGlucose">
    <Form.Check type="checkbox" label="Track glucose" />
  </Form.Group>

  <Button variant="outline-secondary" type="submit">
    Create Profile
  </Button>
</Form>
    )
}

export default CreateProfile;