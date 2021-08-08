import { FC } from 'react'
import styled from 'styled-components'

const Label: FC = ({ children }) => {
  return(
    <LabelArea>
      <label>{ children }</label>
    </LabelArea>
  )
}

const LabelArea = styled.div`
  font-size: 1.5rem;
`

export default Label
