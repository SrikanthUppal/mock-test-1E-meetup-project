import {Component} from 'react'
import MeetContext from '../../context/MeetContext'
import Header from '../Header'

import {
  RegisterContainer,
  RegisterImage,
  RightSideForm,
  RegisterHeading,
  Label,
  InputBar,
  SelectBar,
  OptionName,
  Button,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    activeTopicId: topicsList[0].id,
    userInput: '',
    showSubmitError: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({activeTopicId: event.target.value})
  }

  render() {
    return (
      <MeetContext.Consumer>
        {value => {
          const {addData} = value
          const {activeTopicId, userInput, showSubmitError} = this.state
          const onClickRegister = () => {
            const {history} = this.props
            if (userInput === '') {
              this.setState({showSubmitError: true})
            } else {
              const inputsDetails = {
                Name: userInput,
                topic: activeTopicId,
              }
              addData(inputsDetails)
              history.replace('/')
            }
          }
          return (
            <>
              <Header />
              <RegisterContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <RightSideForm onSubmit={onClickRegister}>
                  <RegisterHeading>Let us join</RegisterHeading>
                  <Label htmlFor="input">NAME</Label>
                  <InputBar
                    id="input"
                    type="text"
                    placeholder="Your name"
                    value={userInput}
                    onChange={this.onChangeInput}
                  />
                  <Label htmlFor="select">TOPICS</Label>
                  <SelectBar
                    id="select"
                    value={activeTopicId}
                    onChange={this.onChangeTopic}
                  >
                    {topicsList.map(eachTopic => (
                      <OptionName key={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </OptionName>
                    ))}
                  </SelectBar>
                  <Button type="submit">Register Now</Button>
                  {showSubmitError && (
                    <ErrorMsg>Please enter your name</ErrorMsg>
                  )}
                </RightSideForm>
              </RegisterContainer>
            </>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}

export default Register
