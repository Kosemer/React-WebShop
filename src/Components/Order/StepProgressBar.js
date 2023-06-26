import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import './StepProgressBar.css'

function StepProgressBar() {

const cartCtx = useContext(CartContext);

const { cart, order, data, confirmation } = cartCtx.orderStatus;


  return (
    <section>
      <ul className="step-wizard-list">
            <li className={`step-wizard-item ${cart ? 'current-item' : ''}`}>
                <span className="progress-count">1</span>
                <span className="progress-label">Kosár</span>
            </li>
            <li className={`step-wizard-item ${order ? 'current-item' : ''}`}>
                <span className="progress-count">2</span>
                <span className="progress-label">Szállítás</span>
            </li>
            <li className={`step-wizard-item ${data ? 'current-item' : ''}`}>
                <span className="progress-count">3</span>
                <span className="progress-label">Adatok</span>
            </li>
            <li className={`step-wizard-item ${confirmation ? 'current-item' : ''}`}>
                <span className="progress-count">4</span>
                <span className="progress-label">Visszaigazolás</span>
            </li>
        </ul>
    </section>
  );
}

export default StepProgressBar;
