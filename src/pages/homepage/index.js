import Header from "../../components/header.js";
import Footer from '../../components/footer.js';
import Sidebar from "../../components/sidebar.js"
import HomeContent from "../../components/homeContent.js"
import AuthForm from '../../components/authForm.js'
import Head from 'next/head';
import styled from "styled-components";
import { useState } from "react";

export default function Home() {
  const [authForm, setAuthForm] = useState(false)
  return (
    <>
      <Head>
        <title>Consultório Dra. Sâmela</title>
      </Head>
      <Header setAuthForm={setAuthForm}/>
      <Middle>
        <Sidebar/>
        <HomeContent/>
        {authForm && <AuthForm setAuthForm={setAuthForm}/>}
      </Middle>
      <Footer/>
    </>
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