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

  const headingsMixtures = [
    "Матеріал виливка",
    <span>&#961;<sub>ф</sub>, кг/м<sup>3</sup></span>, 
    <span>C<sub>ф</sub>, Дж/(кг*К)</span>,
    <span>b<sub>ф</sub>, Вт*с<sup>1/2</sup>/(м<sup>2</sup>*К)</span>
  ]  

  return (
    <main className="data-page">
      <section className='theory section'>
        <h2>Метод Г.Ф. Баландіна для лиття в піщану форму</h2>
        <p>Для визначення часу твердіння виливків (у секундах) в піщаній формі професор Г.Ф. Баландін запропонував таку формулу:</p>
        <div className='image'>
          <img src={require("../../assets/images/formula.jpg")} alt="formula Balandina"/>
        </div>
        <p className='text'>
          <span>де <b>R<sub>зв</sub></b> - зведена товщина виливка, м;</span>
          <span><b>Q<sub>еф</sub></b> - ефективна теплота кристалізації сплаву, яка враховує виділення акумулювальної теплоти зі зниженням температури сплаву під час кристалізації в інтервалі температур, Дж/кг (розрахункові значення Q<sub>зв</sub> деяких ливарних сплавів наведено в таблиці);</span>
          <span><b>&#961;<sub>т-р</sub></b> - густина сплаву, кг/м<sup>3</sup>, у твердо-рідкому стані під час його охолодження в інтервалі кристалізації (знаходять як середнє значення між &#961;<sub>т</sub> і &#961;<sub>р</sub>);</span>
          <span><b>&#961;<sub>т</sub></b>, <b>&#961;<sub>р</sub></b> - густина сплаву відповідно в твердому і рідкому стані, кг/м<sup>3</sup> (див. табл. 6.3);</span>
          <span><b>C<sub>p</sub></b> - теплоємність сплаву в рідкому стану, Дж/(кг*К), (див. табл. 6.3);</span>
          <span><b>T<sub>зал</sub></b>, <b>T<sub>л</sub></b>, <b>T<sub>ф</sub></b> - температури заливання сплаву, ліквідусу сплаву, форми, К;</span>
          <span><b>b<sub>ф</sub></b> - теплоакулюмувальна здатність форми Вт*с<sup>1/2</sup>/(м<sup>2</sup>*К);</span>
          <span><b>&#956;</b> - коефіцієнт, який враховує конфігурацію виливка.</span><br />
          <span>Якщо виливок має конфігурацію плити, то &#956; = 1. Для циліндричних виливків та виливків у формі кулі &#956; розраховують за формулою:</span>
        </p>
        <div className='image formulas'>
          <img src={require("../../assets/images/formulas.jpg")} alt="formulas Balandina"/>
        </div>
        <p className='text' id='secondText'>
          <span>де <b>k</b> = 1 для циліндра, <b>k</b> = 2 для кулі;</span>
          <span><b>С<sub>ф</sub></b> - теплоємність форми, Дж/(кг*К);</span>
          <span><b>C<sub>т</sub></b> і <b>C<sub>р</sub></b> - теплоємність сплаву відповідно в твердому і рідкому стані, Дж/(кг*К);</span>
          <span><b>&#961;<sub>т</sub></b> і <b>&#961;<sub>р</sub></b> - густина сплаву відповідно в твердому і рідкому стані, кг/м<sup>3</sup>;</span>
          <span><b>&#961;<sub>ф</sub></b> - густина форми, кг/м<sup>3</sup>;</span>
          <span><b>Т<sub>с</sub></b> - температура солідусу сплаву, К.</span><br />
          <span>Для визначення часу охолодження у формі (у секундах) уже затверділого виливка до температури вибивання Т<sub>в</sub> Баландін Г.Ф. запропонував такі формули:</span>
        </p>
        <div className='image formulas'>
          <img src={require("../../assets/images/formulas3.jpg")} alt="formulas Balandina"/>
        </div>
        <p className='text' id='thirdText'>
          <span>де <b>T<sub>в</sub></b> - температура виливка при вибиванні, K;</span>
          <span><b>n</b> - показник ступеня параболи, якою описується температурне поле у формі; n = 2...3 (найчастіше має значення 2.75).</span>
        </p>
      </section>
      <section className='section'>
        <h2>Теплофізичні властивості піщано-глинястих формувальних матеріалів</h2>
        <table id='referenceData'>
          <thead>
            <tr>
              {headingsMixtures.map((item, num) => <td className='vertical' key={num}>{item}</td>)}
            </tr>
          </thead>
          <tbody>
            {prop.map((alloy, index) => <tr key={index}>
              <td>{alloy.name}</td>
              <td>{alloy.mouldDensity}</td>
              <td>{alloy.mouldHeatCapasity}</td>
              <td>{alloy.mouldHeatAccumulatingCapacity}</td>
            </tr>)}
          </tbody>
        </table>
        <h2>Теплофізичні властивості ливарних сплавів у рідкому і твердому станах</h2>
        <div className='big-table'>
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
        </div>
      </section>
    </main>
  );
}

export default DataPage;