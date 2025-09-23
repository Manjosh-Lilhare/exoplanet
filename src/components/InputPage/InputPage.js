import {useState} from "react";
import './InputPage.css';

function InputPage() {
  const [formData, setFormData] = useState({
    koi_period: "",
    koi_duration: "",
    koi_depth: "",
    koi_prad: "",
    koi_teq: "",
    koi_srad: "",
    koi_impact: "",
    koi_steff: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error: Could not connect to backend.");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Exoplanet Candidate Predictor 🪐</h1>
      <p>Enter the physical parameters of a Kepler Object of Interest (KOI) to predict its status.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="koi_period">Orbital Period (days)</label>
          <input type="number" step="any" id="koi_period" value={formData.koi_period} onChange={handleChange} placeholder="Enter Orbital Period"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_duration">Transit Duration (hours)</label>
          <input type="number" step="any" id="koi_duration" value={formData.koi_duration} onChange={handleChange} placeholder="Enter Transit Duration"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_depth">Transit Depth (ppm)</label>
          <input type="number" step="any" id="koi_depth" value={formData.koi_depth} onChange={handleChange} placeholder="Enter Transit Depth"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_prad">Planetary Radius (Earth radii)</label>
          <input type="number" step="any" id="koi_prad" value={formData.koi_prad} onChange={handleChange} placeholder="Enter Planetary Radius"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_teq">Equilibrium Temperature (K)</label>
          <input type="number" step="any" id="koi_teq" value={formData.koi_teq} onChange={handleChange} placeholder="Enter Equilibrium Temperature"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_srad">Stellar Radius (Solar radii)</label>
          <input type="number" step="any" id="koi_srad" value={formData.koi_srad} onChange={handleChange} placeholder="Enter Stellar Radius"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_impact">Impact</label>
          <input type="number" step="any" id="koi_impact" value={formData.koi_impact} onChange={handleChange} placeholder="Enter Impact"/>
        </div>

        <div className="form-group">
          <label htmlFor="koi_steff">Stellar Temperature</label>
          <input type="number" step="any" id="koi_steff" value={formData.koi_steff} onChange={handleChange} placeholder="Enter Stellar Temperature"/>
        </div>

        <button type="submit" id="predict-button">Predict Status</button>
      </form>

      <div id="result-container">
        <h2>Prediction Result:</h2>
        {loading && <div className="loader">Loading...</div>}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default InputPage;
