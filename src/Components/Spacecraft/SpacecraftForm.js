import React from 'react';
import { Form } from 'semantic-ui-react';

const SpacecraftForm = () => (
  <Form.Field>
    <label>Name</label>
    <input placeholder='Name' name="name" id="name" autoFocus/>
  </Form.Field>
);

export default SpacecraftForm;
