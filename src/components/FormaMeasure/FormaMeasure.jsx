import { measureSchema } from 'components/SchemaValidation/measureSchema';
import { useFormik } from 'formik';
import React from 'react';
import {
  FormLabel,
  FormaMeasureST,
  Input,
  InputError,
} from './FormaMeasure.styled';
import { ButtonBase } from 'CommonStyle/Button.styled';

const FormaMeasure = ({ units }) => {
  const { values, touched, errors, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        height: '',
        currentWeight: '',
      },
      validationSchema: measureSchema,
    });

  const submitHandler = () => {};

  return (
    <FormaMeasureST>
      <FormLabel>
        <Input
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
          <InputError>{errors.height}</InputError>
        )}
      </FormLabel>
      <FormLabel>
        <Input
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
          <InputError>{errors.currentWeight}</InputError>
        )}
      </FormLabel>

      <ButtonBase disabled onSubmit={submitHandler}>
        Continue
      </ButtonBase>
    </FormaMeasureST>
  );
};

export default FormaMeasure;
