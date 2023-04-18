import styled from "styled-components";
import { Icon } from "./calendarContent.js";
import { RiAddCircleFill } from 'react-icons/ri';
import { FcSearch } from 'react-icons/fc';
import { useContext, useEffect, useState } from "react";
import { listAllPatients } from "../api.js";
import UserContext from "../contexts/contexts.js";

export default function SearchPatient({appointment, setAppointment, setCurrentStep}){
    const {user} = useContext(UserContext);
    const [nameFilter, setNameFilter] = useState('');
    const [patients, setPatients] = useState([]);
    const filteredPatients = patients.filter(patient => {
        return patient.name.toLowerCase().includes(nameFilter.toLowerCase());
    });
    useEffect(() => {
        async function fetchData() {
            try {
              const res = await listAllPatients(user.token);
              setPatients(res);
            } catch (error) {
              console.log(error);
            }
          }
          fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    function handlePatientSelection(id){
        setAppointment({...appointment, patient_id: id});
        setCurrentStep('FinalDetails');
    }
    return(
        <SearchPatientContainer>
        <div className="new-patient" onClick={()=>{setCurrentStep('RegisterPatient');}}>
            <Icon>
                <RiAddCircleFill style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
            </Icon>
            <div>Novo paciente</div>
        </div>
        <div className="input-container">
            <input value={nameFilter} placeholder="Paciente já registrado" onChange={e => setNameFilter(e.target.value)}/>
            <Icon>
                <FcSearch/>
            </Icon>
        </div>
        <PatientsContainer>
            {filteredPatients.map(patient => 
            <PacientContainer key={patient.name} onClick={()=>{handlePatientSelection(patient.id)}}>{patient.name}</PacientContainer>)}
        </PatientsContainer>
        </SearchPatientContainer>
    );
}

const SearchPatientContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    .new-patient{
        background: #FBFBC7;
        width: 200px;
        height: 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        margin-bottom: 5px;
        :hover{
            background: linear-gradient(90deg, #FAF480, #FFD5A4) border-box;
        }
        :active{
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
    .input-container{
        display: flex;
        align-items: center;
        column-gap: 10px;
        padding-left: 25px ;
    }
    input{
        width: 200px;
        height: 30px;
        border-radius: 15px;
        font-size: 15px;
        text-align: center;
    }
`;
const PatientsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 10px 5px;
    column-gap: 5px;
    row-gap: 5px;
    max-height: 220px;
    overflow-y: scroll;
`;
const PacientContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding-left: 5px;
        padding-right: 5px;
        background: #FBFBC7;
        height: 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
        font-size: 15px;
        :hover{
            background: linear-gradient(90deg, #FAF480, #FFD5A4) border-box;
        }
        :active{
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
`;