import React from 'react';
import Dashboard from '../Dashboard';

function SpacecraftList() {
    return (
        <p>SpacecraftList</p>
    )
}

function SpacecraftForm() {
    return (
        <p>SpacecraftForm</p>
    )
}

function Spacecraft() {
  return (
    <Dashboard
      activeSection="spacecraft"
      list={SpacecraftList}
      form={SpacecraftForm}
    />
  );
}

export default Spacecraft;
