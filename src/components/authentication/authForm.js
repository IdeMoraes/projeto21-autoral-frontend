import styled from "styled-components"
import { useContext, useEffect, useState } from "react";
import { countUsers, logout } from "../../api.js";
import SignupAdmin from "./signupAdmin.js";
import Login from "./login.js";
import Logout from"./logout.js";
import UserContext from "../../contexts/contexts.js";

export default function AuthForm({setAuthForm}) {
  const [noAdminUser, setNoAdminUser] = useState(false);
  const {user} = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await countUsers();
        if(res===0) setNoAdminUser(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
        {noAdminUser ? <SignupAdmin setAuthForm={setAuthForm} setNoAdminUser={setNoAdminUser}/> : !user.token? <Login setAuthForm={setAuthForm}/> : <Logout setAuthForm={setAuthForm}/>}
    </>
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

export { Container, Buttons, Icon };