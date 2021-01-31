import styled from 'styled-components'
import db from '../db.json'
import Widget from '../scr/components/Widget'
import QuizBackground from '../scr/components/QuizBackground'
import Footer from '../scr/components/Footer'
import GitHubCorner from '../scr/components/GitHubCorner'

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

export  const QuizContainer = styled.div`
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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Mario Bros</h1>
            </Widget.Header>
            <Widget.Content>
              <p> A quiz about the Mario Bros game</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Others quizes</h1>
            </Widget.Header>
            <Widget.Content>
              <p> Recommedation </p>
            </Widget.Content>
          </Widget>
          <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/agatastowe"/>
    </QuizBackground>
  )
}
