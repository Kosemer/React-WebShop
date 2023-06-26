import classes from './LoadingSpinner.module.css'

function LoadingSpinner() {
    return ( <div className={classes['lds-ellipsis']}><div></div><div></div><div></div><div></div></div> );
}

export default LoadingSpinner;