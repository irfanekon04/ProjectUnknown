import React from 'react'

const ServiceItems = ({item}) => {
    const {title, details, button,image} = item
  return (
    <div className='p-8 mx-auto text-center  bg-[#EBF7E9] mt-12 rounded-xl'>
        <img className='w-[90px] mx-auto' src={image} alt="" />
        <p className='font-bold text-[30px] my-4'>{title}</p>
        <p className='text-[18px] font-paprika mt-5 mb-7 w-[257px]'>{details}</p>
        <a className='px-6 py-2 text-black bg-orange-300 rounded-full hover:bg-orange-500  text-[20px] transition duration-3000 ease-out md:ease-in' href="">{button}</a>

    </div>
  )
}

export default ServiceItems