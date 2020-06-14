import React from 'react';

function LoaderSmall(props) {
  return (
    <div className="spinner-small">
      <div className="spinner-content">
        <span className="spinner-border spinner-border-sm" role="status" /><br />
        <span> {props.text}</span>
      </div>
    </div>
  );
}

export default LoaderSmall;