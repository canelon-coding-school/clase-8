import React from 'react';

function NoMatch({ location }) {
  return (
    <div>
      <h1>404, not found bro!</h1>
      <h3>
         No existe la pagina <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NoMatch;
