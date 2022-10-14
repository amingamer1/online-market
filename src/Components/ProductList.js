import React, { useState, useEffect } from 'react';
import myData from "../Data.json";
import ProductItems from './ProductItems';
import { withGlobalState } from 'react-globally'


function ProductList({ pFilter, catFilters, setGlobalState, globalState }) {
    const [order, setOrder] = useState(globalState.totalOrder)
    useEffect(() => {
        setGlobalState(() => ({
            totalOrder: order - 1
        }))
    }, [order])


    // ---------------------------------return ----------------------------------

    return (
        <div className='container mt-5'>
            <ul className='proList row px-4 '>
                {myData.map((value, i) => {
                    if (parseInt(value.price) <= pFilter && catFilters.includes(value.category))
                        return <li key={i} className='col-lg-4 col-12'  > <ProductItems myOrder={order} setMyOrder={setOrder} items={value} /></li>
                }
                )}
            </ul>
        </div>

    );
}

export default withGlobalState(ProductList)
