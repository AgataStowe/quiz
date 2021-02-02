import db from '../db.json';
import Head from 'next/head';
import { useState } from 'react';

import Widget from '../scr/components/Widget';
import Footer from '../scr/components/Footer';
import QuizLogo from '../scr/components/QuizLogo';
import GitHubCorner from '../scr/components/GitHubCorner';
import QuizBackground from '../scr/components/QuizBackground';
import styled from 'styled-components';

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    margin-left: auto;
    @media screen and (max-width: 500px) {
      margin: auto;
      padding: 15px;
    }
`;


export default function Quiz() {
  const questions = db.questions;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Mario Bros</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>A fast quiz about the Mario Bros.</h1>
          </Widget.Header>
          <Widget.Content>
            <form>
            </form>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/agatastowe" />
    </QuizBackground>
  );
}
