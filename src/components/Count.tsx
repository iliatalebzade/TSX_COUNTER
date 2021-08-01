import { FC } from 'react'

import "./Count.css"

interface Props {
    count: number;
}

const Count: FC<Props> = ({ count }) => {
    return (
        <div className="count">
            <h1 className="count__element">{count}</h1>
        </div>
    )
}

export default Count
