import NavImg from "../images/NavImg.png";
import Insta from "../images/insta.png";
import Face from "../images/face.png";
import X from "../images/x.png";
import LinkedIn from "../images/linkedin.png";
// import Svg from '../images/SVG.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#1E4C45", color: "white" }} className="pt-5 pb-4">
            <div className="container">

                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                        <img src={NavImg} alt="logo" style={{ height: "40px" }} />
                        <h4 className="m-0">JustHome</h4>
                    </div>
                    <div className="d-flex gap-3">
                        <img src={Insta} alt="insta" style={{ width: "24px", height: "24px" }} />
                        <img src={Face} alt="facebook" style={{ width: "24px", height: "24px" }} />
                        <img src={X} alt="x" style={{ width: "24px", height: "24px" }} />
                        <img src={LinkedIn} alt="linkedin" style={{ width: "24px", height: "24px" }} />
                    </div>
                </div>


                <div className="row text-center text-md-start gap-4">


                    <div className="col-12 col-md-3">
                        <h6>Subscribe</h6>
                        <div className="input-group mb-2">
                            <p>Your e-mail</p>
                            <p>Send</p>
                        </div>
                        <p className="small">
                            Subscribe to our newsletter to receive our weekly feed.
                        </p>
                    </div>


                    <div className="col-6 col-md-2">
                        <h6>Discover</h6>
                        <ul className="list-unstyled small">
                            <li>Miami</li>
                            <li>New York</li>
                            <li>Chicago</li>
                            <li>Florida</li>
                            <li>Los Angeles</li>
                            <li>San Diego</li>
                        </ul>
                    </div>


                    <div className="col-6 col-md-2">
                        <h6>Quick Links</h6>
                        <ul className="list-unstyled small">
                            <li>About</li>
                            <li>Contact</li>
                            <li>FAQ’s</li>
                            <li>Blog</li>
                            <li>Pricing Plans</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>


                    <div className="col-6 col-md-2">
                        <h6>Contact Us</h6>
                        <ul className="list-unstyled small">
                            <li>hi@justhome.com</li>
                            <li>(123) 456-7890</li>
                        </ul>
                    </div>


                    <div className="col-6 col-md-3">
                        <h6>Our Address</h6>
                        <ul className="list-unstyled small">
                            <li>99 Fifth Avenue, 3rd Floor</li>
                            <li>San Francisco, CA 1980</li>
                        </ul>
                    </div>
                  

                </div>
            </div>
        </div>
    );
};

export default Footer;
