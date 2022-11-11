import React, { useState } from 'react';

export const NavigationContext = React.createContext({
  collapseHandler: () => {},
});

export function NavigationProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapsedHandler = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <NavigationContext.Provider value={{ collapsedHandler, isCollapsed }}>
      {children}
    </NavigationContext.Provider>
  );
}
