import React from 'react'

export const ItemApp = ({key, label, value}) => {
  return (
    <li key={key} value={value}>{label}</li>
  )
}
