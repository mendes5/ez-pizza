import { Field } from "formik";

const Checkbox = (props) => (
  <Field name={props.name}>
    {({ field, form }) => (
      <input
        {...props}
        type="checkbox"
        checked={field.value.includes(props.value)}
        onChange={(event) => {
          if (event.currentTarget.checked) {
            const nextValue = field.value.concat(props.value);
            form.setFieldValue(props.name, nextValue);
          } else {
            const nextValue = field.value.filter(
              (value) => value !== props.value
            );
            form.setFieldValue(props.name, nextValue);
          }
        }}
      />
    )}
  </Field>
);

export default Checkbox;
