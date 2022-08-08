import { useState } from 'react'

export default function Coffee() {
  const [coffeeList, setCoffeeList] = useState()
  const getCoffee = (temperature) => {
    fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(results => results.json())
        .then(data => setCoffeeList(data))
        .catch(err => alert(err))
    
  }
  return (
    <>
      <button onClick={() => getCoffee('hot')}>HOT</button>
      <button onClick={() => getCoffee('iced')}>ICED</button>
      <section>
        <h2>Coffee List</h2>
        {!coffeeList 
        ? <p>Loading...</p>
        : coffeeList.map(coffee => (
            <ui>
            <ui key={coffee.id}><b>{coffee.title}</b></ui>
            <li key={coffee.id}>{coffee.description}</li>
            </ui>
        ))
        }
      </section>
    </>
  )
}
