import React from 'react'

const Footer = ({name, email, phone, bankName, accountno, website}) => {
  return (
    <>
<footer className="mt-8 border-t pt-4">
  <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
    <li><span className="font-semibold">{name}</span></li>
    <li><span className="font-semibold">{email}</span></li>
    <li><span className="font-semibold">{phone}</span></li>
    <li><span className="font-semibold">{bankName}</span></li>
    <li><span className="font-semibold">UPI: {accountno}</span></li>
    <li>
      <span className="font-semibold">
        <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          {website}
        </a>
      </span>
    </li>
  </ul>
</footer>
    </>
  )
}

export default Footer
