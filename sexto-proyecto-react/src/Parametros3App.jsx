import React from 'react'
import PropTypes from 'prop-types'

export const Parametros3App = ({string, number}) => {
  return (
    <>
        <div>{string}</div>
        <div>{number}</div>
    </>
  )
}

Parametros3App.propTypes = {
    string: PropTypes.string.isRequired
}

Parametros3App.defaultProps = {
    number : 0
}