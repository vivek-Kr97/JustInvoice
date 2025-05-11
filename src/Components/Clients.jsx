import React from 'react'

const Clients = ({clientName, clientAddress, clientEmail}) => {
  return (
    <>
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">To:</h2>
        <p className="text-sm sm:text-base text-gray-700 font-medium">{clientName}</p>
        <p className="text-sm text-gray-600">{clientAddress}</p>
        <p className="text-sm text-gray-600">Email: {clientEmail}</p>
      </div>

    </>
  )
}

export default Clients
