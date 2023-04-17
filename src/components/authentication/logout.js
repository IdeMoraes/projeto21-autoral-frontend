import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { Container, Buttons, Icon } from './authForm.js';
import { logout } from "../../api.js"
import { useContext } from 'react';
import UserContext from '../../contexts/contexts.js';

export default function Logout({setAuthForm}){
    const {user, setUser} = useContext(UserContext);
    async function handleLogout(){
      try {
        await logout(user.token);
        setUser({
          name: '',
          type: '',
          token: ''
        });
        alert('Logout realizado com sucesso! \u{1F64F}');
      } catch (error) {
          console.log(error.response.data);
      }
    }
    return (
      <Container>
        <div>Logout</div>
        <div style={{ fontSize: '18px', marginTop: '10px'}}>
          Usuário atual:
          <span style={{ fontWeight: 'bold', color: '#F4468E'}}> {user.name}</span><p/>
          Deseja encerrar a sessão?
        </div>
        <Buttons>
          <Icon onClick={()=>{handleLogout()}}>
            <AiFillCheckCircle className="check" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
          </Icon>
          <Icon onClick={()=>{setAuthForm(false)}}>
            <AiFillCloseCircle className="close" style={{ fontSize: "1.5em", borderRadius: '50%' ,boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
          </Icon>
        </Buttons>
      </Container>
    )
  }