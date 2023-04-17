import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/contexts.js";

export default function Sidebar({setActiveContent}) {
    const {user} = useContext(UserContext);

  return (
    <Container>
        <Tab>Nossa história</Tab>
        <Tab>Nosso espaço</Tab>
        <Tab>Nossa equipe</Tab>
        <Tab>Agende sua consulta</Tab>
        <Tab>Nossos contatos</Tab>
        <Tab>Nossas publicações</Tab>
        <Tab>Depoimentos</Tab>
        {(user.type===1 || user.type ===2) && <Tab onClick={()=>{setActiveContent('CalendarContent')}}>Calendário</Tab>}
        {(user.type===1 || user.type ===2) && <Tab>Comprovantes</Tab>}
        {(user.type===1) && <Tab>Faturamento</Tab>}
        {(user.type===1) && <Tab>Prontuários</Tab>}
        {(user.type===1) && <Tab>Controlar acesso</Tab>}
    </Container>
  )
}

const Container = styled.div`
    padding-top: 5px;
    width: 280px;
    min-height: 100%;
    border-radius: 20px 0 0 20px;
    border: 5px solid transparent;
    border-left:0;
    background: linear-gradient(#FBC1BF,#A8CEFF) border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Tab = styled.div`
    background: #FBFBC7;
    width: 200px;
    height: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    :hover{
        background: linear-gradient(90deg, #FAF480, #FFD5A4) border-box;
    }
    :active{
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;