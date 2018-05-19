import React from 'react';

const  DatePicker = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      This Should Be a Giant Date Picker
      </button>
  </div>
);

export default DatePicker;
