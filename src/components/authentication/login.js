import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { Container, Buttons, Icon } from './authForm.js';
import { login } from "../../api.js"
import { useContext, useState } from 'react';
import UserContext from '../../contexts/contexts.js';

export default function Login({setAuthForm}){
    const {setUser} = useContext(UserContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const body = {
      name,
      password
    }
    async function handleLogin () {
      try {
        const res = await login(body);
        const {userName, userType, token} = res;
        setUser({
          name: userName,
          type: userType,
          token
        });
        setAuthForm(false);
        alert('Login realizado com sucesso! \u{1F973}');
      } catch (error) {
        alert("Esses dados estão incorretos! \u{1F624}");
        console.log(error.response.data);
      }
    }
    return (
      <Container>
        <div>Login</div>
        <input placeholder="Usuário" onChange={(event) => {setName(event.target.value)}}/>
        <input placeholder="Senha" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
        <Buttons>
          <Icon onClick={()=>handleLogin()}>
            <AiFillCheckCircle className="check" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
          </Icon>
          <Icon onClick={()=>{setAuthForm(false)}}>
            <AiFillCloseCircle className="close" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
          </Icon>
        </Buttons>
      </Container>
    )
  }