import React from 'react'
import './Coin.scss'

interface CoinProps {
    name: string,
    currentPrice: number,
    openPrice: number
}

const Coin: React.FC<CoinProps> = ({ currentPrice, openPrice, name }) => {

    const result = currentPrice - openPrice
    const percent = currentPrice / openPrice * 100 - 100

    return (
        <div className="coin">
            <p className="coin__name">{name}</p>
            <p className="coin__price">{currentPrice}</p>
            <p className="coin__open-price">{openPrice}</p>
            <p className={`coin__increase ${result >= 0 ? 'green' : 'red'}`}>{result >= 0 ? `+${percent.toFixed(3)}` : percent.toFixed(3)}% (${+result.toFixed(3)})</p>
        </div>
    )
}

export default Coin