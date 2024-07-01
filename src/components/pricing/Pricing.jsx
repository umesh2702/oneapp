import React from "react"
import Back from "../common/Back"
import PriceCard from "../home/price/PriceCard"
import img from "../images/pricing.jpg"
import "../home/price/price.css"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const Pricing = () => {
  return (
    <>
    <Header/>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Pricing
