import { QRCodeCanvas } from 'qrcode.react';
import React from 'react'

const Dates = ({invoiceNo, invoiceDate, dueDate, finalTotal,accountno, name}) => {


  function formatDate(input) {
    const [day, month, year] = input.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
  }

  const upiId = accountno;
  const name1 = name;
  const amount = finalTotal;
  
  const upiUrl =  `upi://pay?pa=${upiId}&am=${amount}&cu=INR`;;


  return (
    <>
      <div className='flex justify-between pb-5'>

    {/* Invoice Metadata */}
        <div className="mt-4 sm:mt-0 text-sm text-gray-700 w-full sm:w-auto">
          <p><span className="font-semibold">Invoice #:</span>{invoiceNo}</p>
          <p><span className="font-semibold">Date:</span>{formatDate(invoiceDate)}</p>
          <p><span className="font-semibold">Due Date:</span>{formatDate(dueDate)}</p>
        </div>  

        <div className='mt-4'>
            <p className="font-semibold mb-1">Scan to Pay:</p>
            {/* <img src={qrUrl} alt="UPI QR Code" className='w-28 border border-gray-300 rounded' /> */}

            <QRCodeCanvas
              value={upiUrl}
              size={112}
              includeMargin={true}
              className="border border-gray-300"
            />
        </div>
      </div>
    </>
  )
}

export default Dates
