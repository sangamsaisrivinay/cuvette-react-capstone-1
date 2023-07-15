import React from 'react'
import Modal from 'react-modal'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTimesCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


Modal.setAppElement('#root')

const AddNote = () => {

const [modalIsOpen, setModalIsOpen] = useState(false)
const [isValidNote, setIsValidNote] = useState(false)
const [note, setNote] = useState('')


const myStyles={
  formStyle:{
    height: "80%",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
  },
  textAreaStyle:{
    height: "100%",
    width: "100%",
    margin: "auto",
    border: "none",
    outline: "none",
    background: "rgba(0,0,0,0)",
    color: "white",
  },
  formButtonStyle:{
    border: "none",
    outline: "none",
    background: "green",
    fontWeight: "bold",
    color: "white",
    padding: "5px 0",
    borderRadius: "5px",
    cursor: "pointer",
  }
}

const openModal = () => {
  setModalIsOpen(true)
}

const closeModal = () => {
  setModalIsOpen(false)
}

const checkNoteValidity = (event) => {

  event.preventDefault();
  const value = note.trim();
  if (value) {
    setIsValidNote(true);
    const storedJsonString = localStorage.getItem('notes');
    let storedArray = JSON.parse(storedJsonString);
    storedArray.push(note);
    const updatedJsonString = JSON.stringify(storedArray);
    localStorage.setItem('notes', updatedJsonString);
    setNote('');
    closeModal();
    window.location.reload();
  }
  else {
    setIsValidNote(false);
  }
}



const modalStyles = {
  content: {
    width: "200px", // Set the desired width
    height: "50%", // Set the desired height
    margin: "auto", // To center horizontally and vertically
    overflow: "auto", // Enable scrolling if the content is longer than the container
    // position:'relative'
    padding: "2px",
    background: "rgba(0,0,0,1)",
    border: "none",
    boxShadow: "0px 0px 10px 0px black",
  },
  overlay: {
    backgroundColor: "rgba(255,255,255,0.8)",
  },
};

  return (
    <div>
      <button
        onClick={openModal}
        style={{
          borderRadius: "50%",
          padding: "4px 8px",
          background: "#000",
          cursor: "pointer",
          border: "none",
          outline: "none",
          color: "white",
        }}
      >
        <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={modalStyles}
      >
        <button
          style={{
            border: "none",
            outline: "none",
            background: "rgba(0,0,0,0)",
            padding: "2px",
            color: "red",
          }}
        >
          <FontAwesomeIcon
            icon={faTimesCircle}
            style={{ cursor: "pointer" }}
            onClick={closeModal}
          />
        </button>
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: "1px",
          }}
        >
          Add a Note
        </p>
        <form onSubmit={checkNoteValidity} style={myStyles.formStyle}>
          <textarea type="text" value={note}
           onChange={(e) => {
            setNote(e.target.value)
            // setIsValidNote(true)
          }}
            style={myStyles.textAreaStyle}/>
          <button type="submit" style={myStyles.formButtonStyle} >Submit</button>
        </form>

       { !isValidNote &&
       <div style={{ background: "rgba(255,0,0,0.2)", textAlign: "center" }}>
          <p style={{ fontSize: "0.7em", color: "red" }}>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            {" "}not a valid note</p>
        </div>}
      </Modal>
    </div>
  );
}

export default AddNote