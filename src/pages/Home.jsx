// src/pages/Home.jsx
import compostImage from '../assets/compost_image.jpg';
import soilHandsImage from '../assets/soil_hands.jpg';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to the Soil Sustainability Hub 🌱</h1>
      
      <p>
        Join our mission to improve soil health, reduce waste, and support life on land. Learn practical strategies for sustainable gardening, composting, and regenerative farming.
      </p>

      <section className="programs-section">
        <h2>Explore Our Programs</h2>

        <div className="programs-content">
          {/* Text content on the left */}
          <div className="programs-text">
            <ul>
              <li><strong>Soil Sustainability:</strong> Discover the importance of healthy soil for food security and biodiversity.</li>
              <li><strong>Gardening:</strong> Level up your gardening skills with sustainable practices.</li>
              <li><strong>Composting:</strong> Learn how to reduce waste and create nutrient-rich compost.</li>
              <li><strong>Farming:</strong> Explore regenerative farming methods that restore soil health.</li>
              <li><strong>Zone Finder:</strong> Find your growing zone and discover which plants thrive there.</li>
              <li><strong>Resources:</strong> Access guides, toolkits, and partner programs to help you on your journey.</li>
            </ul>
          </div>

          {/* Images on the right */}
          <div className="programs-images">
            <img
              src={compostImage}
              alt="Composting"
              className="program-image"
            />
          </div>
        </div>
      </section>


      <section className="why-it-matters-section">
        <div className="why-it-matters-content">
          
          {/* Image on the left */}
          <div className="why-it-matters-image">
            <img
              src={soilHandsImage}
              alt="Hands holding soil"
              className="program-image"
            />
          </div>

          {/* Text on the right */}
          <div className="why-it-matters-text">
            <h2>Why It Matters</h2>
            <p>
              Healthy soil supports life on Earth. By improving soil health, we can fight climate change, protect biodiversity, and ensure a sustainable future for generations to come.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
