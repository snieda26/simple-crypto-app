import React from 'react'
import './TableHeader.scss'

const TableHeader: React.FC = () => {
    return (
        <div className="table-header">
            <p>Coin</p>
            <p>Current Price (USD)</p>
            <p>Opening Price (USD)</p>
            <p>Price Increase</p>
        </div>
    )
}

export default TableHeader
