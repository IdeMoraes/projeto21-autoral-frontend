import Image from 'next/image';
import styled from "styled-components";
import logomark from '../../public/images/logomark.png';
import { GiStethoscope } from 'react-icons/gi';
import Link from 'next/link';


export default function Header({setAuthForm}) {
  return (
    <Container>
      <Image src={logomark} alt="logomark" width={165} height={61} style={{borderRadius: "15px"}}/>
      <div className='middle-box'>
        Dra.
        <Logotype>Sâmela Rocha de Moraes Speroto</Logotype>
      </div>
      <div>
        <div className='crm'>
          PEDIATRA<br/>CRM/MG 75327
        </div>
        <GiStethoscope style={{color: '#F25022', fontSize: "0.5em", margin:"0 0 0 25px"}} onClick={()=>{setAuthForm(true)}}/>
      </div>


      
    </Container>
  )
}

const Container = styled.div`
  height: 75px;
  width: 100vw;
  padding-left: 50px;
  padding-right: 25px;
  background-color: #FBC1BF;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  font-size: 25px;
  align-items: center;
  justify-content: space-between;
  .middle-box{
    display: flex;
    align-items: center;
    margin-right: 10px;
  };
  .crm{
    text-align: center;
    font-size: 20px;
  }
  position: fixed;
  left: 0;
  top: 0;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`; 
const Logotype = styled.div`
  font-family: 'Sacramento', cursive;
  font-size: 50px;
`;
  