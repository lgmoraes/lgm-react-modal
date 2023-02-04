# Getting Started lgm-react-modal

## Features

- Accessibility for forms
- Optionnal background
- Custom styles
- Modal in modal


## Install

```console
npm install lgm-react-modal
```


## Basic use

```jsx
import Modal from 'lgm-react-modal'

function App() {
  const [open, setOpen] = useState()

  return (
    <>
      <button onClick={setOpen}>Open modal</button>

      <Modal open={open} setOpen={setOpen}>
        Your text or JSX here...
      </Modal>
    </>
  )
}
```


## Non-blocking modal

You can disable background to make non-blocking modal

```jsx
<Modal open={open} setOpen={setOpen} background={false}>
  Your text or JSX here...
</Modal>
```


## Custom styles

You can pass custom styles with `backgroundStyle` and `modalStyle`

```jsx
<Modal
  open={open}
  setOpen={setOpen}
  backgroundStyle={{ backgroundColor: 'rgba(0, 0, 124, 0.4)' }}
  modalStyle={{
    background:
      'linear-gradient(to bottom,#99ccff 0%,#60abf8 44%,#1e76ce 100%)',
  }}
>
  Modal with custom style
</Modal>
```


## Disable accessibility handling

You can disable accessibility handling (focus on form elements, exit on ESC press)

```jsx
<Modal open={open} setOpen={setOpen} accessibility={false}>
  Your text or JSX here...
</Modal>
```


## Add a close button

```jsx
<Modal open={open} setOpen={setOpen} closeBtn="Your text">
  Your text or JSX here...
</Modal>
```
