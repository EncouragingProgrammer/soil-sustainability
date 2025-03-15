// src/pages/GrowingZoneFinder.jsx

export default function GrowingZoneFinder() {
  return (
    <div className="container">
      <section className="hero-section">
        <h1>Growing Zone Finder</h1>
        <p>
          Discover your growing zone and find the best plants for your region!
        </p>
      </section>

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

      <section className="section">
        <h2>Find Your Zone</h2>
        <p>
          Use our tool to find your growing zone automatically based on your location, or enter your postal code manually.
        </p>

        {/* Placeholder button - you can wire this up to geolocation functionality later */}
        <button className="button">Use My Location</button>

        {/* Optional: Text input for manual zone finder */}
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
    </div>
  );
}
