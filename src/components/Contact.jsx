import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#414549] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/9b099ab7-1b93-4cbb-971e-77fe1947534e" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Fill out this contact card or send an email! -- sylvester.brandon25@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-green-600 hover:border-green-600 px-4 py-3 my-8 mx-auto flex items-center'> Thank you! </button>
        </form>
    </div>
  )
}

export default Contact
