import './ResultsPage.css';

function ResultsPage() {
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
            <table>
                <thead>
                    <tr>
                        {heading.map((item, index) => <td key={index}>{item}</td>)}
                    </tr>
                </thead>
                <tbody className='row-results'>
                </tbody>
            </table>
        </section>
    </main>
    );
}

export default ResultsPage;