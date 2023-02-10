import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTable,
    faCalendarCheck,
    faUser,
    faUserCircle,
    faBook,
    faBookOpen,
    faShoppingBag,
    faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import './sidebar.css'

import setImg from '../../assets/Sidebar/setImg.png'
import logout from '../../assets/Sidebar/logout.png'
import visionLogo from '../../assets/Sidebar/visionLogo.png'
import hennaBekar from '../../assets/Sidebar/hennaBeker.png'
import { FaAngleDown } from 'react-icons/fa';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#000" }}>
                    &times;
                </span>
                <div className='text-center mt-4 px-3'>
                    <img src={visionLogo} alt="" className='me-2' />
                    <div><label className='fs-6'> Vision Education Hub</label></div>
                </div>
                <div className="form-group has-search mt-4 px-3">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
            </div>
            <hr />
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-5">
                    <NavItem className='mt-2'>
                        <NavLink tag={Link} to={"/dashboard"}>
                            <FontAwesomeIcon icon={faTable} className="me-2" />
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem className='mt-2'>
                        <NavLink tag={Link} to={"/event-management"}>
                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2" />
                            Event Management
                        </NavLink>
                    </NavItem>
                    <NavItem className='pb-2 mt-2'>
                        <NavLink tag={Link} to={"/professors"}>
                            <div className='float-left'>
                                <FontAwesomeIcon icon={faUser} className="me-2" />
                                Professors
                            </div>
                            <div className='float-right'>
                                <FaAngleDown />
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem className='pb-2 mt-2'>
                        <NavLink tag={Link} to={"/student"}>
                            <div className='float-left'>
                                <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                                Student
                            </div>
                            <div className='float-right'>
                                <FaAngleDown />
                            </div>
                        </NavLink>
                    </NavItem>

                    <NavItem className='pb-2 mt-2'>
                        <NavLink tag={Link} to={"/course"}>
                            <div className='float-left me-4'>
                                <FontAwesomeIcon icon={faBook} className="me-2" />
                                Course
                            </div>
                            <div className='sidebar-new'>
                                new
                            </div>
                            <div className='float-right'>
                                <FaAngleDown />
                            </div>
                        </NavLink>
                    </NavItem>

                    <NavItem className='pb-2 mt-2'>
                        <NavLink tag={Link} to={"/library"}>
                            <div className='float-left'>
                                <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                                Library
                            </div>
                            <div className='float-right'>
                                <FaAngleDown />
                            </div>
                        </NavLink>
                    </NavItem>

                    <NavItem className='pb-2 mt-2'>
                        <NavLink tag={Link} to={"/department"}>
                            <div className='float-left'>
                                <FontAwesomeIcon icon={faShoppingBag} className="me-2" />
                                Department
                            </div>
                            <div className='float-right'>
                                <FaAngleDown />
                            </div>
                        </NavLink>
                    </NavItem>

                    <NavItem className='pb-2 mt-2'>
                        <NavLink tag={Link} to={"/staff"}>
                            <div className='float-left'>
                                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                                Staff
                            </div>
                            <div className='float-right'>
                                <FaAngleDown />
                            </div>
                        </NavLink>
                    </NavItem>

                    <div className='mt-5 px-3 text-center' >
                        <img src={hennaBekar} className='resp-img' alt="" height="100px" width="100px" />
                        <h4 className='resp-user-name'><b>Henna Bakar</b></h4>
                        <span className='text-justify resp-user-name'>HennaBaker's@gmail.com</span><br />
                        <img src={setImg} alt="" className='m-2' />
                        <img src={logout} alt="" className='m-2' />
                    </div>
                </Nav>
            </div>
        </div>
    )
};

export default Sidebar;