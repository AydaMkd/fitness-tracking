import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import React from "react";

function Profile(){
    return(
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">        
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="outline-secondary" type="submit">
    Create Profile
  </Button>
</Form>
    )
}

export default Profile