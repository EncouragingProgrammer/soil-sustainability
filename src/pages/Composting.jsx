import { useState } from 'react';
import Accordion from '../components/Accordion';
import '../styles/LevelingSystem.css';
import '../styles/App.css';

// Composting images
import compost1 from '../assets/compost1.png';
import compost2 from '../assets/compost2.png';
import compost3 from '../assets/compost3.webp';
import compost4 from '../assets/compost.png';
import compost5 from '../assets/compost5.jpeg';
import compost6 from '../assets/compost6.jpeg';
import compost7 from '../assets/compost7.png';


export default function Composting() {
  const [selectedLevel, setSelectedLevel] = useState(1);

  const levels = [
    {
      level: 1,
      title: "Level 1: Start Separating Your Organic Waste",
      objective: "Take the first step by collecting your kitchen scraps and yard waste.",
      urban: "Collect fruit and vegetable scraps in a countertop bin or sealed container. Use your city's green bin program if available.",
      rural: "Designate a bin outdoors for kitchen scraps and yard waste collection.",
      reward: "Develop the habit of separating organic waste from garbage.",
      image: compost1
    },
    {
      level: 2,
      title: "Level 2: Set Up a Composting System",
      objective: "Create a system to compost your collected organic waste.",
      urban: "Use a small compost tumbler on your balcony or vermicomposting indoors.",
      rural: "Create an outdoor compost pile or bin, ensuring it’s well-contained.",
      reward: "Start producing your own compost to reduce landfill waste.",
      image: compost2
    },
    {
      level: 3,
      title: "Level 3: Balance Greens and Browns",
      objective: "Achieve the right balance for healthy composting.",
      urban: "Mix food scraps (greens) with dry paper or leaves (browns). Keep the ratio balanced to avoid odors.",
      rural: "Use grass clippings and dry leaves in combination with kitchen scraps. Turn your pile regularly.",
      reward: "Create nutrient-rich compost with the perfect green/brown balance.",
      image: compost3
    },
    {
      level: 4,
      title: "Level 4: Optimize Compost Conditions",
      objective: "Monitor moisture, temperature, and aeration for optimal decomposition.",
      urban: "Check moisture weekly and turn/shake your bin to aerate the compost.",
      rural: "Ensure moisture levels are right. Turn the pile every 1-2 weeks to speed up the process.",
      reward: "Accelerate composting and produce high-quality compost.",
      image: compost4
    },
    {
      level: 5,
      title: "Level 5: Prevent Pests and Odors",
      objective: "Learn how to manage pests and control odors naturally.",
      urban: "Avoid composting meat and dairy. Keep the bin sealed and cover scraps with browns.",
      rural: "Cover food scraps with hay or leaves. Keep meat/dairy out and deter animals.",
      reward: "Maintain a clean, pest-free composting system.",
      image: compost5
    },
    {
      level: 6,
      title: "Level 6: Harvest and Use Your Compost",
      objective: "Learn when and how to harvest finished compost for your plants.",
      urban: "Sift compost and use it for potted plants, balcony gardens, or donate it to a community garden.",
      rural: "Spread compost in your garden beds, orchards, or crop fields.",
      reward: "Boost soil health and plant productivity with finished compost.",
      image: compost6
    },
    {
      level: 7,
      title: "Level 7: Advance to Regenerative Practices",
      objective: "Adopt advanced composting techniques and regenerative agriculture methods.",
      urban: "Learn about bokashi composting, compost tea, and worm castings for soil enhancement.",
      rural: "Integrate large-scale composting, no-till farming, and cover cropping.",
      reward: "Achieve sustainable soil health and zero-waste gardening.",
      image: compost7
    }
  ];
  

  const currentLevel = levels.find((lvl) => lvl.level === selectedLevel);

  return (
    <div className="container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Composting for a Healthier Planet</h1>
        <p>
          Composting reduces waste, enriches soil, and lowers your environmental footprint. Start small or go big—every step counts!
        </p>
      </section>

      {/* Why Compost */}
      <section className="section">
        <h2>Why Start Composting?</h2>

        <div className="section-content">
            <ul>
              <li><strong>Reduce waste</strong> by keeping organics out of landfills.</li>
              <li><strong>Lower greenhouse gases</strong> by preventing methane emissions.</li>
              <li><strong>Enrich soil</strong> with natural compost instead of synthetic fertilizers.</li>
              <li><strong>Support healthy ecosystems</strong> by returning nutrients to the earth.</li>
            </ul>

            <p>
              Whether you're composting on a balcony or a farm, our leveling system helps you build composting skills step-by-step.
            </p>
        </div>
      </section>

      {/* Leveling Up Composting */}
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
                  <div
                    className={`level-tab-content ${lvl.level % 2 === 0 ? 'level-content-row-reverse' : 'level-content-row'}`}
                  >
                    <div className="level-text">
                      <h3>{lvl.title}</h3>

                      <p><strong>Objective:</strong> {lvl.objective}</p>

                      <div className="tips mt-4">
                        <h4>Urban Action</h4>
                        <p>{lvl.urban}</p>

                        <h4>Rural Action</h4>
                        <p>{lvl.rural}</p>
                      </div>

                      <p><strong>Reward:</strong> {lvl.reward}</p>
                    </div>

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

      {/* Tips & FAQs */}
      <section className="section">
        <h2>Composting Tips & FAQs</h2>
        <p className="section-description">
          Explore common composting questions to help you build healthy soil and reduce waste.
        </p>

        <Accordion
          items={[
            {
              question: 'How do I prevent pests?',
              answer: 'Avoid adding meat, dairy, or oily foods. Cover food scraps with browns like leaves or shredded paper and keep your compost bin sealed.',
            },
            {
              question: 'How often should I turn my compost?',
              answer: 'Turn your pile every 1-2 weeks to aerate it. This speeds up decomposition and prevents odors.',
            },
            {
              question: 'What’s the right balance of greens and browns?',
              answer: 'Aim for two parts browns (carbon-rich materials like dry leaves) to one part greens (nitrogen-rich materials like food scraps).',
            },
          ]}
        />
      </section>

      {/* Green Bin Programs */}
      <section className="section">
        <h2>Green Bin Programs</h2>
        <p>
          Many cities offer green bin collection programs for organic waste. These programs help divert waste from landfills and create community compost. Check your local guidelines!
        </p>
      </section>
    </div>
  );
}