import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";


function App() {
  return (
    <div>
      <h2>Controlled Registration Form</h2>
      <RegistrationForm />

      <h2>Formik Registration Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
