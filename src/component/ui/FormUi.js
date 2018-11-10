import React from 'react'
import PropTypes from 'prop-types';

const FormUi = ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type={type} className="form-control" name={name} placeholder={placeholder} value={value} onChange={onChange} required/>
    </div>
  )
}

FormUi.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
   
}

FormUi.defaultProps = {
    type: 'text'
}

export default FormUi