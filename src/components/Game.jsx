

function Game({ step, question, questions, onClickVariant }) {
    const percentage = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${percentage}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((item, index) => (
                    <li onClick={() => onClickVariant(index)} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Game;