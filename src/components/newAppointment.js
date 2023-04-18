import { useState } from "react";
import styled from "styled-components";
import SearchPatient from "./searchPatient.js";
import RegisterPatient from "./registerPatient.js";
import FinalDetails from "./FinalDetails.js";

export default function NewAppointment({setNewAppointment, setNewAppointmentDay, newAppointmentDay}){
    const [appointment, setAppointment] = useState({date: newAppointmentDay.format('YYYY-MM-DD')});
    console.log(appointment)
    const [currentStep, setCurrentStep] = useState('SearchPatient');
    return(
        <NewAppointmentContainer>
            <div className="title">Marcar consulta para {newAppointmentDay.format('dddd, D [de] MMMM [de] YYYY')}</div>
            {currentStep==='SearchPatient' && <SearchPatient appointment={appointment} setAppointment={setAppointment} setCurrentStep={setCurrentStep}/>}
            {currentStep=== 'RegisterPatient' && <RegisterPatient appointment={appointment} setAppointment={setAppointment} setCurrentStep={setCurrentStep}/>}
            {currentStep=== 'FinalDetails' && <FinalDetails setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay} appointment={appointment} setAppointment={setAppointment}/>}
        </NewAppointmentContainer>
    );
}


const NewAppointmentContainer = styled.div`
    width: 93.5%;
    height: 80%;
    background: blue;
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(#BFF7F9,#FDD9A9) border-box;
    border-radius: 15px;
    border: 5px solid #D0A8C9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    .title{
        font-size: 22px;
        margin-bottom: 10px;
    }
`;
