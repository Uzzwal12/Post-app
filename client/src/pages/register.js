import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: values,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate>
        <h1>Register</h1>
        <Form.Input
          type="text"
          label="Username"
          name="username"
          placeholder="Username.."
          value={values.username}
          onChange={handleChange}
        />
        <Form.Input
          type="email"
          label="Email"
          name="email"
          placeholder="Email.."
          value={values.email}
          onChange={handleChange}
        />
        <Form.Input
          type="password"
          label="Password"
          name="password"
          placeholder="Password.."
          value={values.password}
          onChange={handleChange}
        />
        <Form.Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm Password.."
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        userName: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      userName
      createdAt
      token
    }
  }
`;

export default Register;
