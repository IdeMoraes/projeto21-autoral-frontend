import Header from "../../components/header.js";
import Footer from '../../components/footer.js';
import Sidebar from "../../components/sidebar.js"
import HomeContent from "../../components/homeContent.js"
import CalendarContent from "../../components/calendarContent.js"
import AuthForm from '../../components/authentication/authForm.js';
import Head from 'next/head';
import styled from "styled-components";
import { useState } from "react";
import UserContext from "../../contexts/contexts.js";

export default function Home() {
  const [user, setUser] = useState({
    name: '',
    type: '',
    token: ''
  });
  const [activeContent, setActiveContent] = useState('HomeContent');
  const [authForm, setAuthForm] = useState(false);
  return (
    <UserContext.Provider value={{user, setUser}}>
        <Head>
          <title>Consultório Dra. Sâmela</title>
        </Head>
        <Header setAuthForm={setAuthForm}/>
        <Middle>
          <Sidebar setActiveContent={setActiveContent}/>
          {activeContent==='HomeContent'&&<HomeContent/>}
          {activeContent==='CalendarContent'&&<CalendarContent/>}
          {authForm && <AuthForm setAuthForm={setAuthForm}/>}
        </Middle>
        <Footer/>
      </UserContext.Provider>
  )
}

const Middle = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 75px;
  display: flex;
`;