import React from 'react'


const MainData = ({name, address, email, phone}) => {
  

  return (
    <>
    <main>
 



          {/* Seller / Business Info */}
  <div>
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">From:</h2>
    <p className="text-sm sm:text-base text-gray-700 font-medium">{name}</p>
    <p className="text-sm text-gray-600">{address}</p>
    <p className="text-sm text-gray-600">{email}</p>
    <p className="text-sm text-gray-600">Phone: {phone}</p>
  </div>
    </main>
    </>
  )
}

export default MainData
