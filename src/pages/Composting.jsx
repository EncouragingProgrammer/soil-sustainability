import { useState } from 'react';
import Accordion from '../components/Accordion';
import '../styles/LevelingSystem.css';

export default function Composting() {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const levels = [
    {
      level: 1,
      title: "Start Separating Your Organic Waste",
      urban: "Begin by collecting fruit and vegetable scraps in a countertop bin or sealed container. If available, use your city's green bin program.",
      rural: "Designate a small area or bin outdoors where you can begin to collect kitchen scraps and yard waste.",
    },
    {
      level: 2,
      title: "Set Up a Composting System",
      urban: "Use a small compost tumbler or bin on a balcony or shared outdoor space. If space is limited, try vermicomposting indoors with a worm bin.",
      rural: "Create a compost pile or bin in your yard. Ensure it's accessible and properly contained to avoid attracting pests.",
    },
    {
      level: 3,
      title: "Balance Greens and Browns",
      urban: "Collect dry paper, cardboard, and leaves to mix with food scraps. Keep the right ratio for odor-free composting.",
      rural: "Use grass clippings, straw, and manure to balance your green materials. Turn the pile regularly to speed up decomposition.",
    },
    {
      level: 4,
      title: "Optimize Compost Conditions",
      urban: "Monitor moisture and add water if the compost is too dry. Turn or shake the bin weekly to aerate the pile.",
      rural: "Ensure your compost stays moist but not soaked. Turn larger piles every 1-2 weeks for optimal decomposition.",
    },
    {
      level: 5,
      title: "Prevent Pests and Odors",
      urban: "Avoid meat, dairy, and oily foods. Cover scraps with browns, and keep the bin sealed. Consider a worm bin for indoor use.",
      rural: "Keep meat and dairy out of your pile. Cover food scraps with hay or leaves to avoid odors and deter animals.",
    },
    {
      level: 6,
      title: "Harvest and Use Your Compost",
      urban: "After several months, sift finished compost and use it for potted plants, balcony gardens, or donate to a community garden.",
      rural: "Use compost to enrich your garden beds, orchards, or crop fields. Apply as mulch or mix into the soil for healthier plants.",
    },
    {
      level: 7,
      title: "Advance to Regenerative Practices",
      urban: "Learn about bokashi composting, compost tea, and other methods to enhance soil health on a small scale.",
      rural: "Integrate regenerative practices like no-till farming, cover cropping, and large-scale composting to build soil health.",
    },
  ];

  const currentLevel = levels.find((lvl) => lvl.level === selectedLevel);

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Composting Guide</h1>
        <p>
          Reduce waste and create healthy soil by composting at home or through community programs!
        </p>
      </section>

      {/* Composting Basics */}
      <section className="section">
        <h2>Why Compost?</h2>
        <p>
          Composting turns food scraps and yard waste into valuable soil nutrients. It reduces landfill waste and cuts greenhouse gases.
        </p>
        <ul>
          <li>Enriches soil, helping retain moisture and suppress plant diseases.</li>
          <li>Reduces methane emissions from landfills.</li>
          <li>Encourages beneficial bacteria and fungi.</li>
        </ul>
      </section>

      {/* What Can and Can't Be Composted */}
      <section className="section">
        <h2>What Can You Compost?</h2>
        <div className="compost-grid">
          <div className="compost-card compost-yes">
            <h3>✅ Compostable Items</h3>
            <ul>
              <li>Fruit & veggie scraps</li>
              <li>Coffee grounds & filters</li>
              <li>Tea bags (non-plastic)</li>
              <li>Eggshells</li>
              <li>Yard clippings & leaves</li>
              <li>Shredded paper & cardboard (no glossy prints)</li>
            </ul>
          </div>
          <div className="compost-card compost-no">
            <h3>🚫 Do NOT Compost</h3>
            <ul>
              <li>Meat or fish scraps</li>
              <li>Dairy products</li>
              <li>Oily or greasy foods</li>
              <li>Pet waste</li>
              <li>Glossy paper or stickers</li>
              <li>Plastic or metals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leveling Up Composting System (Now repositioned here) */}
      <div className="leveling-container">
        <aside className="leveling-sidebar">
          <h2>Composting Levels</h2>
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
                      <h4>Urban Composting Tips</h4>
                      <p>{lvl.urban}</p>

                      <h4>Rural Composting Tips</h4>
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
        <h2>Composting Tips & FAQs</h2>
        <Accordion
          items={[
            {
              question: 'How do I prevent pests?',
              answer:
                'Avoid adding meat, dairy, or oily foods. Cover food scraps with dry leaves or shredded paper and keep your compost bin closed.',
            },
            {
              question: 'How often should I turn my compost?',
              answer:
                'Turn your pile every 1-2 weeks to keep it aerated. More frequent turning speeds up decomposition.',
            },
            {
              question: 'What’s the right balance of materials?',
              answer:
                'Aim for 2 parts “browns” (dry leaves, paper) to 1 part “greens” (food scraps, grass clippings).',
            },
          ]}
        />
      </section>

      {/* Green Bin Info */}
      <section className="section">
        <h2>Green Bin Programs</h2>
        <p>
          Many cities offer green bin collection programs for organic waste. Check your local guidelines to know what’s accepted!
        </p>
        <a
          href="https://www.example.com/green-bin-guide" // Replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Find Your Local Program
        </a>
      </section>
    </div>
  );
}
