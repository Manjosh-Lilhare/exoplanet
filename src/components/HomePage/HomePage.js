import {Link} from "react-router-dom";
import './HomePage.css';
function HomePage() {
  return (
    <div style={{
      backgroundImage: "url('/static/img/pexels-frank-cone-140140-3607542.jpg')",
      backgroundPosition: "center",
      margin: 0,
      padding: 0,
      fontSize: "1.5rem",
      color: "rgb(243, 242, 242)",
      minHeight: "100vh"
    }}>
      <header>
        <h1 style={{
          fontSize: "5rem",
          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode"
        }}>
          EXOPLANET DETECTION
        </h1>
      </header>

      <main>
        <section id="welcm" className="hero">
          <div className="container">
            <h2>Welcome to the exoplanet detection model</h2>
            <p>
              Our model is an XGBoost classifier built to distinguish between confirmed exoplanets and false positives. 
              It uses SMOTE to balance the dataset and Randomized Search to fine-tune the model&apos;s parameters, ensuring 
              it learns to make accurate predictions on both classes of data.
            </p>

            <Link to="/input">
              <button style={{
                backgroundColor: "rgb(111, 168, 223)",
                color: "black",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                textDecoration: "none",
                textAlign: "center",
                display: "inline-block",
                marginTop: "10px",
                fontFamily: "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode"
              }}>
                Let&apos;s Detect
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
