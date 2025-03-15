export default function GrowingZoneFinder() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to Growing Zone Finder</h1>
      <p className="mt-4">
        <b>Canadian Growth Zones</b>
        <br></br>
        <img src="../images/Picture1.png" alt="Growing Zones"></img>
      </p>
      <table>
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
            <td>below -46</td>
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

      {/* chemical info */}
      <h2>
        <b>Major Chemicals</b>
      </h2>
      <p>
        <b>Nitrogen:</b> produce amino acids, building blocks for proteins/DNA,
        plant cell division and plant growth, photosynthesis and vitamins,
        production and use of carbs.
        <br></br>
        Deficiency's will cause thin stems general yellowing and slowed growth.
        <br></br>
        Products of too much nitrogen are imbalance in metabolism produce can be
        delayed, ripening unevenly all in all less fruit.
        <br></br>
        <br></br>
        <b>Phosphorus:</b> plant development genetic material, cell membranes,
        root development, seed number and size. Involved in photosynthesis,
        respiration, energy storage and transfer, cell division and enlargement.
        Promotes early root formation.
        <br></br>
        Deficiency's causes purple leaves starting under the leaves halted roots
        slow growth and poor production.
        <br></br>
        <br></br>
        <b>Potassium:</b> increases photosynthesis and water-use efficiency.
        Important to protein synthesis and important to fruit formation
        activates enzymes and controls there reaction rates improves winter
        hardiness.
        <br></br>
        Deficiency's will cause flabby stems halted growth increased
        vulnerability to disease An excess will lead to deficiency in other
        nutrients.
      </p>

      {/* chemical info */}
      <h2>
        <b>Secondary Chemicals</b>
      </h2>
      <p>
        <b>Calcium</b>: required for enzyme activation. Causes nitrogen to
        absorb quicker. Helps with constant cell division.
        <br></br>
        Deficiency's include curled leaves causes call membranes to disintegrate
        making thin cell walls.
        <br></br>
        <br></br>
        <b>Magnesium</b>: needed to produce chlorophyll that will put the green
        in plants. Enzyme activation. Improves utilization of phosphorus
        increases iron utilization.
        <br></br>
        Deficiency's cause yellow in in lower leaves and can produce a lower
        crop yield.
        <br></br>
        <br></br>
        <b>Sulphur</b>: need to make proteins and contributes to the development
        of multiple enzymes and vitamins.
        <br></br>
        Deficiency's causes yellowing in younger leaves.
      </p>

      <h2>
        <b>Minor Chemicals</b>
      </h2>
      <p>
        <b>Iron</b>: iron is important for nitrogen fixation and the production
        of chlorophyll.
        <br></br>
        Deficiencies are more common in alkaline soil and will cause the plant
        to go yellow as well as causes skinny stems.
        <br></br>
        <br></br>
        <b>Manganese</b>: needed for the creation of chlorophyll and assists in
        vitamin, carbohydrate, and nitrogen metabolism.
        <br></br>
        Deficiencies are caused because the soil is more alkaline.
        <br></br>
        <br></br>
        <b>Zinc</b>: important component in enzyme systems. Needed to produce
        plant hormones. Greatly increases the yield of grain and seeds.
        <br></br>
        Deficiencies will cause yellowing, the mottling of leaves and show
        delayed maturity.
        <br></br>
        <br></br>
        <b>Copper</b>: helps the roots as well as helping with the use of
        proteins. Is important the reproduction of plants.
        <br></br>
        Deficiencies may cause slightly stunted growth.
        <br></br>
        <br></br>
        <b>Boron</b>: this chemical will help significantly with the growing of
        tissue. It is stored in the cell membrane. Needed for nitrogen fixation,
        protein synthesis, starch and sugar transport, root growth, water uptake
        and transport.
        <br></br>
        Deficiency more likely in alkaline soils. May lead to growing points
        dying and cell disruption.
        <br></br>
        <br></br>
        <b>Molybdenum</b>: this chemical will help with the nitrogen metabolism
        and protein synthesis
        <br></br>
        Deficiencies are caused by too many acids in the soil
        <br></br>
        <br></br>
        <b>Chloride</b>: Most soils have enough chloride for adequate plant
        nutrition.
        <br></br>
        However, chloride deficiencies are reported in sandy soils in high
        rainfall areas or those derived from low-chloride parent materials.
      </p>

      <h2>PH Levels</h2>

      <p>
        ph is an important part of farming it has a big influence on how your
        crops gain the chemicals required to grow depending on if the soil is
        alkaline or acidic
        <br></br>
        <br></br>
        <img src="Picture2.jpg" alt="Growing Zones"></img>
        <br></br>
        <br></br>
        For most plants you will want want to have a PH level between 6.0 to
        7.0.
        <br></br>
        Althougth for some plants like blueberrys and rasberry will grow better
        in slightly more acitc soil.
        <br></br>
        On the other side of things some plants like beans and kale will grow
        better in more alkaline soil.
      </p>
    </div>
  );
}
