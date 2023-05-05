import './DataPage.css';
import prop from "../../alloysProperty.json"

function DataPage() {

  const headings = [
    "Сплав", 
    <span>Т<sub>с</sub>, К</span>, 
    <span>Т<sub>л</sub>, К</span>, 
    <span>Q, кДж/кг</span>, 
    <span>Q<sub>еф</sub>, кДж/кг</span>, 
    <span>&#961;<sub>т</sub>, кг/м<sup>3</sup></span>, 
    <span>&#961;<sub>p</sub>, кг/м<sup>3</sup></span>,
    <span>C<sub>т</sub>, Дж/(кг*К)</span>, 
    <span>C<sub>p</sub>, Дж/(кг*К)</span>, 
    <span>&#955;<sub>т</sub>, Вт/(м*К)</span>, 
    <span>&#955;<sub>p</sub>, Вт/(м*К)</span>, 
    <span>b<sub>т</sub>, Вт*с<sup>1/2</sup>/(м<sup>2</sup>*К)</span>, 
    <span>b<sub>p</sub>, Вт*с<sup>1/2</sup>/(м<sup>2</sup>*К)</span>, 
    <span>a<sub>т</sub>, м<sup>2</sup>/c</span>, 
    <span>a<sub>p</sub>, м<sup>2</sup>/c</span>
  ];

  return (
    <main className="data-page">
        <section className='section'>
            <h2>Теплофізичні властивості ливарних сплавів у рідкому і твердому станах</h2>
            <table id='referenceData'>
              <thead>
                <tr>
                  {headings.map((item, num) => <td className='vertical' key={num}>{item}</td>)}
                </tr>
              </thead>
              <tbody>
                {prop.map((alloy, index) => <tr key={index}>
                  <td>{alloy.name}</td>
                  <td>{alloy.solidusTemperature}</td>
                  <td>{alloy.liquidusTemperature}</td>
                  <td>{alloy.Q}</td>
                  <td>{alloy.effectiveQ}</td>
                  <td>{alloy.solidDensity}</td>
                  <td>{alloy.liquidDensity}</td>
                  <td>{alloy.solidHeatCapacity}</td>
                  <td>{alloy.liquidHeatCapacity}</td>
                  <td>{alloy.solidThermalConductivity}</td>
                  <td>{alloy.liquidThermalConductivity}</td>
                  <td>{alloy.solidHeatAccumulatingCapacity}</td>
                  <td>{alloy.liquidHeatAccumulatingCapacity}</td>
                  <td>{alloy.solidTemperatureConductivity}</td>
                  <td>{alloy.liquidTemperatureConductivity}</td>
                </tr>)}
              </tbody>
            </table>
        </section>
    </main>
  );
}

export default DataPage;