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
    errorMsg: '',
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeTopic = event => {
    this.setState({activeTopicId: event.target.value})
  }

  render() {
    const {activeTopicId, userInput, showSubmitError, errorMsg} = this.state
    const findData = topicsList.find(each => each.id === activeTopicId)
    return (
      <MeetContext.Consumer>
        {value => {
          const {addData} = value
          const onClickRegister = event => {
            event.preventDefault()
            const {history} = this.props
            if (userInput !== '') {
              const inputData = {
                name: userInput,
                topic: findData.displayText,
              }
              addData(inputData)
              history.replace('/')
            } else {
              this.setState({
                errorMsg: 'Please enter your name',
                showSubmitError: true,
              })
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
                  {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
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
