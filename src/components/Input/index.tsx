import { Field, ErrorMessage, FormikValues } from "formik";
import { Container, ErrorStyled, FieldStyled, Label, RequiredLabel } from "./styles";

export const Input = ({ name, type = "", label, required, ...props }: FormikValues) => {
  return (
    <Container>
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={ErrorStyled} />
    </Container>
  );
};