import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Form as BootstrapForm } from "react-bootstrap";


const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Correo electrónico inválido").required("Correo electrónico requerido"),
  password: Yup.string().required("Contraseña requerida"),
});

const LoginForm = () => {
  const initialValues = { email: "", password: "" };

  const handleSubmit = {

  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <BootstrapForm.Group controlId="formBasicEmail">
            <BootstrapForm.Label>Correo electrónico</BootstrapForm.Label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error" />
          </BootstrapForm.Group>

          <BootstrapForm.Group controlId="formBasicPassword">
            <BootstrapForm.Label>Contraseña</BootstrapForm.Label>
            <Field type="password" name="password" className="form-control" />
            <ErrorMessage name="password" component="div" className="error" />
          </BootstrapForm.Group>

          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
