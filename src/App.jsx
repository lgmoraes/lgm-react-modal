import { useContext } from 'react'
import styled from 'styled-components'

import { ModalContext } from './lib/ModalContext'

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
  display: flex;
  gap: 1em;
`

function App() {
  const { toggleModal, setContent } = useContext(ModalContext)

  function openModal1() {
    setContent('Modal 1 : The most basic modal example')
    toggleModal()
  }

  function openModal2() {
    setContent(
      <>
        <h1>Title</h1>
        <p>Modal 2 : Modal with JSX</p>
      </>
    )
    toggleModal()
  }

  return (
    <Container>
      <h1>Modal demo</h1>
      <Btns>
        <button onClick={openModal1}>Open modal 1</button>
        <button onClick={openModal2}>Open modal 2</button>
      </Btns>
    </Container>
  )
}

export default App
