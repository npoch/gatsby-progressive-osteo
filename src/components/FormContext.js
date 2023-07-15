import React, { useState } from 'react';

// Create a form context
const FormContext = React.createContext();

export function FormProvider({ children }) {
  // we need to stick state in here
  const [form, setForm] = useState([]);
  return (
    <FormContext.Provider value={[form, setForm]}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;