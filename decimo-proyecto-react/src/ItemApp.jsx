import React from 'react'
import PropTypes from 'prop-types'

export const ItemApp = ({key, label, value}) => {  
  return (
    <li key={key} value={value}>{label}</li>
  )
}

ItemApp.propTypes = {
    key: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired
}