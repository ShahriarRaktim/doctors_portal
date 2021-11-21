import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import AppointmentBanar from '../AppointmentBanar/AppointmentBanar';
import Banar from '../Banar/Banar';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banar></Banar>
            <Services></Services>
            <AppointmentBanar></AppointmentBanar>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;