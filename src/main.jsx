import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Garage from './Garage'
import Button from './Button'
import App from './App'
// import product from './product'
import Productcard from './Productcard'
import product from './product'
// let x = "Carola"
// let x = [1964, 1965, 1966]; Array example
// let y = {name: "Ford", model: "Mustang"}; Object example

// object example
// const carInfo={
//   name: "Ford",
//   model: "Mustang",
//   year: 2025,
//   color:"red"
// }

// Array example
// const carInfo = ["Ford", "Mustang", 2025, "red"]

// const handler = function() {
//   alert("Button Clicked");
// };
// const handler2 = function() {
//   alert("more details");
// };


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* { 
product.map((item) => {
  return (
    <div key={item.name} style={{
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '15px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '300px',
      display: 'inline-block'
    }}>
      <img src={item.imageUrl} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h1 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '10px' }}>
        {item.name}
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#007bff', fontWeight: 'bold' }}>
        Price: ${item.price}
      </p>
    </div>
  )
})} */}
    {/* <Button handler={handler} lable="click me"/> */}
    {/* <Button handler={handler2} lable="more details"/> */}
    {/* <App /> */}
    {/* // <Garage/> */}
    {
      product.map((item) => {
        return (
          <Productcard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )
      })
    }
    <Productcard/>
  </StrictMode>,
)
