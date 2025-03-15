import workSoil from '../assets/no-tillage-farming.png';

export default function Farming() {
  return (
    <div className="container">
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Regenerative Farming 🌾</h1>
        <p>
          Learn about farming practices that restore soil health, improve biodiversity, and support sustainable agriculture.
        </p>

      <div className="programs-images">
        <img
          src={workSoil}
          alt="Tilling Soil"
          className="program-image"
        />
      </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section">
        <h2>More Information Coming Soon!</h2>
        <p>
          Explore more strategies to help build a sustainable future for farming communities.
        </p>
      </section>

      {/* Techniques Section */}
      <section className="section">
        <h2>Core Techniques</h2>
        <div className="resource-buttons">
          <a href="#">Crop Rotation</a>
          <a href="#">Cover Cropping</a>
          <a href="#">No-Till Farming</a>
          <a href="#">Polyculture & Permaculture</a>
        </div>
      </section>



    </div>
  );
}
