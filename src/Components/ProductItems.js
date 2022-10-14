import React, { useState, useEffect } from 'react';
import { MdClear } from 'react-icons/md'

function ProductItems({ items, myOrder, setMyOrder }) {


    const [buy, setBuy] = useState(parseInt(items.ordernumber))
    useEffect(() => {
        setMyOrder(myOrder + 1)
        items.ordernumber = buy
    }, [buy]);
    return (
        <div className=" card mb-3">
            <div className="row g-0">
                {/* --------right side of Product item-------- */}
                <div className="col-md-4 position-relative">
                    <img src={items.src} className="img-fluid rounded-start" alt={items.title} />
                    <div className='orderBox bg-success position-absolute rounded-circle text-white text-center'>{buy}</div>
                </div>
                {/* --------end-------- */}

                {/* ---------left Side OF Product Item--------- */}
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title ">{items.title}</h5>
                        <p className="card-text">{items.description}</p>
                        <p className="card-text"><span className='text-danger'>دسته بندی :</span> {items.category}</p>
                        <button className="btn btn-success w-100 px-1" onClick={() => (setBuy(buy + 1))} >{items.price} تومان </button>
                        <button className="clearBtn btn btn-danger position-absolute px-2 py-1" onClick={() => (setBuy(0))} ><MdClear /></button>
                    </div>
                </div>
                {/* ---------end--------- */}
            </div>
        </div>);
}

export default ProductItems;