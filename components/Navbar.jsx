import React from 'react'

const Navbar = () => {
    return (
        <div className=' bg-rose-500 p-5 flex justify-between h-[60px]'>
            <div><span className=' text-white text-2xl'>Day Manager</span></div>
            <div>
                <ul className='text-white flex gap-9 mr-10'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar