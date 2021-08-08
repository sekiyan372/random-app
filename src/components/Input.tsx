import { FC, ChangeEventHandler } from 'react'
import styled from 'styled-components'

type Props = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<Props> = (props) => {
  return (
    <InputText type="text" value={props.value} onChange={props.onChange} />
  )
}

const InputText = styled.input`
  width: 85%;
  margin-right: 10px;
  padding: 10px;
  font-size: 1.2rem;
`

export default Input
