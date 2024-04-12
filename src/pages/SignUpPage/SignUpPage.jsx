import React, {useState} from 'react'
import { WrapperTextLight, WrapperContainerLeft, WrapperContainerRight } from './style'
import { Image } from 'antd';
import imageLogo from '../../assets/images/logo-signin.png'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import {EyeFilled, EyeInvisibleFilled} from '@ant-design/icons'


const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);


  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
    <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p>Đăng nhập vào tạo tài khoản</p>
        <InputFormComponent style={{ marginBottom: '10px'}} placeholder="abc@gmail.com" />
        {/* <InputFormComponent placeholder="password" style={{ marginBottom: '10px'}}  />
        <InputFormComponent placeholder="confirm password" /> */}
        <div style={{position: 'relative'}}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
              isShowPassword ? (
                <EyeFilled />
              ) : (
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputFormComponent placeholder="password" style={{marginBottom: '10px'}} type={isShowPassword ? "text": "password"}/>
          </div>
          <div style={{position: 'relative'}}>
            <span
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
              isShowConfirmPassword ? (
                <EyeFilled />
              ) : (
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputFormComponent placeholder="confirm password" type={isShowPassword ? "text": "password"}/>
          </div>
        <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
                background: 'rgb(255,57,69)',
                height: '48px',
                width: '100%',
                border: 'none',
                borderRadius: '4px', 
                margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700' }}
        />
        <p>Bạn đã có tài khoản? <WrapperTextLight> Đăng nhập</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={imageLogo} preview={false} alt="image-logo" height="203px" width="203px" />
            <h4>Mua sắm tại LTTD</h4>
      </WrapperContainerRight>
    </div>
  </div>
  )
}

export default SignUpPage