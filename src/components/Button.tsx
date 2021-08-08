import { FC } from 'react'
import styled from 'styled-components'

const Button: FC = () => {
  return(
    <InputButton type="button" value="表示" />
  )
}

const InputButton = styled.input`
  width: 60px;
  padding: 5px;
  background-color: hsl(141, 71%, 48%);
  font-size: 1.2rem;
  color: #EEEEEE;
  border: 1px solid hsl(141, 71%, 48%);
  border-radius: 3px;
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`

export default Button
