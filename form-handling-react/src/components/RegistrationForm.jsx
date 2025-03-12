import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Formik
      initialValues={{ username, email, password }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <Field
              type="text"
              name="username"
              value={username}  // Explicitly set value
              onChange={(e) => setUsername(e.target.value)}  // Manually handle state update
              placeholder="Username"
            />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <Field
              type="email"
              name="email"
              value={email}  // Explicitly set value
              onChange={(e) => setEmail(e.target.value)}  // Manually handle state update
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" style={{ color: "red" }} />
          </div>

          <div>
            <Field
              type="password"
              name="password"
              value={password}  // Explicitly set value
              onChange={(e) => setPassword(e.target.value)}  // Manually handle state update
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
