import React, { useState } from 'react';

const ApplyContext = React.createContext();

export function ApplyProvider({ children }) {
  // Stick state in here
  const [apply, setApply ] = useState([]);
  return <ApplyContext.Provider value={[apply, setApply]}>
    {children}
  </ApplyContext.Provider>
}
export default ApplyContext;