import styled from 'styled-components'

const Background = styled.div`
  background: rgba(50, 50, 50, 0.5);

  position: fixed;
  justify-content: center;
  align-items: center;

  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

const ModalWrapper = styled.div`
  padding: 1em;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.4);

  display: flex;
  flex-direction: column;
  gap: 1em;
`

function stopPropagation(e) {
  e.stopPropagation()
}



function Modal({ open, setOpen, children }) {
  function toggleModal() {
    setOpen(!open)
  }

  return (
    <Background open={open} onClick={toggleModal}>
      <ModalWrapper onClick={stopPropagation}>
        {children}
        <button onClick={toggleModal}>Close</button>
      </ModalWrapper>
    </Background>
  )
}

export default Modal
