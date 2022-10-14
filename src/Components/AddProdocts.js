import React, { useState, useRef } from 'react';
import cat from '../Category.json'
import myData from '../Data.json'
import { BiAddToQueue, BiArrowBack } from "react-icons/bi"
import { MdSubtitles, MdDescription, MdPriceChange, MdImage, MdCategory } from "react-icons/md"
function AddProdocts() {
    // with this part of code when u add new category it refresh component and new data will loaded
    const [value, setValue] = useState();
    const refresh = () => {
        setValue({});
    }
    //-----------------------------------
    const newTitle = useRef()
    const newDescr = useRef()
    const newPrice = useRef()
    const newSrc = useRef()
    const newCat = useRef()
    function submit(e) {
        e.preventDefault();
        const uData = {
            "title": newTitle.current.value,
            "description": newDescr.current.value,
            "price": newPrice.current.value,
            "src": newSrc.current.value,
            "ordernumber": "0",
            "total": "0",
            "category": newCat.current.value
        }
        //--- reset Form  ----

        newTitle.current.value = ""
        newDescr.current.value = ""
        newPrice.current.value = ""
        newSrc.current.value = ""
        newCat.current.value = ""
        alert("محصول با موفقیت اضافه شد")
        //----------------
        myData.push(uData)
        console.log(myData);
    }

    return (
        <div className='row '>
            <div className=' col-11 col-lg-6  mx-auto border  p-4 rounded-4 mt-4 '>
                <form action="" onSubmit={submit}>
                    <div className='mb-3'>
                        <label htmlFor="title" className='form-label'> <MdSubtitles /> عنوان محصول : </label>
                        <input ref={newTitle} type="text" name="" id="title" className='form-control' placeholder='عنوان محصول خود را وارد نمایید' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="description" className='form-label'><MdDescription /> توضیحات : </label>
                        <input ref={newDescr} type="text" name="" id="description" className='form-control' placeholder='توضیحات محصول خود را وارد نمایید' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="price" className='form-label'><MdPriceChange /> قیمت : </label>
                        <input ref={newPrice} type="text" name="" id="price" className='form-control' placeholder='قیمت محصول خود را به تومان وارد نمایید' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="price" className='form-label'><MdImage /> عکس: </label>
                        <input ref={newSrc} type="text" name="" id="price" className='form-control' placeholder='آدرس عکس خود را وارد نمایید' />
                    </div>
                    <div className='mb-3 row align-self-center'>
                        <label htmlFor="price" className='form-label cols '><MdCategory /> دسته بندی: </label>
                        <select ref={newCat} id="" className="form-select col ms-2">
                            {cat.map((value, i) =>
                                <option key={i}>{value}</option>)}
                        </select>
                        <button type='button' title='اضافه کردن دسته بندی جدید' className='btn btn-success col-auto text-center ms-1' onClick={() => {
                            let newCategory = prompt("Please enter your new Category");
                            newCategory && //check if newCategory isnt empty
                                cat.push(newCategory) // push data inside your json file 
                            refresh()
                        }}><BiAddToQueue /></button>
                    </div>
                    <button type="submit" className='btn btn-primary'>
                        ثبت محصول
                        <BiArrowBack className='ms-2' />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddProdocts;