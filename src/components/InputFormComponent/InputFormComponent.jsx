import React from 'react'
import { WrapperInputStyle } from './style'

const InputFormComponent = (props) => {
    const { placeholder = 'Nhập text', ...rests } = props
    const handleOnChangeInput = (e) => {
      props.onChange(e.target.value)
    }
  return (
    <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnChangeInput}/>
  )
}

export default InputFormComponent