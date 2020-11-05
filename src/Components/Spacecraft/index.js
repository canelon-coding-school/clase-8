import React from 'react';
import Dashboard from '../Dashboard';
import SpacecraftForm from "./SpacecraftForm";
import SpacecraftList from "./SpacecraftList";

const Spacecraft = () => {
  return (
    <Dashboard
      activeSection="spacecraft"
      list={SpacecraftList}
      form={SpacecraftForm}
    />
  );
}

export default Spacecraft;
