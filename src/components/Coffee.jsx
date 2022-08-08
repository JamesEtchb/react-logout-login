import { useState } from 'react'

export default function Coffee() {
  const [coffeeList, setCoffeeList] = useState()

//this is the same as the async await method below but using .then
//   const getCoffee = (temperature) => {
//     fetch(`https://api.sampleapis.com/coffee/${temperature}`)
//       .then((results) => results.json())
//       .then((data) => setCoffeeList(data))
//       .catch((err) => alert(err))
//   }

  const getCoffeeSync = async (temperature) => {
    try {
        const results = await fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        const data = await results.json()
        setCoffeeList(data)
    }
    catch(err){
        alert(err)
    }
  }

  return (
    <>
      <button onClick={() => getCoffeeSync('hot')}>HOT</button>
      <button onClick={() => getCoffeeSync('iced')}>ICED</button>
      <section>
        <h2>Coffee List</h2>
        {!coffeeList ? (
          <p>Loading...</p>
        ) : (
          coffeeList.map((coffee) => (
            <ui>
              <ui key={coffee.id}>
                <b><i>{coffee.title}</i></b>
              </ui><br />
              <li key={coffee.id}>{coffee.description}</li>
              <br />
            </ui>
          ))
        )}
      </section>
    </>
  )
}
