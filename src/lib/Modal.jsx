import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import closeImg from './close.png'

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
  padding-top: 46px;
  margin: 1em;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.4);

  visibility: visible;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1em;
`

const CloseButton = styled.div`
  width: 16px;
  height: 16px;

  background: no-repeat center url(${closeImg});
  background-size: contain;
  opacity: 0.5;
  cursor: pointer;

  position: absolute;
  top: 1em;
  right: 1em;
`

function stopPropagation(e) {
  e.stopPropagation()
}

function Modal({
  open,
  setOpen,
  children,
  backgroundStyle,
  modalStyle,
  accessibility = true,
  background = true,
  btnClose = false,
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
      style={backgroundStyle}
      open={open}
      onClick={toggleModal}
      onKeyDown={onkeydown}
      aria-hidden={!open}
      role="dialog"
      tabIndex={0}
      background={background}
    >
      <ModalWrapper
        style={modalStyle}
        onClick={stopPropagation}
        ref={modal}
        tabIndex={0}
      >
        <CloseButton onClick={toggleModal} />
        {children}
        {btnClose && <button onClick={toggleModal}>{btnClose}</button>}
      </ModalWrapper>
    </Background>
  )
}

export default Modal
