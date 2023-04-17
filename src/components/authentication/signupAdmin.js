import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { Container, Buttons, Icon } from './authForm.js';
import { signup } from "../../api.js"
import { useState } from 'react';

export default function SignupAdmin({setAuthForm, setNoAdminUser}){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const body = {
      name,
      password,
      type_id: 1
    }
    async function handleSignup () {
      if(password!==confirmPassword){
        alert('As senhas digitadas não conferem! \u{1F624}')
      } else {
        try {
          await signup(body);
          alert('Usuário cadastrado com sucesso! \u{1F973}');
          setNoAdminUser(false);
        } catch (error) {
          alert("Seu cadastro falhou. Confira as regras e tente de novo:\n\u{1F534} O nome só pode conter letras, números, pontos e underscore, sem espaços em branco;\n\u{1F534} A senha deve ter um mínimo de 8 caracteres, incluindo pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.")
          console.log(error.response.data)
        }
      }
    }
    return (
      <Container>
        <div>Cadastrar Usuário Admin</div>
        <input placeholder="Usuário" onChange={(event) => {setName(event.target.value)}}/>
        <input placeholder="Senha" type="password" onChange={(event) => {setPassword(event.target.value)}}/>
        <input placeholder="Confirme a senha" type="password" onChange={(event) => {setConfirmPassword(event.target.value)}}/>
        <Buttons>
          <Icon onClick={()=>handleSignup()}>
            <AiFillCheckCircle className="check" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
          </Icon>
          <Icon onClick={()=>{setAuthForm(false)}}>
            <AiFillCloseCircle className="close" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
          </Icon>
        </Buttons>
      </Container>
    )
  }