import React from 'react'

const Filter = ({search,setSearch}) => {
  return (
    <div>filter shown with: <br />
    <input
      type="text"
      placeholder={"Search"}
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    /></div>
  )
}

export default Filter