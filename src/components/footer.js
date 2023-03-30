import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaFacebookMessenger, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

export default function Footer() {
    
    const list = [
        {
            icon: <FaFacebook style={{color: '#4267B2', fontSize: "1.5em"}}/>,
            link: 'https://www.facebook.com/dra.samelapediatra/',
            name: 'Facebook'
        },
        {
            icon: <FaFacebookMessenger style={{color: '#006AFF', fontSize: "1.5em"}}/>,
            link: 'https://www.messenger.com/t/dra.samelapediatra/',
            name: 'Messenger'
        },
        {
            icon: <FaInstagram style={{color: '#E1306C', fontSize: "1.5em"}}/>,
            link: 'https://www.instagram.com/dra.samelapediatra/',
            name: 'Instagram'
        },
        {
            icon: <FaFacebookMessenger style={{color: '#E1306C', fontSize: "1.5em"}}/>,
            link: 'https://ig.me/m/dra.samelapediatra',
            name: 'Direct'
        },
        {
            icon: <FaYoutube style={{color: '#FF0000', fontSize: "1.5em"}}/>,
            link: 'https://www.youtube.com/@dra.samelapediatra70',
            name: 'Youtube'
        },
        {
            icon: <FaMapMarkerAlt style={{color: '#DB4437', fontSize: "1.5em"}}/>,
            link: 'https://goo.gl/maps/hE8RHAVTWoVUd6vP8',
            name: 'R. Bernardo Torres, 52'
        },
        {
            icon: <FaWhatsapp style={{color: '#25D366', fontSize: "1.5em"}}/>,
            link: 'https://wa.me/5531998238728',
            name: '(31) 99823-8728'
        }
    ];
  return (
    <Container>
        {list.map((element, index) => {
            return (

                    <IconCircle key={index} onClick={() => { window.open(`${element.link}`, "_blank") }}>
                    {element.icon}
                    {element.name}
                    </IconCircle>
            )
        })}
        <a href="tel:3138731403">
            <IconCircle >
                <FaPhone style={{fontSize: "1.5em"}}/>
                (31) 3873-1403
            </IconCircle>
        </a>
        <a href={"mailto:dra.samelapediatra@gmail.com"}>
            <IconCircle>
                <MdEmail style={{color: '#F25022', fontSize: "1.5em"}}/>
                dra.samelapediatra@gmail.com
            </IconCircle>
        </a>

    </Container>
  )
}

const Container = styled.div`
    width: 100vw;
    height: 50px;
    background: #A8CEFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px 15px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0px 10px;
    a{
        color: black;
        text-decoration: none;
    }
    position: fixed;
    left: 0;
    bottom: 0;
`;
const IconCircle = styled.div`
    height: 40px;
    background: #FEDBA1;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    cursor: pointer;
    :hover{
        background-color: #DCC2DE;
    }
    :active{
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;