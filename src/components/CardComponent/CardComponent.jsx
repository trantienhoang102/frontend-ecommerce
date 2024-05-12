import { Card, Image } from 'antd'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'

const CardComponent = (props) => {
  const { countInStock, description, image, name, price, rating, type, selled, discount, id } = props
  const navigate = useNavigate()
  const handleDetailsProduct = (id) => {
    navigate(`/product-details/${id}`)
  }

  return (
    <WrapperCardStyle
      hoverable
      headstyle={{ width: '200px', height: '200px' }}
      style={{ width: 200 }}
      bodyStyles={{ padding: '10px' }}
      cover={<img alt="example" src={image} />}
      onClick={() => handleDetailsProduct(id)}
    >
      <img
        src={logo}
        style={{
          width: '68px', height: '14px', position: 'absolute', top: -1, left: -1,
          borderTopLeftRadius: '3px'
        }}
      />
      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>{rating}</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
        </span>
        <span> | {selled || 1000}</span>
      </WrapperReportText>
      <WrapperPriceText>
        <span style={{ marginRight: '8px' }}>
          {convertPrice(price)}
        </span>
        <WrapperDiscountText>
          -{discount || 5}%
        </WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  )
}

export default CardComponent