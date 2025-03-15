// src/pages/GrowingZoneFinder.jsx

import hardinessMap from '../assets/hardinessMap.png';
import soilpH from '../assets/soilpH.jpg';

export default function GrowingZoneFinder() {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Growing Zone Finder</h1>
        <p>
          Discover your growing zone and find the best plants for your region!
        </p>
      </section>

      {/* What is a Growing Zone */}
      <section className="section">
        <h2>What is a Growing Zone?</h2>
        <p>
          Growing zones (also known as hardiness zones) help gardeners and farmers determine which plants will thrive in their local climate.
        </p>
        <ul>
          <li>Zones are based on average annual minimum winter temperatures.</li>
          <li>Knowing your zone helps you choose plants that can survive year-round.</li>
          <li>Different regions support different types of crops, trees, and flowers.</li>
        </ul>
      </section>

      {/* Find Your Zone */}
      <section className="section">
        <h2>Find Your Zone</h2>
        <p>
          Use our tool to find your growing zone automatically based on your location, or enter your postal code manually.
        </p>

        <button className="button">Use My Location</button>

        <div style={{ marginTop: '20px' }}>
          <label htmlFor="postalCode">Enter your postal code:</label><br />
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="e.g., 90210"
            className="text-input"
          />
          <button className="button" style={{ marginLeft: '10px' }}>Find Zone</button>
        </div>
      </section>

      {/* Canadian Growth Zones */}
      <section className="section">
        <h2>Canadian Growing Zones</h2>
        <img src={hardinessMap} alt="Canadian Growing Zones" style={{ maxWidth: '100%', marginBottom: '20px' }} />

        <table className="table-auto w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Zone</th>
              <th className="border border-gray-300 p-2">0</th>
              <th className="border border-gray-300 p-2">1</th>
              <th className="border border-gray-300 p-2">2</th>
              <th className="border border-gray-300 p-2">3</th>
              <th className="border border-gray-300 p-2">4</th>
              <th className="border border-gray-300 p-2">5</th>
              <th className="border border-gray-300 p-2">6</th>
              <th className="border border-gray-300 p-2">7</th>
              <th className="border border-gray-300 p-2">8</th>
              <th className="border border-gray-300 p-2">9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-gray-300 p-2">Low</th>
              <td className="border border-gray-300 p-2">below -46°C</td>
              <td className="border border-gray-300 p-2">-46°C</td>
              <td className="border border-gray-300 p-2">-45°C</td>
              <td className="border border-gray-300 p-2">-40°C</td>
              <td className="border border-gray-300 p-2">-35°C</td>
              <td className="border border-gray-300 p-2">-29°C</td>
              <td className="border border-gray-300 p-2">-23°C</td>
              <td className="border border-gray-300 p-2">-18°C</td>
              <td className="border border-gray-300 p-2">-12°C</td>
              <td className="border border-gray-300 p-2">-7°C</td>
            </tr>
            <tr>
              <th className="border border-gray-300 p-2">High</th>
              <td className="border border-gray-300 p-2">-46°C</td>
              <td className="border border-gray-300 p-2">-46°C</td>
              <td className="border border-gray-300 p-2">-40°C</td>
              <td className="border border-gray-300 p-2">-35°C</td>
              <td className="border border-gray-300 p-2">-29°C</td>
              <td className="border border-gray-300 p-2">-23°C</td>
              <td className="border border-gray-300 p-2">-18°C</td>
              <td className="border border-gray-300 p-2">-12°C</td>
              <td className="border border-gray-300 p-2">-7°C</td>
              <td className="border border-gray-300 p-2">-1°C</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Major Chemicals */}
      <section className="section">
        <h2>Major Nutrients</h2>
        <ul className="list-disc pl-5">
          <li><strong>Nitrogen:</strong> Essential for amino acids, proteins, and plant growth. Deficiency causes yellowing leaves and slow growth. Excess nitrogen delays fruit ripening and can reduce yield.</li>
          <li><strong>Phosphorus:</strong> Supports root development and energy transfer. Deficiency results in purple leaves and stunted growth.</li>
          <li><strong>Potassium:</strong> Increases photosynthesis efficiency, improves fruit formation, and disease resistance. Deficiency leads to weak stems and vulnerability to disease.</li>
        </ul>
      </section>

      {/* Secondary Nutrients */}
      <section className="section">
        <h2>Secondary Nutrients</h2>
        <ul className="list-disc pl-5">
          <li><strong>Calcium:</strong> Important for cell division and structure. Deficiency leads to thin cell walls and curled leaves.</li>
          <li><strong>Magnesium:</strong> Central to chlorophyll production and enzyme activation. Deficiency causes yellowing of lower leaves and lower yields.</li>
          <li><strong>Sulfur:</strong> Needed for protein synthesis and enzyme function. Deficiency leads to yellowing of younger leaves.</li>
        </ul>
      </section>

      {/* Micronutrients */}
      <section className="section">
        <h2>Micronutrients</h2>
        <ul className="list-disc pl-5">
          <li><strong>Iron:</strong> Supports chlorophyll production. Deficiency causes yellowing and weak stems.</li>
          <li><strong>Manganese:</strong> Helps in chlorophyll synthesis and nitrogen metabolism. Deficiency leads to poor growth in alkaline soils.</li>
          <li><strong>Zinc:</strong> Essential for enzyme systems and hormone production. Deficiency leads to mottled leaves and delayed maturity.</li>
          <li><strong>Copper:</strong> Supports root development and protein usage. Deficiency causes stunted growth.</li>
          <li><strong>Boron:</strong> Aids in root growth, nitrogen fixation, and sugar transport. Deficiency causes poor tissue development and root damage.</li>
          <li><strong>Molybdenum:</strong> Important for nitrogen metabolism. Deficiency arises in acidic soils.</li>
          <li><strong>Chloride:</strong> Usually sufficient in most soils, but deficiency can occur in sandy soils with high rainfall.</li>
        </ul>
      </section>

      {/* PH Levels */}
      <section className="section">
        <h2>Soil pH Levels</h2>
        <p>
          Soil pH influences nutrient availability and crop health. Most plants prefer a pH between 6.0 and 7.0.
        </p>
        <img src={soilpH} alt="Soil pH Chart" style={{ maxWidth: '100%', margin: '20px 0' }} />
        <p>
          Acidic soils benefit plants like blueberries and raspberries, while more alkaline soils are suitable for crops like beans and kale.
        </p>
      </section>

    </div>
  );
}
