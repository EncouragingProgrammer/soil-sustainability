import { useState } from 'react';
import Accordion from '../components/Accordion';
import '../styles/LevelingSystem.css';
import '../styles/App.css';

// Gardening images
import compost from '../assets/compost.png'
import garden from '../assets/garden.png'
import pest from '../assets/pest.png';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';
import regen from '../assets/regen.png';
import seed from '../assets/seed.png';
import water from '../assets/water.png'

export default function Gardening() {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const levels = [
    {
      level: 1,
      title: "Level 1: Plant Your First Seed",
      objective: "Take your first step into gardening by planting something simple and watching it grow.",
      urban: "Find a small container or windowsill pot. Choose an easy herb like basil or mint. Fill the pot with soil, plant the seeds, water gently, and place it in a sunny spot. Track its progress each day.",
      rural: "Choose a small garden bed or use a raised box. Plant fast-growing vegetables like lettuce or radishes. Prepare the soil, plant the seeds, water regularly, and observe the changes each morning.",
      reward: "Experience the excitement of new growth and gain confidence to expand your garden.",
      image: seed
    },
    {
      level: 2,
      title: "Level 2: Build Healthy Soil & Start Composting",
      objective: "Improve your soil's health by composting and learning the basics of soil preparation.",
      urban: "Start a mini compost bin on your balcony or under your sink. Add kitchen scraps like fruit peels, coffee grounds, and dry leaves. Turn it weekly to speed up decomposition.",
      rural: "Start an outdoor compost pile or bin. Add grass clippings, dry leaves, vegetable scraps, and, if possible, well-rotted manure. Turn the pile every couple of weeks.",
      reward: "Create rich compost to feed your garden and reduce waste at the same time.",
      image: compost
    },
    {
      level: 3,
      title: "Level 3: Select the Right Plants",
      objective: "Choose plants that thrive in your growing zone and fit your garden space.",
      urban: "Research your hardiness zone. Pick compact vegetables like cherry tomatoes or peppers that can grow in containers or vertical gardens.",
      rural: "Identify your growing zone and choose crops suited to your local climate. Try planting berries, fruit trees, or heirloom vegetables for diversity.",
      reward: "A well-planned garden with plants that thrive in your space and climate.",
      image: plant1
    },
    {
      level: 4,
      title: "Level 4: Master Watering & Maintenance",
      objective: "Learn how to water your plants effectively and maintain your garden’s health.",
      urban: "Set a watering schedule for your containers. Use self-watering pots or drip irrigation if possible. Check soil moisture daily.",
      rural: "Install rain barrels to collect water. Water plants in the early morning or evening. Mulch garden beds to retain moisture and suppress weeds.",
      reward: "Consistently healthy plants with strong roots and reduced water waste.",
      image: water
    },
    {
      level: 5,
      title: "Level 5: Defend Your Garden with Companion Planting & Pest Control",
      objective: "Protect your garden naturally by attracting beneficial insects and planting allies.",
      urban: "Plant marigolds or basil near your vegetables to repel pests. Use neem oil or homemade garlic spray for minor infestations.",
      rural: "Encourage beneficial insects like ladybugs by planting pollinator-friendly flowers. Rotate crops each season and use row covers for protection.",
      reward: "A resilient garden with fewer pests and a balanced ecosystem.",
      image: pest
    },
    {
      level: 6,
      title: "Level 6: Expand Your Garden’s Potential",
      objective: "Increase the size and variety of your garden using more advanced techniques.",
      urban: "Try growing in new ways: vertical gardens, hydroponics, or join a local community garden. Experiment with different herbs or leafy greens.",
      rural: "Expand your plot or add new beds. Explore greenhouse growing to extend your season. Experiment with heritage or specialty crops.",
      reward: "Greater harvests, increased diversity, and more self-sufficiency in your gardening.",
      image: garden
    },
    {
      level: 7,
      title: "Level 7: Regenerative & Sustainable Gardening",
      objective: "Adopt sustainable practices to create a self-sustaining and regenerative garden.",
      urban: "Apply permaculture principles in small spaces. Save seeds from your healthiest plants. Make and use compost tea to feed your garden.",
      rural: "Plant cover crops to enrich your soil. Focus on crop rotation, seed saving, and diversifying your planting to support local wildlife and soil health.",
      reward: "A regenerative garden that nurtures both the earth and your community for years to come.",
      image: regen
    }
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

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >

          <div style={{ maxWidth: '600px', textAlign: 'left' }}>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Grow your own food</strong> and enjoy fresher, healthier meals.</li>
              <li><strong>Support local ecosystems</strong> by planting native species and flowers that attract pollinators.</li>
              <li><strong>Reduce your environmental footprint</strong> by cutting back on packaging and food transportation.</li>
              <li><strong>Improve mental well-being</strong> through time outdoors and nurturing plants.</li>
              <li><strong>Build stronger communities</strong> with community gardens and shared spaces.</li>
            </ul>

            <p>
              Whether you are just getting started or looking to deepen your gardening knowledge, our step-by-step leveling system will help you grow your skills and your garden.
            </p>
          </div>

          <img
            src={plant2}
            alt="Beautiful plant illustration"
            style={{
              width: '250px',
              height: 'auto',
              borderRadius: '12px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
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
                  <div
                    className={`level-tab-content ${lvl.level % 2 === 0 ? 'level-content-row-reverse' : 'level-content-row'}`}
                  >
                    {/* Text Content */}
                    <div className="level-text">
                      <h3>{lvl.title}</h3>

                      <p className="mt-2"><strong>Objective:</strong> {lvl.objective}</p>

                      <div className="tips mt-4">
                        <h4>Urban Action</h4>
                        <p>{lvl.urban}</p>

                        <h4 className="mt-3">Rural Action</h4>
                        <p>{lvl.rural}</p>
                      </div>

                      <p className="mt-4"><strong>Reward:</strong> {lvl.reward}</p>
                    </div>

                    {/* Image */}
                    <div className="level-image">
                      <img
                        src={lvl.image}
                        alt={`Level ${lvl.level} Illustration`}
                      />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* Tips*/}
      <section className="section">
        <h2>Gardening Tips</h2>
        <p className="section-description">
          Explore common gardening questions and tips to help you get started or grow your skills!
        </p>

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
        <p>
          Find a Community Garden Near You!
        </p>
      </section>
    </div>
  );
}
