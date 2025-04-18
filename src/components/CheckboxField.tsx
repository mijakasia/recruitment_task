import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

const CheckboxField = ({ label, registration, error }: Props) => {
  return (
    <div className="mb-4 text-sm">
      <label className="flex items-start">
        <input type="checkbox" className="mr-2 mt-1" {...registration} />
        {label}
      </label>
      {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default CheckboxField;
