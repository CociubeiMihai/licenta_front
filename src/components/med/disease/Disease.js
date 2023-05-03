import React, { useState } from 'react'
import Navbar from '../../navbar/Navbar'
import "./Disease.css"
import InsertDiseaseModal from './InsertDiseaseModal'
import { allTypes, saveType } from '../../../services/DiseaseService'
import CategoryModal from './CategoryModal'
import IncompatibilityModal from './IncompatibilityModal'

function Disease() {
  const [insertDict, setInsertDict] = useState({
    open: false,
    value: "",
    placeholder: "Type the new disease",
    label : "Insert new disease"
  })
  const [typedict, setTypeDict] = useState({
    open: false,
    value: "",
    placeholder: "Type a new category",
    label : "Insert new category",
  })
  const [incompatibilityDict, setIncompatibilityDict] = useState({
    open: false,
    value: [],
    id: "",
    label : "Incompatibility classes",
  })
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState("")

  const handleSaveDisease = () => {
    console.log(insertDict.value)
  }

  const handleOpenIncompatibility = () =>{
    setIncompatibilityDict({...incompatibilityDict, "open": true})
    allTypes().then((r) => {
      setTypes(r.data)
    })
  }

  const handleOpen = () => {
    setInsertDict({...insertDict, "open": true})
    allTypes().then((r) => {
      setTypes(r.data)
    })
  }

  const handleOpenCategoryModal = () => {
    setTypeDict({...typedict, "open": true})
  }

  const handleSaveCategory = () => {
    saveType(typedict.value)
    setTypeDict({...typedict, "open": false, "value":""})
  }

  return (
    <div>
      <Navbar />
      <div className='general'>
        <div className='buttons'>
          <button onClick={handleOpenCategoryModal}>Create category</button>
          <button onClick={handleOpen}>Insert disease</button>
          <button onClick={handleOpenIncompatibility}>Create incompatibility cases</button>
        </div>
      </div>
      <InsertDiseaseModal 
        dictionary = {insertDict}
        close = {() => setInsertDict({...insertDict, "open": false})}
        changeValue = {(e) => setInsertDict({...insertDict, "value": e.target.value})}
        onSave = {handleSaveDisease}
        items = {types}
        itemSelected = {selectedType}
        handleDropdownChange = {(e) => setSelectedType(e.target.value)}
      />
      <CategoryModal 
        dictionary = {typedict}
        close = {() => setTypeDict({...typedict, "open": false})}
        changeValue = {(e) => setTypeDict({...typedict, "value": e.target.value})}
        onSave = {handleSaveCategory}
      />
      <IncompatibilityModal
        dictionary = {incompatibilityDict}
        close = {() => setIncompatibilityDict({...incompatibilityDict, "open": false})}
        items = {types}
      />
    </div>
  )
}

export default Disease