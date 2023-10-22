import {Link} from 'react-router-dom'
import Header from '../Header'
import MeetContext from '../../context/MeetContext'

import {
  HomeContainer,
  Heading,
  Description,
  RegisterButton,
  RegisterImage,
  TrueHeading,
  TrueDescription,
} from './styledComponents'

const Home = () => (
  <MeetContext.Consumer>
    {value => {
      const {data, buttonState, changeButtonState} = value
      const {name, topic} = data
      const onClickRegister = () => {
        changeButtonState()
      }

      return (
        <>
          <Header />
          <HomeContainer>
            {buttonState ? (
              <>
                <TrueHeading>Hello {name}</TrueHeading>
                <TrueDescription>Welcome to {topic}</TrueDescription>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </>
            ) : (
              <>
                <Heading>Welcome to Meetup</Heading>
                <Description>Please register for the Topic</Description>
                <Link to="/register">
                  <RegisterButton type="button" onClick={onClickRegister}>
                    Register
                  </RegisterButton>
                </Link>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </>
            )}
          </HomeContainer>
        </>
      )
    }}
  </MeetContext.Consumer>
)
export default Home

