import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className='AboveFotter'>
                <hr />
                <div className='InnerFooter'>
                    <div>
                        <h2>See personalized recommendations</h2>
                    </div>
                    <div>
                        <button>Sign in</button>
                    </div>
                    <div>
                        <small> New customer? <a href="#"> Start here.</a></small>
                    </div>
                </div>
                <hr />
            </div>
            <div className='LinkToHeader'>
                <a href="/">Back to top</a>
            </div>

            <div className='NoteWrapper'>
                <div className='row SecondFooter'>
                    <div className='col-3'>
                        <h4>Get to Know Us</h4>
                        <a href="">Careers</a><br />
                        <a href="">Blog</a><br />
                        <a href="">About Amazon</a><br />
                        <a href="">Investor Relations</a><br />
                        <a href="">Amazon Devices</a><br />
                        <a href="">Amazon Science</a>
                    </div>
                    <div className='col-3'>
                        <h4>Make Money with Us</h4>
                        <a href="">Sell products on Amazon</a><br />
                        <a href="">Sell on Amazon Business</a><br />
                        <a href="">Sell apps on Amazon</a><br />
                        <a href="">Become an Affiliate</a><br />
                        <a href="">Advertise Your Products</a><br />
                        <a href="">Self-Publish with Us</a><br />
                        <a href="">Host an Amazon Hub</a><br />
                        <a href="">›See More Make Money with Us</a>
                    </div>
                    <div className='col-3'>
                        <h4>Amazon Payment Products</h4>
                        <a href="">Amazon Business Card</a><br />
                        <a href="">Shop with Points</a><br />
                        <a href="">Reload Your Balance</a><br />
                        <a href="">Amazon Currency Converter</a>
                    </div>
                    <div className='col-3'>
                        <h4>Let Us Help You</h4>
                        <a href="">Amazon and COVID-19</a><br />
                        <a href="">Your Account</a><br />
                        <a href="">Your Orders</a><br />
                        <a href="">Shipping Rates & Policies</a><br />
                        <a href="">Returns & Replacements</a><br />
                        <a href="">Manage Your Content and Devices</a><br />
                        <a href="">Help</a><br />
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Footer
