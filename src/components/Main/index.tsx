import { useState } from 'react';
import './Main.css';

import alloys from "../../alloysProperty.json";

const Main = () => {

    let initialForm = {
        coolingTemp: "",
        castingСonfig: 0,
        forCompoundRadius: "",
        alloy: 0,
        pouringTemp: "",
        mouldTemp: 293
    }

    const [formData, setFormData] = useState(initialForm);

    const [result, setResult] = useState({
        miu: "",
        hardeningTimeSeconds: "",
        coolingTimeSeconds: ""
    });

    const [showResult, setShowResult] = useState(false);

    interface Alloy {
        id: number,
        name: string,
        liquidusTemperature: number,
        solidusTemperature: number,
        Q: number,
        effectiveQ: number,
        solidDensity: number,
        liquidDensity: number,
        mouldDensity: number,
        solidHeatCapacity: number,
        liquidHeatCapacity: number,
        mouldHeatCapasity: number,
        solidThermalConductivity: number,
        liquidThermalConductivity: number,
        solidHeatAccumulatingCapacity: number,
        liquidHeatAccumulatingCapacity: number,
        mouldHeatAccumulatingCapacity: number,
        solidTemperatureConductivity: number,
        liquidTemperatureConductivity: number
    }
    
    const handleValue = (e: any) : void => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const handleResult = () => {
        setShowResult(true);
    }

    const calculateHardeningAndCoolingTime = (e: any) => {
        e.preventDefault();
        let alloy = alloys.find(item => item.id === +formData.alloy);
        
        if (alloy) {
            let solidLiquidDestiny = (alloy.solidDensity + alloy.liquidDensity) / 2;
            let miu = formData.castingСonfig < 1 ? 1 : calculateMiu(alloy, solidLiquidDestiny);
            let compoundRadius = formData.castingСonfig > 2 ? +formData.forCompoundRadius / 3 :  +formData.forCompoundRadius / 2;
            let hardeningTime = miu * Math.pow((compoundRadius * (alloy.effectiveQ * 1000 * solidLiquidDestiny + alloy.liquidHeatCapacity * alloy.liquidDensity * ((+formData.pouringTemp - alloy.liquidusTemperature)/(+formData.pouringTemp - +formData.mouldTemp))*(alloy.liquidusTemperature - +formData.mouldTemp)))/(1.128 * alloy.mouldHeatAccumulatingCapacity * (alloy.liquidusTemperature - +formData.mouldTemp)), 2);
            let D = ((alloy.liquidusTemperature - +formData.mouldTemp)/(alloy.solidusTemperature - +formData.mouldTemp)) * (((alloy.liquidHeatCapacity * alloy.liquidDensity)/(alloy.solidHeatCapacity * alloy.solidDensity)) * (((+formData.pouringTemp - +formData.mouldTemp)/(alloy.solidusTemperature - +formData.mouldTemp)) - 1) + ((alloy.effectiveQ * 1000 * solidLiquidDestiny)/((alloy.solidHeatCapacity * (alloy.liquidusTemperature - +formData.mouldTemp) * alloy.solidDensity))))
            let coolingTime = 2 * Math.pow((alloy.solidHeatCapacity * alloy.solidDensity * compoundRadius)/(Math.sqrt(2 * 2.75 / 3.75) * alloy.mouldHeatAccumulatingCapacity), 2) * (((((alloy.solidusTemperature - +formData.mouldTemp)/(+formData.coolingTemp - +formData.mouldTemp)) - 1) * (1 + D)) + Math.log((+formData.coolingTemp - +formData.mouldTemp)/(alloy.solidusTemperature - +formData.mouldTemp)));
            setResult({
                miu: miu,
                hardeningTimeSeconds: hardeningTime.toFixed(0),
                coolingTimeSeconds: coolingTime.toFixed(0)
            });
            handleResult();
        } 
    }

    const calculateMiu = (alloy: Alloy, solidLiquidDestiny: number): any => {
        let Kb = alloy.mouldHeatAccumulatingCapacity / alloy.solidHeatAccumulatingCapacity;
        if (Kb >= 0.1) {
            return 1;
        } else {
            let k = +formData.castingСonfig;
            let B1 = ((Math.PI * k) / (4 * k + 4)) * ((alloy.solidHeatCapacity * alloy.solidDensity) / (alloy.mouldHeatCapasity * alloy.mouldDensity));
            let B2 = (alloy.effectiveQ * 1000 * solidLiquidDestiny)/((alloy.solidHeatCapacity * (alloy.liquidusTemperature - +formData.mouldTemp) * alloy.solidDensity));
            let B3 = (((alloy.liquidHeatCapacity * alloy.liquidDensity)/(alloy.solidHeatCapacity * alloy.solidDensity))*(1 - (alloy.liquidusTemperature - +formData.mouldTemp)/(alloy.solidusTemperature - +formData.mouldTemp)))
            let B = B1 * ( B2 + B3);
            let mui = Math.pow((1 / B) * (Math.sqrt(1 + (2 * B)) - 1), 2);
            return mui.toFixed(2);
        }
    }

    return (
        <main className="main">
            <form onSubmit={calculateHardeningAndCoolingTime} className='form'>
                <h1>Визначення часу твердіння виливків за методом Баландіна для лиття в піщану форму</h1>

                <h4><label htmlFor='coolingTemp'>Кінцева температура охолодження, K<span className='star'>*</span></label></h4>
                <input 
                    type="number" 
                    name="coolingTemp" 
                    id="coolingTemp" 
                    placeholder='Введіть кінцеву температуру охолодження у Кельвінах' 
                    onChange={handleValue}
                    value={formData.coolingTemp}
                    min={300} 
                    required
                />

                <h4><label htmlFor='castingСonfig'>Конфігурація виливка</label></h4>
                <select 
                    id='castingСonfig' 
                    value={formData.castingСonfig}
                    onChange={handleValue}
                >
                    <option value={0}>Плита</option>
                    <option value={1}>Суцільний циліндр</option>
                    <option value={3}>Куля</option>
                </select>

                <h4><label htmlFor='forCompoundRadius'>
                    {formData.castingСonfig > 0 ? "Введіть радіус": "Товщина плити"}, м<span className='star'>*</span></label></h4>
                <input 
                    type="number" 
                    name="forCompoundRadius" 
                    id="forCompoundRadius" 
                    placeholder='Введіть число у метрах'
                    onChange={handleValue} 
                    value={formData.forCompoundRadius} 
                    required
                />

                <h4><label htmlFor="alloy">Виберіть сплав, який використовується </label></h4>
                <select 
                    id='alloy' 
                    value={formData.alloy}
                    onChange={handleValue}
                >
                    <option value="0">Сталь з 0,3% С</option>
                    <option value="1">Чавун з 3,8% С</option>
                    <option value="2">Латунь з 10% Zn</option>
                    <option value="3">Бронза з 10% Sn</option>
                    <option value="4">Силумін з 13% Si</option>
                    <option value="5">Al-Cu сплав</option>
                    <option value="6">МЛ3</option>
                    <option value="7">Х20Н80</option>
                    <option value="8">ВТ5Л</option>
                    <option value="9">Zn-Al сплав</option>
                </select>

                <h4><label htmlFor='pouringTemp'>Температура сплаву, K<span className='star'>*</span></label></h4>
                <input 
                    type="number" 
                    name="pouringTemp" 
                    id="pouringTemp" 
                    placeholder='Введіть температуру заливання у Кельвінах' 
                    onChange={handleValue}
                    value={formData.pouringTemp}
                    min={+formData.coolingTemp}  
                    required
                />

                <h4><label htmlFor='mouldTemp'>Температура форми, K<span className='star'>*</span></label></h4>
                <input 
                    type="number" 
                    name="mouldTemp" 
                    id="mouldTemp" 
                    placeholder='Введіть температуру форми у Кельвінах'
                    onChange={handleValue}
                    min={273} 
                    value={formData.mouldTemp}
                />
                
                <p><span className='star'>*</span> - обов'язкове поле!</p>

                <div className="btn-container">
                    <button type="submit">Розрахувати</button>
                </div>
            </form>
            {showResult && <div className='result'>
                    <h4>Тривалість твердіння виливка становить {result.hardeningTimeSeconds} c, або {(+result.hardeningTimeSeconds/60).toFixed(2)} хв.</h4>
                    <h4>Тривалість охолодження виливка до температури {formData.coolingTemp} К становить {result.coolingTimeSeconds} c, або {(+result.coolingTimeSeconds/60).toFixed(2)} хв.</h4>
                </div>
            }
        </main>
    );
}

export default Main;
