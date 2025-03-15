import { useState } from 'react';
import Accordion from '../components/Accordion';
import '../styles/LevelingSystem.css';

export default function Gardening() {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const levels = [
    {
      level: 1,
      title: "Getting Started: Plant Your First Seed",
      urban: "Start with a small container on your balcony, windowsill, or kitchen. Herbs like basil or mint are perfect for beginners.",
      rural: "Find a small patch of land or use a raised bed. Start with easy vegetables like lettuce or radishes.",
    },
    {
      level: 2,
      title: "Soil Prep & Composting",
      urban: "Create a mini compost bin under the sink or balcony with kitchen scraps.",
      rural: "Start a compost pile or use animal manure to enrich your garden soil.",
    },
    {
      level: 3,
      title: "Choosing the Right Plants",
      urban: "Focus on compact vegetables or vertical gardens (e.g., tomatoes, peppers).",
      rural: "Consider larger crops, berries, or fruit trees suited to your zone.",
    },
    {
      level: 4,
      title: "Watering & Maintenance",
      urban: "Use self-watering containers or drip irrigation.",
      rural: "Set up rain barrels and plan an irrigation schedule.",
    },
    {
      level: 5,
      title: "Pest Management & Companion Planting",
      urban: "Use natural repellents and companion plants like marigolds.",
      rural: "Encourage beneficial insects, and rotate crops for pest control.",
    },
    {
      level: 6,
      title: "Expanding Your Garden",
      urban: "Try hydroponics or join a community garden.",
      rural: "Increase crop variety or try greenhouse growing.",
    },
    {
      level: 7,
      title: "Sustainable & Regenerative Practices",
      urban: "Implement permaculture in small spaces, seed saving, and compost tea.",
      rural: "Focus on soil regeneration, cover crops, and biodiverse planting.",
    },
  ];

  const currentLevel = levels.find((lvl) => lvl.level === selectedLevel);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Gardening for Everyone</h1>
        <p>
          Gardening connects us with nature, provides fresh and healthy food, and helps support pollinators and biodiversity. Whether you have a large backyard or a small balcony, you can start growing today.
        </p>
      </section>

      {/* Why Garden */}
      <section className="section">
        <h2>Why Start a Garden?</h2>
        <ul>
          <li><strong>Grow your own food</strong> and enjoy fresher, healthier meals.</li>
          <li><strong>Support local ecosystems</strong> by planting native species and flowers that attract pollinators.</li>
          <li><strong>Reduce your environmental footprint</strong> by cutting back on packaging and food transportation.</li>
          <li><strong>Improve mental well-being</strong> through time outdoors and nurturing plants.</li>
          <li><strong>Build stronger communities</strong> with community gardens and shared spaces.</li>
        </ul>
        <p>
          Whether you are just getting started or looking to deepen your gardening knowledge, our step-by-step leveling system will help you grow your skills and your garden.
        </p>
      </section>

      {/* Leveling Up System */}
      <div className="leveling-container">
        <aside className="leveling-sidebar">
          <h2>Gardening Levels</h2>
          <ul className="levels-list">
            {levels.map((lvl) => (
              <li
                key={lvl.level}
                className={`level-tab ${selectedLevel === lvl.level ? 'active' : ''}`}
                onClick={() => setSelectedLevel(lvl.level)}
              >
                <div className="level-tab-header">
                  Level {lvl.level}
                </div>

                {selectedLevel === lvl.level && (
                  <div className="level-tab-content">
                    <h3>{lvl.title}</h3>

                    <div className="tips">
                      <h4>Urban Gardening Tips</h4>
                      <p>{lvl.urban}</p>

                      <h4>Rural Gardening Tips</h4>
                      <p>{lvl.rural}</p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Tips & FAQs */}
      <section className="section">
        <h2>Gardening Tips & FAQs</h2>
        <Accordion
          items={[
            {
              question: 'How do I start gardening if I have no yard?',
              answer:
                'Container gardening is perfect for balconies or windowsills. You can grow herbs, leafy greens, and even tomatoes in pots or vertical planters.',
            },
            {
              question: 'What plants are easiest for beginners?',
              answer:
                'Try herbs like basil and mint, leafy greens like lettuce and spinach, or root vegetables like radishes and carrots. These are low-maintenance and quick to grow.',
            },
            {
              question: 'How often should I water my garden?',
              answer:
                'It depends on the plant and season, but most gardens need watering once or twice a week. Check soil moisture regularly and water deeply rather than frequently.',
            },
            {
              question: 'How can I attract pollinators?',
              answer:
                'Plant native flowers, avoid pesticides, and provide a variety of blooms throughout the growing season to attract bees, butterflies, and birds.',
            },
          ]}
        />
      </section>

      {/* Community Gardens / Get Involved */}
      <section className="section">
        <h2>Join a Community Garden</h2>
        <p>
          If you don’t have space at home, community gardens are a great way to get involved, grow food, and connect with others who share your interest in sustainability and healthy living.
        </p>
        <a
          href="https://www.example.com/community-gardens" // Replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Find a Community Garden Near You
        </a>
      </section>
    </div>
  );
}
