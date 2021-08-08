import { FC, useState, ChangeEvent, FormEvent} from 'react'
import styled from 'styled-components'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'

const App: FC = () => {
  const [formView, setFormView] = useState<string>('')
  const [obje, setObje] = useState<string>('')

  const changeView = (e: ChangeEvent<HTMLInputElement>) => {
    setFormView(e.target.value)
  }

  const returnRondom = (e: FormEvent<HTMLFormElement>, text: string) => {
    e.preventDefault()
    const inputArray: string[] = text.split(/\s|　/)
    setObje(inputArray[Math.floor(Math.random() * inputArray.length)])
  }

  return (
    <All>
      <Title>ランダムに何かを決めるサイト</Title>
      <Description>
        <p>候補を半角または全角スペース区切りで入力してください。</p>
        <p>候補の中から1つをランダムで表示します。</p>
      </Description>

      <form onSubmit={(e) => returnRondom(e, formView)}>
        <Label>入力</Label>
        <Input value={formView} onChange={(e) => changeView(e)} />
        <Button />
      </form>

      <ResultArea>
        <p>結果</p>
        {obje !== '' && (<span>
          <Result>{ obje }</Result>
          <p>が選ばれました！</p>
        </span>
        )}
      </ResultArea>
    </All>
  )
}

const All = styled.div`
  margin: 50px 20%;
`

const Title = styled.h1`
  text-align: center;
`

const Description = styled.div`
  text-align: center;
`

const ResultArea = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-top: 80px;
  border: 1px solid;
`

const Result = styled.strong`
  color: red;
`

export default App;
