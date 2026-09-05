import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { formatMoney } from "../../utils/money";

export function PaymentSummary({paymentSummary, loadCart}) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const createOrder = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');
    try {
      await axios.post('/api/orders');
      navigate('/orders');
      void loadCart().catch((error) => {
        console.error('Unable to refresh cart after creating order:', error);
      });
    } catch {
      setErrorMessage('Unable to place your order. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">Payment Summary</div>

      {errorMessage && <div role="alert">{errorMessage}</div>}

      {paymentSummary && (
        <>
          <div className="payment-summary-row">
            <div>Items ({paymentSummary.totalItems}):</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.productCostCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.shippingCostCents)}
            </div>
          </div>

          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
            </div>
          </div>

          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.taxCents)}
            </div>
          </div>

          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">
              {formatMoney(paymentSummary.totalCostCents)}
            </div>
          </div>

          <button className="place-order-button button-primary"
            onClick={createOrder}
            disabled={isSubmitting}>
            Place your order
          </button>
        </>
      )}
    </div>
  );
}
