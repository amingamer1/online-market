import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs'
import { GoDiffAdded } from 'react-icons/go'
import { ImHome3 } from 'react-icons/im'
import { MdOutlineModeComment } from 'react-icons/md'
import { SiMarketo } from 'react-icons/si'
import { withGlobalState } from 'react-globally'

function NavBar({ globalState }) {

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">فروشگاه آنلاین</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <Link to="/" className="nav-link"><ImHome3 /> خانه </Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link to="/about-us" className="nav-link"><MdOutlineModeComment /> درباره ما </Link>
                        </li>
                        <li className="nav-item  ms-3" >
                            <Link to="/products" className="nav-link"><SiMarketo /> محصولات </Link>
                        </li>
                        <li className="nav-item ms-3" >
                            <Link to="/add-prodocts-page" className="nav-link" ><GoDiffAdded /> اضافه کردن محصول جدید</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                        <li className="nav-item ms-3 x">
                            <Link to="/cart" className="nav-link "><BsCart3 /> سبد خرید <span className='cart-back rounded-circle bg-danger  text-light'>{globalState.totalOrder}</span> </Link>
                        </li>
                        <li className="nav-item x">
                            <Link to="/login" className="nav-link ">ورود  </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default withGlobalState(NavBar);