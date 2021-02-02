/* eslint-disable react/react-in-jsx-scope */
import styled, { useTheme } from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../scr/components/Widget';
import QuizLogo from '../scr/components/QuizLogo';
import QuizBackground from '../scr/components/QuizBackground';
import Footer from '../scr/components/Footer';
import GitHubCorner from '../scr/components/GitHubCorner';
import { useState } from 'react';

//  const Title = styled.h1` // To replace one tag you must start with uppercase letter
//    font-size: 50px;
//    color: ${({ theme }) => theme.colors.primary};
//  `

// order way
// function Title (props) { // propscidades
//   return (
//     <h1>
//       {props.children}
//     </h1>
//   )
// }

// const BackgroundImage = styled.div` // tag function
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

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

export default function Home() {
  const router = useRouter();
  let [ name, setName ] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AsQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Mario Bros</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();

              router.push(`/quiz?name=${name}`);
            }}>
              <input placeholder=" Type your name"
              onChange= { function (event) {
                // state
                // name = event.target.value;
                setName(event.target.value);
              }} />
              <button type="submit" disabled={name.length === 0}>
                Play
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Others quizes</h1>
          </Widget.Header>
          <Widget.Content>
            <p> Recommedantion </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/agatastowe" />
    </QuizBackground>
  );
}
