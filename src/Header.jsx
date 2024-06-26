import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        
            <header className='w-full sticky top-0 bg-white z-20 px-6 py-2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src="https://i0.wp.com/www.shangrilavoyages.com/wp-content/uploads/2022/05/shangrila-logo.png?fit=210%2C62&ssl=1" alt="Shangrila Voyages Logo" />
                    </div>
                    <div className='flex'>
                        <ul className='flex space-x-10 font-bold'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                            <li><Link to="/journeys">Journeys</Link></li>
                            <li><Link to="/lifemoment">Life Moment</Link></li>
                            <li><Link to="departure">Departure</Link></li>
                            <li><Link to="contactus">Contact us</Link></li>
                        </ul>
                    </div>
                    <div className='flex'>
                        <ul className='flex space-x-6 font-bold'>
                            <li><img src="https://icon-library.com/images/english-icon-png/english-icon-png-12.jpg" alt="" className='h-[25px] w-[25px] inline-block' /><a href="#">Eng</a></li>
                            <li><img src="https://cdn.imgbin.com/15/11/18/countrys-flags-icon-nepal-icon-J7uwrkZv.jpg" alt="" className='h-[25px] w-[25px] inline-block rounded-full' /><a href="#">Nep</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        
    )
}

export default Header
