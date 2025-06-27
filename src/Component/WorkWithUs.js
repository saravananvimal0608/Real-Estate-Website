import propertyIcon from '../images/icons8-property-48.png';

const WorkWithUs = () => {
  return (
    <div className="container py-5 ">

      <div className="text-center mb-5">
        <h3 className="fs-3 fs-md-2">Why You Should Work With Us</h3>
        <p className="text-muted fs-6 fs-md-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>


      <div className="row text-center g-4">
     
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src={propertyIcon}
            width="48"
            height="48"
            alt="Wide Range of Properties"
            className="mb-3"
          />
          <h5 className="fw-semibold fs-5">Wide Range of Properties</h5>
          <p className="text-muted fs-6">
            We offer expert legal help for all related property <br />
            items in Dubai.
          </p>
        </div>

        {/* 2nd Card */}
        <div className="col-12 col-sm-6 col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
            width="48"
            height="48"
            alt="Buy or Rent Homes"
            className="mb-3"
          />
          <h5 className="fw-semibold fs-5">Buy Or Rent Homes</h5>
          <p className="text-muted fs-6">
            We sell your home at the best market price and very <br />
            quickly as well.
          </p>
        </div>

        {/* 3rd Card */}
        <div className="col-12 col-sm-12 col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            width="48"
            height="48"
            alt="Trusted by Thousands"
            className="mb-3"
          />
          <h5 className="fw-semibold fs-5">Trusted by Thousands</h5>
          <p className="text-muted fs-6">
            We offer you free consultancy to get a loan for your <br />
            new home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;