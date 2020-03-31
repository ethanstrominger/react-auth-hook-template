import React from 'react'
import Footer from '../Footer/Footer'

// MainLayout is used to wrap many of the components
// The components are called by app.js
const MainLayout = props => (
  <div>
    <h1>Interwebs Moving Picture Database</h1>

    {props.children}

    <Footer />
  </div>
)

export default MainLayout
