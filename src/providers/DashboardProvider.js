import React, { useState } from 'react';
import { mockDataTeam } from '../data/mockData';

export const DashboardContext = React.createContext({
  collapseHandler: () => {},
  addUserHandler: () => {},
  users: [],
});

export function DashboardProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [users, setUpdatedUsers] = useState(mockDataTeam);

  const collapsedHandler = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const addTeammateHandler = (values) => {
    const newTeammate = {
      id: users.length + 1,
      name: values.name,
      age: values.age,
      phone: values.phone,
      email: values.email,
      access: values.access,
    };
    setUpdatedUsers([...users, newTeammate]);
  };

  return (
    <DashboardContext.Provider
      value={{ collapsedHandler, isCollapsed, users, addTeammateHandler }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
