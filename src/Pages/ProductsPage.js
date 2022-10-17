// -------------------- imports ------------------------
import React, { useState } from 'react';
import ProductList from '../Components/ProductList';
import Aside from "../Components/Aside"

// -----------------------------------------------------

function Products() {
    const [priceFilters, setPriceFilters] = useState(9999999)
    const [categoryFilters, setCategoryFilters] = useState([])

    return (
        <div className='row px-0'>
            <aside className='col-lg-3 cols  mx-lg-0 pe-4 px-lg-0 ps-lg-2'><Aside catFilter={categoryFilters} setCatFilter={setCategoryFilters} priceFilter={priceFilters} setPriceFilter={setPriceFilters} /></aside>
            <section className='col-lg-9 cols px-lg-0'><ProductList catFilters={categoryFilters} pFilter={priceFilters} /></section>
        </div>

    );
}

export default Products