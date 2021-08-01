import { FC } from 'react'

import "./Buttons.css"

interface Props {
    counterVal: number,
    setCounterVal: (count: number) => void;
}

const Buttons: FC<Props> = ({ counterVal, setCounterVal }) => {
    return (
        <div className="buttons">
            <button className="buttons__button--increment" onClick={() => setCounterVal(counterVal + 1)}>increment count</button>
            <button className="buttons__button--decrement" onClick={() => setCounterVal(counterVal - 1)}>decrement count</button>
        </div>
    )
}

export default Buttons
