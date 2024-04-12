import React, { useState } from 'react'
import { WrapperInputStyle } from './style'

const InputFormComponent = (props) => {
    const [valueInput, setValueInput] = useState('')
    const { placeholder = 'Nhập text', ...rests } = props
  return (
    <WrapperInputStyle placeholder={placeholder} valueWrapperInputStyle={valueInput} {...rests}/>
  )
}

export default InputFormComponent