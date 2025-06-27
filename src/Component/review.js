import Photo from '../images/photo.png';
import Button from '../images/Button.png'
import Button1 from '../images/button1.png'

const Review = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row align-items-center g-4">
                {/* Left Section */}
                <div className="col-12 col-md-6">
                    <h2 className="fw-bold mb-3">
                        What our customers are<br />saying us?
                    </h2>
                    <p>
                        Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose injected humour and the like.
                    </p>

                    <div className="d-flex gap-5 mt-4">
                        <div>
                            <h3>10m+</h3>
                            <p>Happy People</p>
                        </div>
                        <div>
                            <h3>4.88</h3>
                            <p>Overall Rating</p>
                            <p>Rating: ⭐⭐⭐⭐☆</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center" style={{ marginBottom: "5%" }}>
                    <div className="d-flex flex-column flex-sm-row align-items-center gap-4 mb-3">
                        <img src={Photo} alt="user" className="img-fluid" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
                        <div>
                            <h5 className="mb-1">Cameron Williamson</h5>
                            <p className="text-muted mb-0">Designer</p>
                        </div>
                        {/* <img src={Coma} alt="comma" style={{ width: "30px", height: "30px"}}/> */}
                    </div>

                    <p className="text-muted px-3">
                        Searches for multiplexes, property comparisons, and the loan
                        estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore.
                    </p>
                    <div className="d-flex justify-content-evenly w-25">
                        <img src={Button} alt="btn" />
                        <img src={Button1} alt="btn" />
                    </div>

                </div>
                
            </div>
        </div>
    );
};

export default Review;
