import React from 'react'

function Productcard({ name, price, imageUrl, description }) {
  // Styles Objects
  const cardStyle = {
    width: '300px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    margin: '15px',
    fontFamily: 'sans-serif',
    transition: '0.3s',
    border: '1px solid #eee'
  };

  const imageContainer = {
    width: '100%',
    height: '200px',
    backgroundColor: '#f0f0f0'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const contentStyle = {
    padding: '16px'
  };

  const titleStyle = {
    fontSize: '1.2rem',
    margin: '0 0 8px 0',
    color: '#333'
  };

  const descStyle = {
    fontSize: '0.9rem',
    color: '#666',
    lineHeight: '1.4',
    marginBottom: '15px'
  };

  // FIXED: Yahan dash khatam karke CamelCase use kiya hai
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // 'justify-content' nahi
    alignItems: 'center'             // 'align-items' nahi
  };

  const priceStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#27ae60'
  };

  const btnStyle = {
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainer}>
        <img src={imageUrl} alt={name} style={imgStyle} />
      </div>
      <div style={contentStyle}>
        <h1 style={titleStyle}>{name}</h1>
        <p style={descStyle}>{description}</p>
        <div style={footerStyle}>
          <span style={priceStyle}>${price}</span>
          <button style={btnStyle}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Productcard