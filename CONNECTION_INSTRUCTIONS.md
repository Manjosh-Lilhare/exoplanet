# Exoplanet Detection App - Backend Connection Setup

## ✅ Fixed Issues:
1. **Missing flask-cors dependency** - Now installed and added to requirements.txt
2. **Backend server not starting** - Now properly configured to run from Backend directory
3. **ML models not loading** - Fixed by running server from correct directory

## 🚀 How to Start Your Application:

### Option 1: Using the Batch Files (Easiest)
1. **Start Backend**: Double-click `start_backend.bat`
   - This will start the Flask server on http://127.0.0.1:5000
   - Keep this window open (you'll see the server logs here)

2. **Start Frontend**: Double-click `start_frontend.bat` 
   - This will start the React app on http://localhost:3000
   - Your browser should automatically open to the app

### Option 2: Manual Start (Advanced)
1. **Backend Terminal**: 
   ```
   cd C:\Users\lilha\Downloads\exoplanet\Backend
   python check3.py
   ```

2. **Frontend Terminal** (in a new PowerShell window):
   ```
   cd C:\Users\lilha\Downloads\exoplanet
   npm start
   ```

## 🔗 Connection Details:
- **Backend API**: http://127.0.0.1:5000/predict
- **Frontend**: http://localhost:3000
- **CORS**: Enabled for cross-origin requests

## 🧪 Testing the Connection:
1. Open the React app at http://localhost:3000
2. Click "Let's Detect" to go to the prediction page
3. Fill in sample exoplanet data (you can use these test values):
   - Orbital Period: 365.25
   - Transit Duration: 6.5
   - Transit Depth: 1000
   - Planetary Radius: 1.0
   - Equilibrium Temperature: 288
   - Stellar Radius: 1.0
   - Impact: 0.5
   - Stellar Temperature: 5778

4. Click "Predict Status" - you should get a prediction result!

## 🐛 Troubleshooting:
- **"Could not connect to backend"**: Make sure the backend is running first
- **Port 5000 already in use**: Close any other applications using port 5000
- **ML model warnings**: The scikit-learn version warning is non-critical
- **React won't start**: Run `npm install` in the main directory

## 📁 Project Structure:
```
exoplanet/
├── Backend/                    # Python Flask server
│   ├── check3.py              # Main Flask application
│   ├── *.pkl                  # ML model files
├── src/                       # React frontend
│   ├── components/
│   │   ├── HomePage/
│   │   └── InputPage/         # Prediction form
├── start_backend.bat          # Backend startup script
├── start_frontend.bat         # Frontend startup script
└── requirements.txt           # Python dependencies (updated with flask-cors)
```

Your backend and frontend are now properly connected! 🎉
