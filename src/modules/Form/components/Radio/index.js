import { Field } from "formik";

const Radio = (props) => (
  <Field name={props.name}>
    {({ field: { value, name }, form }) => (
      <input
        {...props}
        type="radio"
        checked={value === props.value}
        onChange={() => {
          form.setFieldValue(name, props.value);
        }}
        onClick={() => {
          if (value === props.value) form.setFieldValue(name, undefined);
        }}
      />
    )}
  </Field>
);

export default Radio;
