import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentBanar from '../AppointmentBanar/AppointmentBanar';
import Banar from '../Banar/Banar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banar></Banar>
            <Services></Services>
            <AppointmentBanar></AppointmentBanar>
        </div>
    );
};

export default Home;