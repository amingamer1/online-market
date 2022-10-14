import React, { useState } from 'react';
import myData from "../Data.json"


function Cart() {
    // calculate Total Price of ordered Items
    const maxvalue = myData.reduce((currentValue, value) => {
        value.total = parseInt(value.price) * parseInt(value.ordernumber)
        return currentValue + value.total
    }
        , 0)
    // -------refresh component--------
    const [value, setValue] = useState();
    const refresh = () => {
        setValue({});
    }
    return (
        <div className='container mt-2'>
            <h1>سبد خرید شما</h1>
            <div>
                <table className="table table-striped">
                    {/* header of table */}
                    <thead className='bg-danger text-white'>
                        <tr>
                            <th scope="col">نام محصول</th>
                            <th scope="col">فی </th>
                            <th scope="col">تعداد</th>
                            <th scope="col">مجموع</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* show data items with calculated price * orders */}
                        {myData.map((value, i) =>
                            value.ordernumber > "0" && // check if u ordered each item
                            <tr key={i}>
                                <th scope="row"><img src={value.src} width="50px" alt={value.title} /> {value.title}</th>
                                <td className='align-middle'>{value.price} تومان</td>
                                <td className='align-middle'>{value.ordernumber} عدد</td>
                                <td className='align-middle'>{value.total} تومان</td>
                                <td className='align-middle text-end'>
                                    <button type='button' className='btn btn-danger ' onClick={() => {
                                        value.ordernumber = 0
                                        refresh()
                                    }}> X </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* print Total Price OF Ordered Items */}
                <div className='bg-danger w-25 ms-auto py-2 px-5 text-white fw-bold'>قیمت کل : {maxvalue} تومان </div>
            </div>
        </div >

    );
}

export default Cart;