import React, { useState } from 'react';
import { mockDataTeam } from '../data/mockData';
import { mockAdminData } from '../data/mockAdminData';

export const DashboardContext = React.createContext({
  collapseHandler: () => {},
  addTeammateHandler: () => {},
  editAdminDataHandler: () => {},
  users: [],
  tasks: [],
  adminData: {},
});

export function DashboardProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [users, setUpdatedUsers] = useState(mockDataTeam);
  const [adminData, setAdminData] = useState(mockAdminData);

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
      tasks: [],
    };
    setUpdatedUsers([...users, newTeammate]);
  };

  const editAdminDataHandler = (values) => {
    setAdminData({ name: values.name, desc: values.desc });
  };

  return (
    <DashboardContext.Provider
      value={{
        collapsedHandler,
        isCollapsed,
        users,
        adminData,
        addTeammateHandler,
        editAdminDataHandler,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
