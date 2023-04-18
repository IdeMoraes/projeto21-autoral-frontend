import { useContext } from "react";
import styled from "styled-components";
import { scheduleAppointment } from "../api.js";
import UserContext from "../contexts/contexts.js";

export default function FinalDetails({setNewAppointment, setNewAppointmentDay, appointment, setAppointment}){
    const {user} = useContext(UserContext);
    async function handleSubmit(){
        try {
            await scheduleAppointment(appointment, user.token);
            alert('A consulta está marcada! \u{1F973}');
            setNewAppointment(false);
            setNewAppointmentDay('');
        } catch (error) {
            console.log(error.response.data); 
        }

    }
    return(
        <FinalDetailsContainer appointment={appointment}>
            {appointment.type_id!==1 && 
                <div>
                    Qual é o tipo dessa consulta?<p/>
                    <AppointmentTypeButton thisType={2} selectedType={appointment.type_id} onClick={()=>{setAppointment({...appointment, type_id: 2})}}>Padrão</AppointmentTypeButton>
                    <AppointmentTypeButton thisType={3} selectedType={appointment.type_id} onClick={()=>{setAppointment({...appointment, type_id: 3})}}>Retorno</AppointmentTypeButton>
                </div>
            }
            <div>
                O paciente possui convênio ou plano?<p/>
                <HealthInsuranceButton isSelected={(appointment.health_insurance===false)} onClick={()=>{setAppointment({...appointment, health_insurance: false})}}>Sem convênio</HealthInsuranceButton>
                <HealthInsuranceButton isSelected={(appointment.health_insurance===true)} onClick={()=>{setAppointment({...appointment, health_insurance: true})}}>Com convênio</HealthInsuranceButton>
            </div>
            <div className="appointment-time">
                A que horas começa a consulta?<p/>
                <input type="time" id="hora" name="hora" onChange={(event)=>{setAppointment({...appointment, start_time: event.target.value})}}/>
            </div>
            <FinalButton onClick={()=>{handleSubmit()}}>Agendar Consulta</FinalButton>
        </FinalDetailsContainer>
    );
}
const FinalDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 20px ;
    height: 100%;
    justify-content: space-evenly;
    button{
        width: 150px;
        height: 30px;
        border-radius: 15px;
        font-size: 15px;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        :active{
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    input{
        width: 100px;
        height: 30px;
        border-radius: 15px;
        font-size: 15px;
        text-align: center;
    }
`;
const HealthInsuranceButton = styled.button`
  background: ${props => props.isSelected? 'linear-gradient(90deg, #FAF480, #FFD5A4) border-box' : '#FBFBC7'};
`;
const AppointmentTypeButton = styled.button`
  background: ${props => props.thisType===props.selectedType ? 'linear-gradient(90deg, #FAF480, #FFD5A4) border-box' : '#FBFBC7'};
`;
const FinalButton = styled.button`
    background-color: #FBFBC7;
    :hover{
        background: linear-gradient(90deg, #FAF480, #FFD5A4) border-box;
    }
`;