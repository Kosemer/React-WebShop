import { Fragment } from "react";
import AvailableProducts from "./AvailableProducts";
//import ProductsSummary from './ProductSummary'

function Products(props) {
    return ( 
        <Fragment>
            {/*<ProductsSummary></ProductsSummary>*/}
            <AvailableProducts url={props.url} title={props.title} description={props.description}></AvailableProducts>
        </Fragment>
     );
}

export default Products;