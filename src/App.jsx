import styled from 'styled-components'
import { useState } from 'react'

import Modal from './lib/Modal'

const Container = styled.div`
  padding: 2em;
  box-sizing: border-box;

  background: rgb(232, 232, 232);

  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

const Btns = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  gap: 1em;
`

function App() {
  const [open1, setOpen1] = useState()
  const [open2, setOpen2] = useState()

  return (
    <Container>
      <h1>Modal demo</h1>
      <Btns>
        <button onClick={setOpen1}>Open modal 1 : Text</button>
        <button onClick={setOpen2}>Open modal 2 : JSX</button>
      </Btns>
      <Modal open={open1} setOpen={setOpen1}>
        Modal 1 : The most basic modal example
      </Modal>
      <Modal open={open2} setOpen={setOpen2}>
        <>
          <h1>Title</h1>
          <p>Modal 2 : Modal with JSX</p>
        </>
      </Modal>
    </Container>
  )
}

export default App
