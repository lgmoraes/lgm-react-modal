import { useState, createContext } from 'react'
import Modal from './Modal'

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState(null)

  const toggleModal = () => {
    setOpen(!open)
  }

  return (
    <ModalContext.Provider value={{ open, toggleModal, setContent }}>
      {children}
      <Modal open={open} content={content} toggleModal={toggleModal} />
    </ModalContext.Provider>
  )
}
