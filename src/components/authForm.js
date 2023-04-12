import styled from "styled-components"
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { useState } from "react";

export default function AuthForm({setAuthForm}) {
  const [noAdminUser, setNoAdminUser] = useState(false);
  return (
    <>
        {noAdminUser ? <SignupAdmin setAuthForm={setAuthForm}/> : <Login setAuthForm={setAuthForm}/>}
    </>
  )
}
function SignupAdmin({setAuthForm}){
  return (
    <Container>
      <div>Cadastrar Usuário Admin</div>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha"></input>
      <input placeholder="Confirme a senha"></input>
      <Buttons>
        <Icon>
          <AiFillCheckCircle className="check" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon>
        <Icon onClick={()=>{setAuthForm(false)}}>
          <AiFillCloseCircle className="close" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon>
      </Buttons>
    </Container>
  )
}
function Login({setAuthForm}){
  return (
    <Container>
      <div>Login</div>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha"></input>
      <Buttons>
        <Icon>
          <AiFillCheckCircle className="check" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon>
        <Icon onClick={()=>{setAuthForm(false)}}>
          <AiFillCloseCircle className="close" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon>
      </Buttons>
    </Container>
  )
}
function Logout({setAuthForm}){
  return (
    <Container>
      <div>Login</div>
      <input placeholder="Usuário"></input>
      <input placeholder="Senha"></input>
      <Buttons>
        <Icon>
          <AiFillCheckCircle className="check" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon>
        <Icon onClick={()=>{setAuthForm(false)}}>
          <AiFillCloseCircle className="close" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
        </Icon>
      </Buttons>
    </Container>
  )
}

const Container = styled.div`
  padding-top: 10px;
  width: 250px;
  height: 225px;
  background-color: #FBFBC7;
  position: absolute;
  right: 35px;
  bottom: 85px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover{
    background: linear-gradient(45deg, #FAF480, #FFD5A4) border-box;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  div{
    font-size: 22px;
    margin-bottom: 10px;
  }
  input{
    margin-top: 10px;
  }
`;
const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 75px;

`;
const Icon = styled.span`
  border-radius: 50%;
  .check{
    color: #2E9E38;
    :hover{
      color: #008000;
    }
  }
  .close{
    color: #FF4373;
    :hover{
      color: #ff004d;
    }
  }
  :active{
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;