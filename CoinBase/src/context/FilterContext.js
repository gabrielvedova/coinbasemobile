import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [useFilter, setUseFilter] = useState(3);

  return (
    <FilterContext.Provider value={{ useFilter, setUseFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
