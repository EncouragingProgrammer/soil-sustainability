import '../styles/Resources.css';

export default function Resources() {
  return (
    <div className="container">
      <h1>Resources</h1>
      <p>Welcome to the Resources page!</p>
      <p>
        Here you'll find useful links, toolkits, and partner programs to support
        your soil sustainability journey.
      </p>

      {/* Information Section */}
      <section className="section">
        <h2>Information</h2>
        <div className="resource-buttons">
          <a href="https://drearth.com/resources/article/the-16-nutrients-plants-must-have/">
            The 16 Nutrients Plants Must Have
          </a>
          <a href="https://florissa.com/canadian-plant-hardiness-map/">
            Canadian Plant Hardiness Map by Zones
          </a>
          <a href="https://www.almanac.com/plant-ph#">
            Optimum Soil pH Levels
          </a>
          <a href="https://blog.firsttunnels.co.uk/acid-loving-plants/">
            Acid Loving Plants
          </a>
          <a href="https://www.hamiltonswcd.org/vegetablesforalkalinesoils.html">
            Vegetables for Alkaline Soils
          </a>
          <a href="https://www.nrdc.org/stories/composting-101">
            Composting 101 (NRDC)
          </a>
          <a href="https://www.metabolic.nl/news/regenerative-agriculture-farming-in-natures-form/?gad_source=1&gclid=Cj0KCQjwytS-BhCKARIsAMGJyzry_8e16NLLtvfOuEmseZF4lAR_GbLBZMXv9IiRBTZPPif18yFH6FoaAnzHEALw_wcB">
            Regenerative Agriculture: Farming in Nature’s Form
          </a>
          <a href="https://davidsuzuki.org/living-green/gardening-tips-for-beginners/?gad_source=1&gclid=Cj0KCQjwytS-BhCKARIsAMGJyzrbRpxM455psN3r6HrWDHC2wdC_4pUraFZ9SY_8IEr6GPlsYHTaVzYaAnjkEALw_wcB">
            Gardening Tips for Beginners (David Suzuki Foundation)
          </a>
        </div>
      </section>

      {/* Images Section */}
      <section className="section">
        <h2>Images & Maps</h2>
        <div className="resource-buttons">
          <a href="https://planthardiness.gc.ca/?m=1">
            Canada's Plant Hardiness Site
          </a>
          <a href="https://soiltesting.cahnr.uconn.edu/soil-ph-and-management-suggestions/">
            Soil pH and Management
          </a>
          <a href="https://www.pwcva.gov/news/fall-composting-champion-combating-climate-change">
            Fall Composting – A Champion Combating Climate Change
          </a>
          <a href="https://agriculture.borax.com/blog/april-2021/happy-soil-happy-earth-day">
            Happy Soil for a Happy Earth Day
          </a>
          <a href="https://www.flaticon.com/free-icon/">
            Free Icons at Flaticon
          </a>
        </div>
      </section>

      {/* Acknowledgement */}
      <section className="section acknowledgement">
        <h2>Acknowledgements</h2>
        <p>
          This project was developed with assistance from ChatGPT for early templating, troubleshooting, and image generation.
        </p>
      </section>
    </div>
  );
}
