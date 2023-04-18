import { useContext, useState } from "react";
import { registerPatient } from "../api.js";
import UserContext from "../contexts/contexts.js";
import styled from "styled-components";

export default function RegisterPatient({appointment, setAppointment, setCurrentStep}){
    const {user} = useContext(UserContext);
    const [name, setName] = useState('')
    const [birthdate, setBirthdate] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [responsible, setResponsible] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const body = {
        name,
        birthdate,
        address: {
            city,
            neighborhood,
            street,
            number,
            complement
        },
        responsible,
        phoneNumber,
        email
    }
    async function handleSubmit(){
        try {
            const patient = await registerPatient(body, user.token);
            alert('Paciente cadastrado com sucesso! \u{1F973}');
            setAppointment({...appointment, patient_id: patient.id, type_id: 1});
            setCurrentStep('FinalDetails');
        } catch (error) {
            console.log(error.response.data);
        }
    }
    return(
        <RegisterPatientContainer>
            Preencha os dados de cadastro:
            <div className="registration">
                <input type="text" placeholder="Nome do paciente" onChange={(event)=>{setName(event.target.value)}}/>
                <input type="date" placeholder="Data de nascimento" onChange={(event)=>{setBirthdate(event.target.value)}}/>
                <input type="text" placeholder="Cidade" onChange={(event)=>{setCity(event.target.value)}}/>
                <input type="text" placeholder="Bairro" onChange={(event)=>{setNeighborhood(event.target.value)}}/>
                <input type="text" placeholder="Logradouro" onChange={(event)=>{setStreet(event.target.value)}}/>
                <input type="number" placeholder="Número" onChange={(event)=>{setNumber(event.target.value)}}/>
                <input type="text" placeholder="Complemento" onChange={(event)=>{setComplement(event.target.value)}}/>
                <input type="text" placeholder="Nome do responsável" onChange={(event)=>{setResponsible(event.target.value)}}/>
                <input type="tel" placeholder="Telefone de contato" onChange={(event)=>{setPhoneNumber(event.target.value)}}/>
                <input type="email" placeholder="E-mail" onChange={(event)=>{setEmail(event.target.value)}}/>
            </div>
            <button onClick={()=>{handleSubmit()}}> Cadastrar Paciente</button>
        </RegisterPatientContainer>
    );
}
const RegisterPatientContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 20px ;
    .registration{
        display: flex;
        flex-wrap: wrap;
        row-gap: 5px;
        column-gap: 5px;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 10px;
        input{
            width: 200px;
            height: 30px;
            border-radius: 15px;
            font-size: 15px;
            text-align: center;
        }
    }
    button{
        width: 200px;
        height: 30px;
        border-radius: 15px;
        font-size: 15px;
        text-align: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #FBFBC7;
        :hover{
            background: linear-gradient(90deg, #FAF480, #FFD5A4) border-box;
        }
        :active{
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
`;