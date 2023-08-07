import { Elements } from "@stripe/react-stripe-js";

import SectionsTitle from "../../../Components/Titles/SectionsTitle";
import Checkout from "./Payment/Checkout";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";

// const stripePromise = loadStripe(' import.meta.env.VITE_Payment_Pk');
// const stripePromise = loadStripe(' payId');
const stripePromise = loadStripe("your_stripe_publishable_key_here");

const AllPayment = () => {
    const [CartClasses]=useCart();
    const price=CartClasses.reduce((sum,item)=>sum+item.price,0);
    // const price=parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionsTitle 
                Heading="Payment Counter"
                subHeading="Pay to book first"
                clsNameS=" w-[250px] "
                clsNameH=" w-[300px] "
            ></SectionsTitle>

            <Elements stripe={stripePromise}>
                <Checkout price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default AllPayment;