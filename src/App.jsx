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
  width: 220px;

  display: flex;
  flex-direction: column;
  gap: 1em;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

function App() {
  const [open1, setOpen1] = useState()
  const [open2, setOpen2] = useState()
  const [open3, setOpen3] = useState()
  const [open4, setOpen4] = useState()

  return (
    <Container>
      <h1>Modal demo</h1>
      <Btns>
        <button onClick={setOpen1}>Open modal 1 : Text</button>
        <button onClick={setOpen2}>Open modal 2 : JSX</button>
        <button onClick={setOpen3}>Open modal 3 : Formular</button>
        <button onClick={setOpen4}>Open modal 4 : No background</button>
      </Btns>
      <Modal open={open1} setOpen={setOpen1}>
        Modal 1 : The most basic modal example
      </Modal>
      <Modal open={open2} setOpen={setOpen2}>
        <>
          <h2>Title</h2>
          <p>Modal 2 : Modal with JSX</p>
        </>
      </Modal>
      <Modal open={open3} setOpen={setOpen3}>
        <Form>
          <h2>Formulaire</h2>
          <label htmlFor="name">Name : </label>
          <input id="name" type="text" />

          <label htmlFor="email">Email :</label>
          <input id="email" type="email" />

          <label htmlFor="select">Select :</label>
          <select id="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div>
            <label htmlFor="option">Option: </label>
            <input type="checkbox" id="option" />
          </div>
        </Form>
      </Modal>
      <Modal open={open4} setOpen={setOpen4} background={false}>
        Modal 4 : Modal without background
      </Modal>
    </Container>
  )
}

export default App
