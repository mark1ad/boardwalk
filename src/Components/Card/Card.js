// Card
//
// Displays a string.
//
// Attributes:
//  name: string, required.
//  id: string, required.
//  submit: callback for when card is clicked. required.

import React from "react";
import { PropTypes } from "prop-types";

/**
 * Displays a string and performs and action when pressed.
 * (Really just a button)
 */
const Card = (props) => {
  const submit = e => {
    e.preventDefault();
    props.submit();
  };

  return (
    <div className={props.class} onClick={submit}>
      {props.name}
    </div>
  );
};

Card.propTypes = {
  /** String to display */
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  /** Callback for submit */
  submit: PropTypes.func.isRequired,
  class: PropTypes.string.isRequired
};

export default Card;
