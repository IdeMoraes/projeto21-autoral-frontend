import Image from 'next/image';
import styled from "styled-components";
import logomark from '../../public/images/logomark.png';

export default function Header() {
  return (
    <Container>
      <Image src={logomark} alt="logomark" width={165} height={61} style={{borderRadius: "15px"}}/>
      <div className='middle-box'>
        Dra.
        <Logotype>Sâmela Rocha de Moraes Speroto</Logotype>
      </div>
      <div className='crm'>PEDIATRA<br/>CRM/MG 75327</div>
    </Container>
  )
}

const Container = styled.div`
  height: 75px;
  width: 100vw;
  background-color: #FBC1BF;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  flex-wrap: wrap;
  font-size: 25px;
  align-items: center;
  justify-content: space-evenly;
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
`; 
const Logotype = styled.div`
  font-family: 'Sacramento', cursive;
  font-size: 50px;
`;
  