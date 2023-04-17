import styled from "styled-components";
import { Container } from "./homeContent.js";
import { FcPrevious } from 'react-icons/fc';
import { FcNext } from 'react-icons/fc';
import { RiAddCircleFill } from 'react-icons/ri';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'; 
import { useState } from "react";
import NewAppointment from "./newAppointment.js";

export default function CalendarContent() {
    dayjs.locale('pt-br');
    const [newAppointment, setNewAppointment] = useState(false);
    const [newAppointmentDay, setNewAppointmentDay] = useState(false);
    const [mon, setMon] = useState(dayjs().startOf('week').add(1, 'day'));
    const [tue, setTue] = useState(mon.add(1, 'day'));
    const [wed, setWed] = useState(tue.add(1, 'day'));
    const [thu, setThu] = useState(wed.add(1, 'day'));
    const [fri, setFri] = useState(thu.add(1, 'day'));
    const [sat, setSat] = useState(fri.add(1, 'day'));
    function previousWeek(){
        setMon(mon.subtract(7, 'day'));
        setTue(tue.subtract(7, 'day'));
        setWed(wed.subtract(7, 'day'));
        setThu(thu.subtract(7, 'day'));
        setFri(fri.subtract(7, 'day'));
        setSat(sat.subtract(7, 'day'));
    }
    function nextWeek(){
        setMon(mon.add(7, 'day'));
        setTue(tue.add(7, 'day'));
        setWed(wed.add(7, 'day'));
        setThu(thu.add(7, 'day'));
        setFri(fri.add(7, 'day'));
        setSat(sat.add(7, 'day'));
    }
    return (
      <Container>
        <Days>
            <FcPrevious style={{fontSize: "1.5em"}} onClick={()=>{previousWeek()}}/>
            <DayComponent day={mon} setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay}/>
            <DayComponent day={tue} setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay}/>
            <DayComponent day={wed} setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay}/>
            <DayComponent day={thu} setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay}/>
            <DayComponent day={fri} setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay}/>
            <DayComponent day={sat} setNewAppointment={setNewAppointment} setNewAppointmentDay={setNewAppointmentDay}/>
            <FcNext style={{fontSize: "1.5em"}} onClick={()=>{nextWeek()}}/>
            {newAppointment && <NewAppointment newAppointmentDay={newAppointmentDay}/>}
        </Days>
      </Container>
    )
}
function DayComponent({day, setNewAppointment, setNewAppointmentDay}){
    function handleNewAppointment(){
        setNewAppointment(true);
        setNewAppointmentDay(day);
    }
    return(
        <DayContainer>
        <div className="date">
            {day.format('DD/MM/YYYY')}<p/>
            {day.format('dddd')}
        </div>
        <Icon onClick={()=>{handleNewAppointment()}}>
            <RiAddCircleFill style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon> 
    </DayContainer>
    );
}

const Days = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    height: 100%;
    position: relative;
`;
const DayContainer = styled.div`
    width: 160px;
    height: 100%;
    background: linear-gradient(#BFF7F9,#FDD9A9) border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);   
    border-radius: 15px;
    text-align: center;
    padding-top: 10px ;
    .date{
        margin-bottom: 10px ;
    }
`;
const Icon = styled.span`
    border-radius: 50%;
    color: #2E9E38;
    :hover{
        color: #008000;
    }
    :active{
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export {Icon};