import React from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"

const Blog = () => {
  return (
    <>
    <Header/>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Blog
