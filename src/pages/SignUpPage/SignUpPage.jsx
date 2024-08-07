import React, { useEffect, useState } from 'react'
import { WrapperTextLight, WrapperContainerLeft, WrapperContainerRight } from './style'
import { Image } from 'antd';
import imageLogo from '../../assets/images/logo-signin.png'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook';
import Loading from '../../components/LoadingComponent/Loading';
import * as message from '../../components/Message/Message'


const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)


  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data, isPending, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleNavigateSignIn()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const navigate = useNavigate()
  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }

  const handleSignUp = () => {
    if (!email.match(
      /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g
    ) && password !== confirmPassword) {
      setErrorEmail(true)
      setErrorPassword(true)
    }

    else if (password !== confirmPassword) {
      setErrorEmail(false)
      setErrorPassword(true)
    }
    else if (!email.match(
      /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g
    )) {
      setErrorEmail(true)
      setErrorPassword(false)
    }

    else {
      setErrorEmail(false)
      setErrorPassword(false)

      mutation.mutate({ email, password, confirmPassword })
    }

  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
      <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập và tạo tài khoản</p>
          <InputFormComponent style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          {errorEmail && <div style={{ color: 'red', size: '18px' }}>Tài khoản phải là địa chỉ email</div>}
          {/* <InputFormComponent placeholder="password" style={{ marginBottom: '10px'}}  />
        <InputFormComponent placeholder="confirm password" /> */}
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
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
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputFormComponent placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
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
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputFormComponent placeholder="confirm password" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
          </div>
          {errorPassword && <div style={{ color: 'red', size: '18px' }}>Mật khẩu không trùng khớp</div>}

          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          {/* <Loading isLoading={isPending}> */}
          <ButtonComponent
            disabled={!email.length || !password.length || !confirmPassword.length}
            onClick={handleSignUp}
            size={40}
            styleButton={{
              background: 'rgb(255,57,69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng ký'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          />
          {/* </Loading> */}
          <p>Bạn đã có tài khoản? <WrapperTextLight onClick={handleNavigateSignIn} style={{ cursor: 'pointer' }}> Đăng nhập</WrapperTextLight></p>
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