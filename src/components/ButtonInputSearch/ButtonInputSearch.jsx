import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButtonInputSearch = (props) => {

  const {
    size, placeholder, textButton,
    bordered, backgroundColorInput = '#fff',
    backgroundColorButton = 'rgb(13,92,182)',
    colorButton = '#fff'
  } = props

  return (
    <div style={{ display: 'flex', }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderRadius: '0px' }}
        {...props}
      />
      <ButtonComponent
        size={size}
        styleButton={{ background: backgroundColorButton, border: !bordered && 'none', borderRadius: '0px' }}
        styleTextButton={{ color: colorButton }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        textButton={textButton}
      />
    </div>
  )
}

export default ButtonInputSearch