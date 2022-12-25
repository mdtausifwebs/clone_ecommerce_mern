import React from 'react'
import footercss from "../../styles/home/footer.module.css"
const Footer = () => {
  return (
    <div className={footercss.container}>
      <div className={footercss.footersocial}>
        <h1>icons</h1>
      </div>
      <div className={footercss.copywrite}>
        <span>copywrite</span>
      </div>
    </div>
  )
}

export default Footer

