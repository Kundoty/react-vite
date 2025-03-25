import { useState } from 'react'
import reactLogo from './assets/react.svg'
import nameLogo from '/name.svg'
import viteLogo from '/vite.svg'
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
          <div>
            <CompanyList />
          </div>
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


// // We can import assets and React functionality up here
// // Oh, and I'm a JavaScript comment. You'll see
// import {useState} from 'react';

// import './App.css';

// // Fake login state to test conditionals. You wouldn't do this in real life :)
// //const [isLoggedIn, setIsLoggedIn] = useState(false);

// // Working with data
// // - Here we define a single object called book'
// // - The book object has properties (title, author, etc.)
// // - Each property has a name (title) and value (A Farewell to Arms)
// // - We're "hard coding" the data here, but this could also come from a database or API
// const book = {
//   title: 'A Farewell to Arms',
//   author: 'Earnest Hemingway',
//   published: '1929',
//   image: 'https://upload.wikimedia.org/wikipedia/en/4/48/Hemingway_farewell.png',
//   width: '264',
//   height: '378'
// };

// // - Here we have an array of objects
// // - We might see this when we have multiple rows of results from our database or API
// const magazines = [
//   { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
//   { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
//   { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
// ];

// // React Components
// // - React applications are built out of components
// // - Components are JavaScript functions that return markup (JSX)
// // - Components are UI elements that have their own logic and appearance
// // - React Components always start with a capital letter
// // - In this example, we could use the JSX markup <Bookshelf /> to display our component
// function Bookshelf() {
//   return (
//     <div>
//       {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
//       {/* This is a JSX comment */}
//       <h2>{book.title} ({book.published})</h2>
//       <p>{book.author}</p>
//       {/* This a conditional that checks if an image exists before displaying it */}
//       {book.image &&
//       <img
//         className="bookCover"
//         src={book.image}
//         alt={book.title + ' cover'}
//         style={{
//           width: book.width,
//           height: book.height
//         }}
//       />
//       }
//     </div>
//   );
// }

// // - This component displays the list of magazines
// // - Because we're reading and displaying multiple objects, we need to use the .map method
// // - magazines.map _maps_ each array item to the zine object until there are no more objects to map (it loops)
// // - We then display properties from zine object in each iteration
// function ZineRack() {
//   const listZines = magazines.map(zine =>
//     <li
//       key={zine.id}
//       style={{
//         color: zine.isAvailable ? 'green' : 'red'
//       }}
//     >
//       {zine.title}
//     </li>
//   );
//   return (
//     <ul>{listZines}</ul>
//   )
// }

// // Hooks
// // - Functions starting with use are called Hooks
// // - useState is a built-in Hook provided by React
// // - You can find other built-in Hooks in the API reference
// // - You can also write your own Hooks by combining the existing ones
// // - Hooks are more restrictive than other functions
// // - You can only call Hooks at the top of your components (or other Hooks)
// // - If you want to use useState in a condition or a loop, extract a new component and put it there

// // Respond to events
// function MagicButton() {
//   const [count, setCount] = useState(0);
//   function doMagic() {
//     setCount(count + 1);
//     alert('Are you not entertained?');
//   }

//   return (
//     <button onClick={doMagic}>
//       Magic {count} times
//     </button>
//   );
// }

// // This is the main component in the file
// // It's called below using the 'export default' keywords
// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     // Use className for CSS and HTML classes
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>
//         {isLoggedIn ? (
//           // React components start with a capital letter to distinguish them from HTML elements
//           <>
//             <MagicButton />
//             <ZineRack />
//           </>
          
//         ) : (
//           <div>
//             <p>Please login.</p>
//             <button onClick={() => setIsLoggedIn(true)}>Login</button>
//           </div>
//         )}
//         </div>
        
//       </header>
//     </div>
//   );
// }

// // The export default keywords specifiy the main component in the file
// export default App;