import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../compontents/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

// const stripePromise = loadStripe('pk_test_qblFNYngBkEdjEZ16jxxoWSM');
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Bistro Boss | Payment Now</title>
                </Helmet>
                <SectionTitle
                    subHeading='Please Pay To Eat'
                    Heading='payment now'
                ></SectionTitle>
            </div>

            <div className="p-20">
                <Elements stripe ={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </>
    );
};

export default Payment;