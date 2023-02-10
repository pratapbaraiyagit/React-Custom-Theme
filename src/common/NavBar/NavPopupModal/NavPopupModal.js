import React from 'react'
import { Col, Row, Toast } from 'react-bootstrap'
import notificationIcon from '../../../assets/Header/ClarityNotification.png'
import emailIcon from '../../../assets/Header/ClarityEmail.png'

const NavPopupModal = (props) => {
    const {
        name,
        modal,
        toggleModal
    } = props

    switch (name) {
        case "Notification Modal":
            return (
                <div className='navTopIcon'>
                    <Row >
                        <Col className="mb-2 float-right mt-10" style={{ marginLeft: '-80px', float: 'left' }}>
                            <Toast show={modal} onClose={toggleModal}>
                                <Toast.Header>
                                    <img
                                        src={notificationIcon}
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">Notification</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body className='text-center bg-light'>
                                    <p>Message 1</p>
                                    <p>Message 2</p>
                                    <p>Message 3</p>
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
            )

        case "Email Modal":
            return (
                <div className='navTopIcon'>
                    <Row>
                        <Col className="mb-2 float-right mt-10" style={{ marginLeft: '200px', float: 'right', width: '300px' }}>
                            <Toast show={modal} onClose={toggleModal}>
                                <Toast.Header>
                                    <img
                                        src={emailIcon}
                                        className="rounded me-2"
                                        alt="emailIcon"
                                    />
                                    <strong className="me-auto">Email</strong>
                                    <small>47 mins ago</small>
                                </Toast.Header>
                                <Toast.Body className='text-center bg-light'>
                                    <p>Message 1</p>
                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
            )
    }
}

export default NavPopupModal