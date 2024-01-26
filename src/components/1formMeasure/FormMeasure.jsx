import React from 'react';
import { useFormik } from 'formik';

import { measureSchema } from 'js/1schemaValidation/measureSchema';
import { LabelST, FormST, InputST, InputErrorST } from './FormMeasure.styled';
import { Button } from '1commonStyle/Button.styled';

const FormMeasure = ({ units, handlerClick, dataInitial }) => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    isValid,
    handleBlur,
  } = useFormik({
    initialValues: {
      height: dataInitial.height,
      currentWeight: dataInitial.currentWeight,
    },
    validationSchema: measureSchema,
    onSubmit: values => {
      handlerClick(values.height, values.currentWeight);
    },
  });

  return (
    <FormST onSubmit={handleSubmit}>
      <LabelST>
        <InputST
          type="number"
          step="0.001"
          name="height"
          value={values.height}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={units ? 'Height(ft)' : 'Height(m)'}
          error={touched.height && errors.height}
        />
        {touched.height && errors.height && (
          <InputErrorST>{errors.height}</InputErrorST>
        )}
      </LabelST>
      <LabelST>
        <InputST
          type="number"
          step="0.001"
          name="currentWeight"
          value={values.currentWeight}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={units ? 'Current Weight(lb)' : 'Current Weight(kg)'}
          error={touched.currentWeight && errors.currentWeight}
        />
        {touched.currentWeight && errors.currentWeight && (
          <InputErrorST>{errors.currentWeight}</InputErrorST>
        )}
      </LabelST>

      <Button
        type="submit"
        disabled={!isValid || (!values.height && !values.currentWeight)}
      >
        Continue
      </Button>
    </FormST>
  );
};

export default FormMeasure;
