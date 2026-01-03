import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from '../../Img/Logo/logo._TTD_ copy.png'
import './Header.css'

function Header() {

    const [language, setLanguage] = useState("EN")
    const [amount, setAmount] = useState(0)

    const lang_Handler = (lang) => {
        setLanguage(lang)
    }


    return (
        <>


            <header className='Main_Wrapper'>
                <div className='Header-Wrapper'>
                    {/* Logo */}
                    <div className='Amazone-Logo HoverBorderEffect'>
                        <a href="/">
                            <img src={logo} alt="Amazon Logo" />
                        </a>
                    </div>

                    {/* Deliver to */}
                    <div className='Header-Text Deliver-To HoverBorderEffect'>
                        <p>Deliver to <br /> <span>Ethiopia</span></p>
                    </div>

                    {/* Search Bar */}
                    <div className='Search_Bar_Wrapper'>
                        <div className='Search_Bar_Wrapper_Second'>
                            <div className='DropdownButton'>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title="All"
                                    variant='light'
                                >
                                    <Dropdown.Item href="#">Beauty</Dropdown.Item>
                                    <Dropdown.Item href="#">Gaming</Dropdown.Item>
                                    <Dropdown.Item href="#">Movies</Dropdown.Item>
                                    <Dropdown.Item href="#">Music</Dropdown.Item>
                                    <Dropdown.Item href="#">Series</Dropdown.Item>
                                    <Dropdown.Item href="#">Women's Fashion</Dropdown.Item>
                                    <Dropdown.Item href="#">Kids's Fashion</Dropdown.Item>
                                    <Dropdown.Item href="#">Men's Fashion</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className='Search-bar'>
                                <form action="">
                                    <input type="text" placeholder='Search Amazon' />
                                    <button type='submit' aria-label="Search">
                                        <FaSearch />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Language Select */}
                    <div className='Header-Text optional'>
                        <DropdownButton
                            id="dropdown-language"
                            title={language}
                            variant="dark"
                            align="end"
                            className="language-dropdown"
                        >
                            <div style={{ width: "200px", padding: "10px", color: "black" }}>
                                <p style={{ fontWeight: 'bold' }}>Change Language</p>
                                <Dropdown.Item as="button" onClick={() => lang_Handler('EN')}>
                                    <input type="radio" checked={language === 'EN'} readOnly />
                                    <span style={{ marginLeft: '5px' }}>English - EN</span>
                                </Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => lang_Handler('ES')}>
                                    <input type="radio" checked={language === 'ES'} readOnly />
                                    <span style={{ marginLeft: '5px' }}>español - ES</span>
                                </Dropdown.Item>
                                <hr />
                                <p>You are shopping on <br />Amazon.com</p>
                                <a href="#" style={{ color: '#007185', fontSize: '12px' }}>Change country/region</a>
                            </div>
                        </DropdownButton>
                    </div>

                    {/* Sign In */}
                    <div className='Header-Text HoverBorderEffect'>
                        <a href="#">
                            <p>Hello, sign in <br /> <span>Account & Lists</span></p>
                        </a>
                    </div>

                    {/* Returns & Orders */}
                    <div className='Header-Text optional HoverBorderEffect'>
                        <a href="#">
                            <p>Returns <br /> <span>& Orders</span></p>
                        </a>
                    </div>

                    {/* Cart */}
                    <div className='Cart-Icon HoverBorderEffect'>
                        <a href="#">
                            <div style={{ position: 'relative' }}>
                                <span style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '-5px',
                                    backgroundColor: '#f08804',
                                    borderRadius: '50%',
                                    padding: '2px 6px',
                                    fontSize: '12px',
                                    color: 'black'
                                }}>{amount}</span>
                                <FaShoppingCart />
                            </div>
                            <span className='optional'>Cart</span>
                        </a>
                    </div>
                </div>

                {/* Sub Header */}
                <nav className='Second-Header-Wrapper'>
                    <div className='Second-Header-List'>
                        <ul>
                            <li className='HoverBorderEffect'><a href="#">All</a></li>
                            <li className='HoverBorderEffect'><a href="#">Today's Deals</a></li>
                            <li className='HoverBorderEffect'><a href="#">Prime Video</a></li>
                            <li className='HoverBorderEffect'><a href="#">Registry</a></li>
                            <li className='HoverBorderEffect'><a href="#">Gift Cards</a></li>
                            <li className='HoverBorderEffect'><a href="#">Customer Service</a></li>
                            <li className='HoverBorderEffect'><a href="#">Sell</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default Header
