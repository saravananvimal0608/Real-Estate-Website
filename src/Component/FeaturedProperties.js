import img1 from "../images/room1.png";
import img2 from "../images/room2.png";
import img3 from "../images/room3.png";
import img4 from "../images/room4.png";
import img5 from "../images/room5.png";
import img6 from "../images/room6.png";

const FeaturedProperties = () => {
  const img = [img1, img2, img3, img4, img5, img6];
  const properties = [{
    title: "Luxury Family Home",
    address: '1800-1818 79th St',
    price: '$395,000'
  },
  {
    title: 'Skyper Pool Apartment',
    address: "1020 Bloomingdale Ave",
    price: "$280,000"
  },
  {
    title: 'North Dillard Street',
    address: "4330 Bell Shoals Rd",
    price: "$250"
  },
  {
    title: 'Eaton Garth Penthouse',
    address: "7722 18th Ave, Brooklyn",
    price: "$180,000"
  },
  {
    title: 'New Apartment Nice Wiew',
    address: "42 Avenue O, Brooklyn",
    price: "$850"
  },
  {
    title: 'Diamond Manor Apartment',
    address: "7802 20th Ave, Brooklyn",
    price: "$259,000"
  },
  ]

  return (
    <div className="container">
      <div className="text-center mb-5">
        <h3>Featured Properties</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="d-flex justify-content-center mb-4 gap-3">
        <button className="btn btn-outline-dark rounded-pill">
          All Properties
        </button>
        <button className="btn btn-outline-dark rounded-pill">For Sale</button>
        <button className="btn btn-outline-dark rounded-pill">For Rent</button>
      </div>

      <div className="container-fluid">
        <div className="row">
          {img.map((image, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div
                className="position-relative"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {/* Property Image */}
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="img-fluid"
                  style={{ height: "330px", width: "100%", objectFit: "cover" }}
                />

                {/* Info Box */}
                <div
                  className="bg-white shadow p-3"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "10px",
                    zIndex: 2,
                    width: "90%",
                    maxWidth: "300px",
                    height: "120px",
                    backgroundColor: "#fff",
                    padding: "16px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                  }}
                >
                  <h5 className="mb-1" style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>{properties[index].title}</h5>
                  <p className="text-muted mb-1" style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }} >{properties[index].address}</p>
                  <div className="d-flex justify-content-between small text-muted">
                    <p className="text-danger fw-bold mb-2" style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}>{properties[index].price}</p>
                    <span>🛏 4</span>
                    <span>🛁 1</span>
                    <span>📐 400 sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-dark rounded-pill">
          See All Listing &gt;
        </button>
      </div>
    </div>
  );
};

export default FeaturedProperties;
