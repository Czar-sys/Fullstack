import React from 'react'

const PersonForm = ({addPerson,newName,handleName,newNumber,handleNumber}) => {
  return (
    <div><form onSubmit={addPerson}>
    <div>
      name:{" "}
      <input
        type="text"
        placeholder={"Add a new name"}
        value={newName}
        onChange={handleName}
      />
    </div>
    <div>
      number:{" "}
      <input
        type="text"
        placeholder={"Add a number"}
        value={newNumber}
        onChange={handleNumber}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form></div>
  )
}

export default PersonForm