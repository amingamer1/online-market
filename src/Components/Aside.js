import React, { useState, useEffect } from 'react';
import cat from '../Category.json'
import Data from '../Data.json'
import { BsFillFunnelFill } from 'react-icons/bs'

// ---------------------------------------------

function Aside({ PriceFilter, setPriceFilter, catFilter, setCatFilter }) {

    //------------- calculate Max Price of all Products ---------------
    let prices = Data.map(val => val.price)
    const max = prices.reduce((a, b) => Math.max(a, b), -Infinity);

    // ------------- handle current value of price filter ----------------
    const [currentPrice, setCurrentPrice] = useState(max)

    // -------------- handle multiple checkbox (categorys) -----------------
    const [catChecked, setCatChecked] = useState(new Array(cat.length).fill(cat))
    const handleOnChange = (pos) => {
        const updatedCheckedState = catChecked.map((val, i) => i === pos ? !val : val)
        setCatChecked(updatedCheckedState)
        setCatFilter(catChecked.map((value, index) => (value && cat[index])))
    }
    // ------------ send changed data to prodoct page ------------------------
    useEffect(() => {
        setCatFilter(catChecked.map((value, index) => (value && cat[index])))
    }, [catChecked]);


    //  ------------------return -----------------
    return (
        <div className='row-cols-1 card mt-5 mx-3 w-100 px-1'>
            <div className='cols card-header '><BsFillFunnelFill /> فیلتر  </div>
            <div className='cols card-body p-0 mt-1 mx-1'>
                {/* ----------------- filter for price ----------------- */}
                <div className='cols'>
                    <div className='row w-100  '>
                        <div>قیمت : </div>
                        <span className='col-8'>
                            <input type="range" className="form-range " defaultValue={max} value={PriceFilter} min="0" max={max} step="1000" id="pricefilter"
                                onChange={(e) => {
                                    setPriceFilter(e.target.value)
                                    setCurrentPrice(e.target.value)
                                }} />
                        </span>
                        <span id='priceFilter' className='col-4 p-0' > {currentPrice} تومان</span>
                    </div>
                </div>
                {/* --------------- filte with category -----------------*/}
                <div className='cols'>
                    <div>دسته بندی : </div>
                    <div>
                        {cat.map((value, index) => (
                            <div key={index}>
                                <input onChange={() => handleOnChange(index)} type="checkbox" checked={catChecked[index]} id={`item${index}`} />
                                <label key={index} htmlFor={`item${index}`} className='mx-1'>{value}</label>
                            </div >

                        ))}
                    </div>
                </div>
            </div>

        </div >);
}

export default Aside;