import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import logo from '../../Img/Logo/logo._TTD_ copy.png'
import Cart from '../../Img/Logo/shopping_cart_icon_128753.png'
import './Header.css'

function Header() {

    const [language, setLanguage] = useState("EN")
    const [amount, setAmount] = useState(0)

    const lang_Handler = (lang) => {
        setLanguage(lang)
    }


    return (
        <>


            <div className='Main_Wrapper'>
                <div className='Header-Wrapper'>

                    <div className='Amazone-Logo'><a href="#"><img src={logo} alt="Amazone-Logo" /></a></div>

                    <div className='Header-Text' style={{ fontSize: "14px" }}><p>Deliverd to<br />Ethiopia</p></div>

                    <div className='Search_Bar_Wrapper'>
                        <div className='Search_Bar_Wrapper_Second Row'>
                            <div className='col-1 DropdownButton'>
                                <DropdownButton 
                                    id="dropdown-basic-button" 
                                    title="All"
                                    style={{}} >


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
                            <div className='col-11'>
                                <div className='Search-bar'>
                                    <form action="">
                                        <input type="text" placeholder='Search Amazon' />
                                        <button type='submit' >
                                            <FaSearch />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <DropdownButton id="dropdown-language"
                            title={language}
                            variant="light"
                            align="end"
                            style={{ border: '1px solid #ccc', borderRadius: '5px'}} >
                            <div style={{width:"200px", padding:"5px"}}>
                                <p>Change Language</p>

                                <Dropdown.Item as="button" onClick={() => lang_Handler('EN')}>
                                    <input type="radio"
                                        checked={language === 'EN'}
                                        onChange={() => lang_Handler('EN')} />
                                    <span>English</span>
                                </Dropdown.Item>

                                <hr />

                                <Dropdown.Item as="button" onClick={() => lang_Handler('ES')}>
                                    <input type="radio"
                                        checked={language === 'ES'}
                                        onChange={() => lang_Handler('ES')} />
                                    <span>español</span>
                                </Dropdown.Item>

                                <hr />
                                <p>You are shoping <br />on Amazon.com</p>
                                <p style={{ display: "flex", gap: "18px" }}>Change country<a href="#">Change</a></p>
                            </div>



                        </DropdownButton>

                    </div>
                    <div className='Header-Text'>
                        <a href="#">
                            <p>Hello, sign in <br /> <h6>Account $ list</h6></p>
                        </a>
                        <div style={{ display: "none" }}>
                            <button>Sign in</button>
                        </div>
                    </div>
                    <div className='Header-Text'>
                        <a href="#">
                            <p>Return <br /> <h6>$ Orders</h6></p>
                        </a>
                    </div>
                    <div style={{ display: "flex" }} className='Cart-Icon'>
                        <div>
                            <h5>{amount}</h5>
                            <button><FaShoppingCart /></button>
                        </div>
                        <p>Basket</p>
                    </div>
                </div>
                <div className='Second-Header-Wrapper'>
                    <div className='Second-Header-List'>
                        <ul>
                            <li><a href="#">All</a></li>
                            <li><a href="#">Today's Deal</a></li>
                            <li><a href="#">Prime Video</a></li>
                            <li><a href="#">Registry</a></li>
                            <li><a href="#">Gift Cards</a></li>
                            <li><a href="#">Coustemer Services</a></li>
                            <li><a href="#">Sell</a></li>
                        </ul>
                    </div>
                </div>


            </div >
        </>
    )
}

export default Header
