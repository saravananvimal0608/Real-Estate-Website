import MainImg from "../images/Mainp.jpg";
const BackGroundImg = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${MainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        paddingTop: "80px",
        marginTop: '0px',
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
      }}
    >
      <div className=" px-3" style={{ maxWidth: "600px" }}>
        {/* Heading Button */}
        <div className="text-center">
          <button
            className="main-heading rounded-pill mb-4 px-4"
            style={{
              height: "50px",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "1px solid black",
              backdropFilter: "blur(6px)",
              backgroundColor: "rgba(255,255,255,0.5)",
              marginTop:'20px'
            }}
          >
            LET US GUIDE YOUR HOME
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-center fw-bold text-dark mb-3 display-6">
          Believe in Finding It
        </h2>

        {/* Description */}
        <p className="text-center text-muted fs-6 mb-4">
          Search properties for sale and to rent in the UK
        </p>

        {/* Search */}
        <div className="d-flex justify-content-center my-4">
          <div
            className="d-flex align-items-center rounded-pill px-3 py-2 w-100"
            style={{
              background: "white",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              maxWidth: "600px",
            }}
          >
            <input
              type="text"
              className="search-container form-control border-0 shadow-none"
              placeholder="Enter Name, Keywords..."
              style={{ borderRadius: "50px" }}
            />
            <button
              className="ms-2 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#e3c778",
                border: "none",
                borderRadius: "50%",
                width: "45px",
                height: "45px",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                alt="search"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-center fw-semibold text-white fs-6 mb-3">
          What are you looking for?
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3">
          {["Modern Villa", "Apartment", "Town House"].map((item, i) => (
            <button
              key={i}
              className="btn rounded-pill px-4 py-2"
              style={{
                background:
                  "linear-gradient(90deg, #8E836D 0%, #A38D69 100%)",
                color: "white",
                fontSize: '12px'
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BackGroundImg;
