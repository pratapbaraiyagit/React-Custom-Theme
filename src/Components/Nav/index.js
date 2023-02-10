import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
} from "reactstrap";
// import { Link } from "react-router-dom";

import emailIcon from '../../assets/Header/ClarityEmail.png'
import notificationIcon from '../../assets/Header/ClarityNotification.png'
import EnglishIcon from '../../assets/Header/EnglishIcon.png'
import NavPopupModal from "../../common/NavBar/NavPopupModal/NavPopupModal";
import './index.css'

const NavbarHead = ({ toggleSidebar }) => {
    const [topBarIsOpen, setTopBarOpen] = useState(true);

    //popup
    const [notificationModal, setNotificationModal] = useState(false)
    const [emailModal, setEmailModal] = useState(false)

    const toggleNotificationModal = () => setNotificationModal(!notificationModal);
    const toggleEmailModal = () => setEmailModal(!emailModal);
    const toggleTopBar = () => setTopBarOpen(!topBarIsOpen);

    return (
        <div>
            <Navbar
                color="light"
                light
                className="navbar p-2 mb-2 bg-white rounded"
                expand="md"
            >
                <Button color="" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faAlignLeft} />
                </Button>
                <NavbarToggler onClick={toggleTopBar} />
                <Collapse isOpen={topBarIsOpen} navbar>
                    <div className='card-body'>
                        <div className='float-left'>
                            <h4 className='font-weight-bold'> Education Dashboard </h4>
                            <label className="float-left">Welcome, Henna Baker's!</label>
                        </div>
                        <div className='float-right'>
                            <img src={EnglishIcon} className='me-3 float-left mt-2' alt="image" />
                            <label className="header-english me-3 float-left mt-3">English</label>
                            <img className='me-3 float-left mt-2' src={notificationIcon} alt="image" onClick={toggleNotificationModal} style={{ cursor: 'pointer' }} />
                            <img className='me-3 float-left mt-2' src={emailIcon} alt="image" onClick={toggleEmailModal} style={{ cursor: 'pointer' }} />
                            <div className="float-left ">
                                <img src="/profile_icon.png" className='me-2 float-left' alt="image" />
                                <span className="header-profile-name">Clay Johnson</span><br />
                                <span className="mt-3 fs-6">Admin Staff</span>
                            </div>
                            <i className="fa fa-angle-down header-icon prof-drop-icon float-left mt-1" aria-hidden="true" ></i>
                            <div>
                                <NavPopupModal
                                    name="Notification Modal"
                                    toggleModal={toggleNotificationModal}
                                    modal={notificationModal}
                                />
                                <NavPopupModal
                                    name='Email Modal'
                                    toggleModal={toggleEmailModal}
                                    modal={emailModal}
                                />
                            </div>
                        </div>
                    </div>
                </Collapse>
            </Navbar>

        </div>
    );
};

export default NavbarHead;
