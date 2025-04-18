import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  type?: string;
  placeholder: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
};

const InputField = ({ type = 'text', placeholder, error, registration }: Props) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full p-3 border rounded focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 ring-red-300' : 'focus:ring-indigo-400'
        }`}
        {...registration}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
