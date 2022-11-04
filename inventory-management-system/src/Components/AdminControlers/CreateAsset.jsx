import React from 'react'

function CreateAsset() {
  return (
    <div className='form-area box-border'>
      <div><label>Asset Name: </label>
<input type='text'></input></div>
<div><label>Serial.No:</label>
<input type='text'></input></div>
<div><label>Description:</label>
<textarea></textarea></div>
<div><label>Owner:</label>
<input type='text'></input></div>
<div><label>Date:</label>
<input type='date'></input></div>
<button>Add</button>
    </div>
    
  )
}

export default CreateAsset