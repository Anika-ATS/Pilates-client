import {CardElement,useElements, useStripe} from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from '../../../../hooks/useAuth';
// import { AuthContext } from "../../../../Providers/AuthProviders";
// import { useContext } from "react";

const Checkout = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const[CardError,setCardError]=useState('');

    // userinfo
    const {user}=useAuth();
    // payment
    
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/CreatePayment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, [price]);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }
        console.log('card',card)
    
        // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
    
        if (error) {
          console.log('[error]', error);
          setCardError(error.message)
        } else {
          setCardError('');
          console.log('[PaymentMethod]', paymentMethod);
          
        }

            //    payment method related
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            '{PAYMENT_INTENT_CLIENT_SECRET}',
            {
              payment_method: {
                card: card,
                billing_details: {
                    email:user?.email||'anonymous',
                    Username:user?.displayName||'anonymous'
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError)
          }
          console.log(paymentIntent)

       };








    return (
        <div>
            <form className="" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className="mt-5 mx-auto btn btn-sm btn-outline btn-secondary" >
                    Pay
                </button>
            </form>

            {CardError && <p className="text-red-600">{CardError}</p>}

        </div>
    );
};

export default Checkout;