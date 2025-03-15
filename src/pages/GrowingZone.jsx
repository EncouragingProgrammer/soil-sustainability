import { useState } from 'react';
import canadaMap from '../assets/canadaMap.png';
import saskMap from '../assets/saskMap.webp';
import soilpH from '../assets/soilpH.jpg';
import "../styles/App.css";

export default function GrowingZoneFinder() {
  const [selectedRegion, setSelectedRegion] = useState('Canada');

  const regions = [
    { name: 'Canada', image: canadaMap },
    { name: 'Saskatchewan', image: saskMap },
    // TODO - Add more provinces/territories later.
  ];

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const currentRegion = regions.find(region => region.name === selectedRegion);

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
        <p>Find your location on the map to identify your Hardiness Zone.</p>
      </section>

      {/* Canadian Growth Zones */}
      <section className="section">
        <h2>Canadian Growing Zones</h2>

        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <label htmlFor="region-select" style={{ marginRight: '10px' }}>
            Select a region:
          </label>
          <select
            id="region-select"
            value={selectedRegion}
            onChange={handleChange}
            style={{
              padding: '8px 12px',
              fontSize: '1rem',
              borderRadius: '6px',
              border: '1px solid var(--warm-brown)',
              backgroundColor: '#fff',
              color: 'var(--dark-brown)',
            }}
          >
            {regions.map((region) => (
              <option key={region.name} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        <h3>{selectedRegion}</h3>

        <img
          className="mapZone"
          src={currentRegion.image}
          alt={`${selectedRegion} Growing Zones`}
          style={{
            maxWidth: '100%',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />

        <table className="center">
          <thead>
            <tr>
              <th>Zone</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Low</th>
              <td>-46°C</td>
              <td>-46°C</td>
              <td>-45°C</td>
              <td>-40°C</td>
              <td>-35°C</td>
              <td>-29°C</td>
              <td>-23°C</td>
              <td>-18°C</td>
              <td>-12°C</td>
              <td>-7°C</td>
            </tr>
            <tr>
              <th>High</th>
              <td>-46°C</td>
              <td>-46°C</td>
              <td>-40°C</td>
              <td>-35°C</td>
              <td>-29°C</td>
              <td>-23°C</td>
              <td>-18°C</td>
              <td>-12°C</td>
              <td>-7°C</td>
              <td>-1°C</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* New Section: Native Plants & Hardiness Zones */}
      <section className="section">
        <h2>Choose Native Plants for Your Region</h2>
        <p>
          Native plants are adapted to the local climate, soil conditions, and ecosystems. Choosing plants native to your area offers many benefits:
        </p>
        <ul>
          <li>They require less water and maintenance once established.</li>
          <li>They support local wildlife, including pollinators like bees and butterflies.</li>
          <li>They are naturally resistant to local pests and diseases.</li>
        </ul>

        <h3>Match Plants to Your Hardiness Zone</h3>
        <p>
          When selecting plants, always check their hardiness zone rating. Choose plants that are well-suited to your zone to ensure they can survive the winter temperatures in your area.
        </p>
        <p>
          For example, if you live in Zone 3, look for plants labeled hardy to Zone 3 or lower.
        </p>
        <p>
          Combining native species with plants appropriate for your hardiness zone creates a resilient and sustainable garden or farm.
        </p>
      </section>

    </div>
  );
}
