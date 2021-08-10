import React, { useState } from 'react';

import {
  Fieldset,
  Form,
  FormH1,
  InputBox,
  Label,
  TextInput,
  SubmitButton,
} from '../FormElements';

const FormTemplate = () => {
  return (
    <Form>
      <FormH1>Standard Input Form</FormH1>
      <Fieldset>
        <InputBox extraMargin={true}>
          <Label htmlFor="nameInput">Name</Label>
          <TextInput id="nameInput" type="text"></TextInput>
        </InputBox>
        <InputBox>
          <Label htmlFor="titleInput">Title</Label>
          <TextInput id="" titleInput="text"></TextInput>
        </InputBox>
        <InputBox>
          <Label htmlFor="factionInput">Faction</Label>
          <TextInput id="factionInput" type="text"></TextInput>
        </InputBox>
        <InputBox>
          <Label htmlFor="levelInput">Level</Label>
          <TextInput id="levelInput" type="text"></TextInput>
        </InputBox>
      </Fieldset>
      <SubmitButton type="submit" value="submit" />
    </Form>
  );
};

export default FormTemplate;
