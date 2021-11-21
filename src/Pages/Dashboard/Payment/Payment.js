import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cheackoutform from "./Cheackoutform";
const stripePromise = loadStripe(
  "pk_test_51Jw9wyKv4kpY3WPi4IW2myWsa8hdIAP3X2Z8Sh8CQySVbiU6kdqxPrJJ4yC0A0m7MWSrEC0aX254iGcGhQKTrhzs00qjYF6dFN"
);

const Payment = () => {
  const { appoinmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointment/${appoinmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appoinmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}{" "}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
      <Elements stripe={stripePromise}>
        <Cheackoutform
        appointment = {appointment}
        />
      </Elements>
    </div>
  );
};

export default Payment;
