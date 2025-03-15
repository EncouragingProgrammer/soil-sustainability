import Accordion from '../components/Accordion';

export default function CompostingGuide() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-4">Composting Guide</h1>
        <p className="text-lg text-gray-600">
          Reduce waste and create healthy soil by composting at home or through community programs!
        </p>
      </section>

      {/* Composting Basics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why Compost?</h2>
        <p className="text-gray-700 mb-2">
          Composting turns food scraps and yard waste into valuable soil nutrients. It reduces landfill waste and cuts greenhouse gases.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Enriches soil, helping retain moisture and suppress plant diseases.</li>
          <li>Reduces methane emissions from landfills.</li>
          <li>Encourages beneficial bacteria and fungi.</li>
        </ul>
      </section>

      {/* What Can and Can't Be Composted */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What Can You Compost?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-green-600 rounded-xl p-4">
            <h3 className="text-green-700 font-bold mb-2">✅ Compostable Items</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Fruit & veggie scraps</li>
              <li>Coffee grounds & filters</li>
              <li>Tea bags (non-plastic)</li>
              <li>Eggshells</li>
              <li>Yard clippings & leaves</li>
              <li>Shredded paper & cardboard (no glossy prints)</li>
            </ul>
          </div>
          <div className="border border-red-600 rounded-xl p-4">
            <h3 className="text-red-700 font-bold mb-2">🚫 Do NOT Compost</h3>
            <ul className="list-disc list-inside text-gray-700">
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

      {/* Tips & FAQs */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Composting Tips & FAQs</h2>
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
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Green Bin Programs</h2>
        <p className="text-gray-700 mb-2">
          Many cities offer green bin collection programs for organic waste. Check your local guidelines to know what’s accepted!
        </p>
        <a
          href="https://www.example.com/green-bin-guide" // Replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          Find Your Local Program
        </a>
      </section>
    </div>
  );
}
