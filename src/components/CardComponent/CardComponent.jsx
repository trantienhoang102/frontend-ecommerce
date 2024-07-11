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
      style={{ width: 200, cursor: 'pointer', backgroundColor: '#fff' }}
      bodyStyles={{ padding: '10px' }}
      cover={<img alt="example" src={image} />}
      onClick={() => handleDetailsProduct(id)}
    // disabled={countInStock === 0}

    >
      <img

        src={logo}
        style={{
          width: '68px', height: '14px', position: 'absolute', top: -1, left: -1,
          borderTopLeftRadius: '3px',
        }}
      >
      </img>

      <StyleNameProduct>{name}</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: '4px' }}>
          <span>{rating}</span> <StarFilled style={{ fontSize: '12px', color: 'yellow' }} />
        </span>
        <span> | {selled} Đã bán</span>
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