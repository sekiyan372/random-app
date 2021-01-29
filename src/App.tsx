import React, { useState } from 'react'
import styled from 'styled-components'

const App: React.FC = () => {
  const [formView, setFormView] = useState<string>('')
  const [obje, setObje] = useState<string>('')

  const changeView = (e: any) => {
    setFormView(e.target.value)
  }

  const returnRondom = (text: string) => {
    const inputArray: string[] = text.split(' ')
    setObje(inputArray[Math.floor(Math.random() * inputArray.length)])
  }

  return (
    <All>
      <h1>ランダムに何かを決めるサイト</h1>
      <div className="input-area">
        <label>入力</label>
        <input type="text" value={formView} onChange={(e) => changeView(e)} />
        <input type="submit" value="送信" onClick={() => returnRondom(formView)} />
      </div>
      <div className="result-area">
        <p>{ obje }</p>
      </div>
    </All>
  );
}

const All = styled.div`
  text-align: center;
`

export default App;
