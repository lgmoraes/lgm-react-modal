import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Background = styled.div`
  background: rgba(50, 50, 50, 0.5);

  position: fixed;
  justify-content: center;
  align-items: center;

  visibility: ${(props) => (props.background ? 'visible' : 'hidden')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

const ModalWrapper = styled.div`
  padding: 1em;
  margin: 1em;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.4);

  visibility: visible;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

function stopPropagation(e) {
  e.stopPropagation()
}

function Modal({
  open,
  setOpen,
  children,
  accessibility = true,
  background = true,
}) {
  const modal = useRef(null)

  function toggleModal() {
    setOpen(!open)
  }

  function getFocusables(el) {
    return el.querySelectorAll('input, select, textarea, button')
  }

  function onkeydown(e) {
    if (!accessibility) return

    const key = e.key.toUpperCase()

    if (key === 'ESCAPE') {
      toggleModal()
    } else if (key === 'TAB') {
      const focusables = getFocusables(e.currentTarget)
      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.target === last && e.shiftKey === false) {
        first.focus()
        e.preventDefault()
      } else if (e.target === first && e.shiftKey === true) {
        last.focus()
        e.preventDefault()
      } else if (e.target === modal.current && e.shiftKey === true) {
        last.focus()
        e.preventDefault()
      }
    }

    e.stopPropagation()
  }

  useEffect(() => {
    if (!open) return

    if (accessibility) modal.current.focus()
  }, [accessibility, open])

  return (
    <Background
      open={open}
      onClick={toggleModal}
      onKeyDown={onkeydown}
      aria-hidden={!open}
      role="dialog"
      tabIndex={0}
      background={background}
    >
      <ModalWrapper onClick={stopPropagation} ref={modal} tabIndex={0}>
        {children}
        <button onClick={toggleModal}>Close</button>
      </ModalWrapper>
    </Background>
  )
}

export default Modal
