import { useState } from 'react'
import reactLogo from './assets/react.svg'
import nameLogo from '/name.svg'
import viteLogo from '/vite.svg'
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const companys = [
  {id: 1, name:'Meta', response: 'no response'},
  {id: 2, name:'Apple', response: 'rejected'},
  {id: 3, name:'Amazon', response: 'accepted'},
  {id: 4, name:'Netflix', response: 'no response'},
  {id: 5, name:'Google', response: 'accepted'},
  {id: 6, name:'Microsoft', response: 'rejected'},
  {id: 7, name:'LinkedIn', response: 'no response'},
  {id: 8, name:'TikTok', response: 'rejected'},
]

const greetings = [
  'Hello!',
  'Hi there!',
  'Hey!',
  'Welcome!',
  'Greetings!',
]

function RandomNum() {
  return Math.floor(Math.random() * greetings.length)
}

function RandomGreeting() {
  const [greeting, setGreeting] = useState('Hello!')
  return (
    <>
      <h1>{greeting}</h1>
      <button onClick={() => setGreeting(greetings[RandomNum()])}>
        Greet Message
      </button>
    </>
  )
}

function CheckRespone(res) {
  switch (res) {
    case "accepted":
      return 'LimeGreen'
    case 'rejected':
      return 'red'
    case 'no response':
      return 'gray'
  }
}

function CompanyList() {
  const listCompanies = companys.map(company =>
    <li
      key={company.id}
      style={{
        color: CheckRespone(company.response)
      }}
    >
      {company.name + ' -- ' + company.response}
    </li>
  )
  return (
    <ul>{listCompanies}</ul>
  )
}

function App() {
  const [posCount, incCount] = useState(0)
  const [negCount, decCount] = useState(10)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      {isLoggedIn ? (
        <div>
          <div className='greets'>
            <RandomGreeting />
          </div>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a>
              <img src={nameLogo} className='logo' alt="Name logo" />
            </a>
          </div>
          <h1>Vite + React + Andy</h1>
          <div className="card">
            <button onClick={() => incCount((count) => count + 1)}>
              count is {posCount}
            </button>
            <button onClick={() => decCount((count) => count - 1)}>
              count is {negCount}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <CompanyList />
        </div>
      ) : (
        <div>
          <h1>Press to Start</h1>
          <button onClick={() => setIsLoggedIn(true)}>Start</button>
        </div>
      )}
    </>
  )
}

export default App
