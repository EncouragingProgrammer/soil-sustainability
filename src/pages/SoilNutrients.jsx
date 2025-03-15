// src/pages/SoilNutrients.jsx

import soilpH from '../assets/soilpH.jpg';
import '../styles/App.css'; // Assuming consistent styling comes from here

export default function SoilNutrients() {
  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Soil Nutrients Guide</h1>
        <p>
          Learn about the essential nutrients and pH levels that support healthy soil and vibrant plant growth.
        </p>
      </section>

      {/* Major Nutrients */}
      <section className="section">
        <h2>Major Nutrients</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Nitrogen (N):</strong> Essential for amino acids, proteins, and plant growth. Deficiency causes yellowing leaves and slow growth. Excess nitrogen delays fruit ripening and can reduce yield.
          </li>
          <li>
            <strong>Phosphorus (P):</strong> Supports root development and energy transfer. Deficiency results in purple leaves and stunted growth.
          </li>
          <li>
            <strong>Potassium (K):</strong> Increases photosynthesis efficiency, improves fruit formation, and disease resistance. Deficiency leads to weak stems and vulnerability to disease.
          </li>
        </ul>
      </section>

      {/* Secondary Nutrients */}
      <section className="section">
        <h2>Secondary Nutrients</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Calcium (Ca):</strong> Important for cell division and structure. Deficiency leads to thin cell walls and curled leaves.
          </li>
          <li>
            <strong>Magnesium (Mg):</strong> Central to chlorophyll production and enzyme activation. Deficiency causes yellowing of lower leaves and lower yields.
          </li>
          <li>
            <strong>Sulfur (S):</strong> Needed for protein synthesis and enzyme function. Deficiency leads to yellowing of younger leaves.
          </li>
        </ul>
      </section>

      {/* Micronutrients */}
      <section className="section">
        <h2>Micronutrients</h2>
        <ul className="list-disc pl-5">
          <li><strong>Iron (Fe):</strong> Supports chlorophyll production. Deficiency causes yellowing and weak stems.</li>
          <li><strong>Manganese (Mn):</strong> Helps in chlorophyll synthesis and nitrogen metabolism. Deficiency leads to poor growth in alkaline soils.</li>
          <li><strong>Zinc (Zn):</strong> Essential for enzyme systems and hormone production. Deficiency leads to mottled leaves and delayed maturity.</li>
          <li><strong>Copper (Cu):</strong> Supports root development and protein usage. Deficiency causes stunted growth.</li>
          <li><strong>Boron (B):</strong> Aids in root growth, nitrogen fixation, and sugar transport. Deficiency causes poor tissue development and root damage.</li>
          <li><strong>Molybdenum (Mo):</strong> Important for nitrogen metabolism. Deficiency arises in acidic soils.</li>
          <li><strong>Chloride (Cl):</strong> Usually sufficient in most soils, but deficiency can occur in sandy soils with high rainfall.</li>
        </ul>
      </section>

      {/* Soil pH Levels */}
      <section className="section">
        <h2>Soil pH Levels</h2>
        <p>
          Soil pH influences nutrient availability and crop health. Most plants prefer a pH between 6.0 and 7.0.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
                src={soilpH}
                alt="Soil pH Chart"
                style={{
                maxWidth: '100%',
                margin: '20px 0',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            />
            </div>


        <p>
          Acidic soils benefit plants like blueberries and raspberries, while more alkaline soils are suitable for crops like beans and kale.
        </p>
      </section>

    </div>
  );
}
