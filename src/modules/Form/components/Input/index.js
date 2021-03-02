import { Field } from "formik";

const Input = (props) => (
  <Field name={props.name}>
    {({ field: { value = "", onChange, onBlur } }) => (
      <input
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    )}
  </Field>
);

export default Input;
