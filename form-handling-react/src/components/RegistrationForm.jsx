import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
    })
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          {" "}
          {/* Ensure this is returned */}
          <div>
            <Field type="text" name="username" value={formData.username}  placeholder="Username" />
            <ErrorMessage
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <Field type="email" name="email" value={formData.email} placeholder="Email" />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <Field type="password" name="password" value={formData.password} placeholder="Password" />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
