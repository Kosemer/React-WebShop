import { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";
import ProductsSummary from './ProductSummary'

function Products() {
    return ( 
        <Fragment>
            <ProductsSummary></ProductsSummary>
            <AvailableProducts></AvailableProducts>
        </Fragment>
     );
}

export default Products;