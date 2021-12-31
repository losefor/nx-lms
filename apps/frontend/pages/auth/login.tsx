import React from "react";
import { FormInput } from "../../components/form-input/FormInput";
import { Form } from "../../components/form/Form";
export default function login() {
  return (
    <div>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(e) => console.log(e)}
      >
        <FormInput name="email" />
      </Form>   
    </div>
  );
}
