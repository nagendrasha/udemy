import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="ft">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 m-2">
                            <h4>Udemy</h4>
                            <p>Copyright © AdelSocial Pvt. Ltd.</p>
                        </div>
                        <div className="col-sm-3 m-2">
                            <ul>
                                <h6>Udemy</h6>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Services</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 m-2">
                            <ul>
                                <h6>Products</h6>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Try Courses For Free</a></li>
                                <li><a href="#">Career Camp</a></li>
                                <li><a href="#">Hire Talent</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3 m-2">
                            <ul id='social'>
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                                <a href="#" class="fa fa-google"></a>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
