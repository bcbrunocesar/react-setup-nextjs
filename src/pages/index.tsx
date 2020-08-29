import React from 'react';
import Head from 'next/head';

import { Container } from '../styles/pages/Home';
import LogoImg from '../assets/logo-image.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Setup React+NextJS - React</title>
      </Head>

      <LogoImg />
      <h1>ReactJS</h1>
      <p>Setup com ReactJS + Next.js</p>
    </Container>
  );
}

export default Home;
