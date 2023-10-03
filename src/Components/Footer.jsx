import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
       <div className="foot mb-5 ">
        <div className=" ms-5">
            <img width={'200px'} src="https://thumbs.dreamstime.com/b/food-icon-restaurant-menu-design-spoon-fork-52085812.jpg" alt="" />
        </div>
        <div className="">
        <div className="guides d-flex flex-column" >
          <h4 style={{ textDecoration: 'none', color: 'white',fontSize:'30px' }}> Guides</h4>
          <Link style={{ textDecoration: 'none', color: 'white',fontSize:'20px' }} to={'https://react.dev/'} >React</Link>
          <Link style={{ textDecoration: 'none', color: 'white',fontSize:'20px' }} to={'https://react-bootstrap.github.io'} >React Bootstrap</Link>
          <Link style={{ textDecoration: 'none', color: 'white',fontSize:'20px' }} to={'https://reactrouter.com/en/main'} >Routing </Link>
        </div>
        </div>
        <div className="">
        <div className='contact'>
          <h4 style={{fontSize:'30px'}} >FeedBack Us <i className="fa-solid fa-comments" style={{ color: 'white' }}></i></h4>
          <div className='boxx'>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <span class="input-group-text bg-info text-dark" id="basic-addon2">@example.com</span>
            </div>
          </div>
          <div className='icons me-5 mt-4 d-flex justify-content-center align-items-center'>
            <i className="fa-brands fa-linkedin me-3 fa-xl" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-twitter me-3 fa-xl" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-instagram me-3 fa-xl" style={{ color: 'white' }}></i>
            <i className="fa-brands fa-facebook fa-xl" style={{ color: 'white' }}></i>
          </div>
        </div>
        </div>
       
    </div>
    <p className=' d-flex justify-content-center align-items-center fs-5' >All rights Reserved © Food-Recipe App ® Alex A P</p>
    </>
  )
}

export default Footer