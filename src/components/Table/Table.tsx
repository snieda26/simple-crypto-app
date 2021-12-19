import React, { useMemo, useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

import { TableHeader, Coin } from '../index'

import './Table.scss'
import { injectStyle } from "react-toastify/dist/inject-style"

import filter from '../../images/filter.svg'
import refresh from '../../images/refresh.svg'


const Table: React.FC = () => {
    injectStyle()

    const notify = (): void => {
        toast.success('data was updated')
    }

    const [sortBy, setSortBy] = useState<boolean>(false)
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(res => res.data)
            .then(res => setData(res.Data))

    }, [])


    const sortedData = useMemo(() => {
        if (data.length == 0) {
            return []
        }

        if (sortBy) {
            return data.sort((a, b) => {
                const aResult = a.RAW.USD.PRICE - a.RAW.USD.OPENDAY
                const bResult = b.RAW.USD.PRICE - b.RAW.USD.OPENDAY
                return aResult - bResult
            }
            )
        } else {
            return data.sort((a, b) => {
                const aResult = a.RAW.USD.PRICE - a.RAW.USD.OPENDAY
                const bResult = b.RAW.USD.PRICE - b.RAW.USD.OPENDAY
                return bResult - aResult
            }
            )
        }
    }, [data, sortBy])




    return (
        <div className="table-wrapper">

            <TableHeader />
            <div className="table" >
                <div className="table__buttons">
                    <img src={filter} alt="filter" className={`table__filter ${sortBy ? '' : 'rotated'}`} onClick={() => setSortBy(!sortBy)} />
                    <img src={refresh} alt="refresh" className={`table__refresh`} onClick={notify} />
                </div>
                {
                    sortedData.map((obj, ind) => <Coin key={obj.CoinInfo.Id}
                        name={obj.CoinInfo.Name}
                        currentPrice={obj.RAW.USD.PRICE}
                        openPrice={obj.RAW.USD.OPENDAY}
                    />)
                }
            </div>
            <ToastContainer limit={3} />
        </div>
    )
}

export default Table
