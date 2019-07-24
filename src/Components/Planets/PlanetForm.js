import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PlanetForm extends Component {
  render() {
    return (
      <Form.Field>
        <label>Name</label>
        <input placeholder='Name' name="name" id="name" autoFocus/>
      </Form.Field>
    );
  }
}

export default PlanetForm;
