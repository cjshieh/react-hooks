// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteAnimal({name, onAnimalNameChange}) {  
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={name}
        onChange={onAnimalNameChange}
      />
    </div>
  )
}

function Display({name, animalName}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animalName}!`}</div>
}

function App() {
  // 🐨 add a useState for the animal
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal name={animal} onAnimalNameChange={event => setAnimal(event.target.value)}/>
      {/* 🐨 pass the animal prop here */}
      <Display name={name} animalName={animal}/>
    </form>
  )
}

export default App
