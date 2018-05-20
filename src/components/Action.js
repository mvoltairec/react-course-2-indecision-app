import React from 'react';
import DatePicker from './DatePicker';

const  Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      This Should Be a Giant Date Picker
      <DatePicker />
      </button>
  </div>
);

export default Action;
