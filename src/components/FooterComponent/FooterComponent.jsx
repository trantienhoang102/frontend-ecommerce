import { Row, Col, Image } from "antd";
import React from 'react'
import qr from '../../assets/images/qr.png'
import app_store from '../../assets/images/app_store.png'
import google_play from '../../assets/images/google_play.png'

import {
    FacebookOutlined,
    LinkedinOutlined,
    InstagramOutlined
} from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <div style={{ width: '100%', background: 'white', display: 'flex', justifyContent: 'center' }}>
            <Row style={{
                alignItems: 'center', justifyContent: 'space-between', width: '1270px', padding: '30px 0px 30px 0px'
            }}>
                <Col span={6}>
                    <div style={{ fontWeight: '600', marginBottom: '7px' }}>
                        Chăm Sóc Khách Hàng
                    </div>
                    <div>
                        Trung Tâm Trợ Giúp
                    </div>

                    <div>
                        Hưỡng Dẫn Mua Hàng
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{ fontWeight: '600', marginBottom: '7px' }}>

                        Về HuyHoangShop

                    </div>
                    <div>
                        Giới Thiệu
                    </div>
                    <div>
                        Tuyển Dụng
                    </div>
                    <div>
                        Điều Khoản
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{ fontWeight: '600', marginBottom: '7px' }}>
                        Theo Dõi Chúng Tôi Trên
                    </div>
                    <div>
                        <FacebookOutlined style={{ margin: '0 3px 0 0' }} />
                        Facebook
                    </div>
                    <div>
                        <InstagramOutlined style={{ margin: '0 3px 0 0' }} />
                        Instagram
                    </div>
                    <div>
                        <LinkedinOutlined style={{ margin: '0 3px 0 0' }} />
                        LinkedIn
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{ fontWeight: '600', marginBottom: '7px' }}>
                        Tải Ứng Dụng Ngay Thôi
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Image
                            width={50}
                            src={qr}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                            <Image
                                width={60}
                                src={app_store}
                            />
                            <Image
                                width={60}
                                src={google_play}
                            />
                        </div>
                    </div>

                </Col>
            </Row >
        </div>
    )
}

export default FooterComponent