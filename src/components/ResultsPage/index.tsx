import { useEffect, useState } from 'react';
import './ResultsPage.css';
import { getResults } from '../../services/results';
import { ResultsContextType } from '../../types/types.results';

function ResultsPage() {

    const [loading, setLoading] = useState<boolean>(false);
    const [results, setResults] = useState<ResultsContextType[]>([]);

    const fetchData = async () => {
        setLoading(true);

        const res : any[] = await getResults();
    
        setResults([...res]);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const heading = [
        "№",
        "Сплав",
        "Конфігурація",
        "Зведений радіус, м",
        "Температура форми, К",
        "Температура заливання, К",
        "Кінцева температура охолодження, К",
        "Час тверднення, с",
        "Час охолодження, с"
    ];
    return (
    <main className='results-page'>
        <section className='results'>
            { loading && 
                <p>loading...</p>
            }
            { loading === false &&
                <div className='big-table'>
                    <table>
                        <thead>
                            <tr>
                                {heading.map((item, index) => <td key={index}>{item}</td>)}
                            </tr>
                        </thead>
                        <tbody className='row-results'>
                            {results.map((item, index) => <tr key={item.id}>
                                <td>{index + 1}</td>                              
                                <td>{item.calculationResult.alloy}</td>
                                <td>{item.calculationResult.castingConfiguration}</td>
                                <td>{item.calculationResult.compoundRadius}</td>
                                <td>{item.calculationResult.moldTemperature}</td>
                                <td>{item.calculationResult.pouringTemperature}</td>
                                <td>{item.calculationResult.finalCoolingTemperature}</td>
                                <td>{item.calculationResult.hardeningTime}</td>
                                <td>{item.calculationResult.coolingTime}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            }
        </section>
    </main>
    );
}

export default ResultsPage;