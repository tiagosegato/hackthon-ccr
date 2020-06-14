import React from 'react';

function LoaderSmall(props) {
  return (
    <div className="spinner-small">
      <span className="spinner-border spinner-border-sm" role="status" /><br />
      <span> {props.text}</span>
    </div>
  );
}

export default LoaderSmall;