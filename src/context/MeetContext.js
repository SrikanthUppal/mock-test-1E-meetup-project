import React from 'react'

const MeetContext = React.createContext({
  data: {},
  addData: () => {},
  buttonState: false,
  changeButtonState: () => {},
})

export default MeetContext
