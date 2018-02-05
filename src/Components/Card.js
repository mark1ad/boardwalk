// Card
//
// Displays a string.
//
// Attributes:
//  name: string, required.
//  id: string, required.
//  submit: callback for when card is clicked. required.

import React from 'react';
import { PropTypes } from 'prop-types';

const Card = (props) => {
  const submit = e => {
    e.preventDefault();
    props.submit();
  }

  return (
    <div className={props.class} onClick={submit}>
      {props.name}
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  submit: PropTypes.func.isRequired
}

export default Card;
