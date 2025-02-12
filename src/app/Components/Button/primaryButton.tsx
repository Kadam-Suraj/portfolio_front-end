import React from 'react'

const primaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className='text-white py-1 px-3 font-medium bg-gradient-to-r hover:from-[#FFA84B] hover:via-[#FF5E69] hover:to-[#B16CEA] from-[#B16CEA] via-[#FF5E69] to-[#FFA84B] rounded-full transition-all duration-300 hover:scale-90'>{children}</button>
  )
}

export default primaryButton