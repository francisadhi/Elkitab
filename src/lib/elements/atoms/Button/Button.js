import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.color,
    color: 'white',
  }

  return (
    <button
      {...props}
      style={buttonStyle}
    />
  )
}

const Button2 = ({ color, ...props }) => (
  <button
    {...props}
    style={{
      backgroundColor: color,
      color: 'black',
    }}
  />
)

Button2.propTypes = {
  color: PropTypes.string
}

export default Button2