import React, { useEffect } from 'react';

const Tables = ({list, totalAmount, setTotalAmount, tax, setTax, finalTotal,
             setFinalTotal, taxAmount, setTaxAmount
                  }) => {
        // calculate totalAmount function
      useEffect(() =>  {
        let rows = document.querySelectorAll(".total")
        let sum = 0
        rows.forEach(row => {
         const value = parseFloat(row.innerText.trim());
         sum += isNaN(value) ? 0 : value;
       });
       
       setTotalAmount(sum);
      })

      useEffect(() => {
        const calculatedTax =(totalAmount * (tax/100));
        setTaxAmount(calculatedTax);
        setFinalTotal(totalAmount + calculatedTax)

      }, [totalAmount, tax])
  return (
    
    <>
<table className="min-w-full border border-gray-300 divide-y divide-gray-200 text-xs sm:text-sm md:text-base">
  <thead className="bg-gray-100">
    <tr>
      <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-700">Item</th>
      <th className="px-2 sm:px-4 py-1 sm:py-2 text-left font-semibold text-gray-700">Description</th>
      <th className="px-2 sm:px-4 py-1 sm:py-2 text-center font-semibold text-gray-700">Quantity</th>
      <th className="px-2 sm:px-4 py-1 sm:py-2 text-right font-semibold text-gray-700">Unit Price</th>
      <th className="px-2 sm:px-4 py-1 sm:py-2 text-right font-semibold text-gray-700">Total</th>
    </tr>
  </thead>

  <tbody className="bg-white divide-y divide-gray-200">
    {list.map(({ id, item, description, unitPrice, quantity, total }) => (
      <tr key={id}>
        <td className="px-2 sm:px-4 py-1 sm:py-2 text-gray-800">{item}</td>
        <td className="px-2 sm:px-4 py-1 sm:py-2 text-gray-600">{description}</td>
        <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800">{quantity}</td>
        <td className="px-2 sm:px-4 py-1 sm:py-2 text-right text-gray-800">{unitPrice}</td>
        <td className="px-2 sm:px-4 py-1 sm:py-2 text-right text-gray-800 total">{total}</td>
      </tr>
    ))}
  </tbody>

  <tfoot className="bg-gray-50">
    <tr>
      <td colSpan="4" className="px-2 sm:px-4 py-1 sm:py-2 text-right font-semibold text-gray-700">Subtotal</td>
      <td className="px-2 sm:px-4 py-1 sm:py-2 text-right text-gray-800">{totalAmount}</td>
    </tr>
    <tr>
      <td colSpan="4" className="px-2 sm:px-4 py-1 sm:py-2 text-right font-semibold text-gray-700">Tax ({tax}%)</td>
      <td className="px-2 sm:px-4 py-1 sm:py-2 text-right text-gray-800">{taxAmount}</td>
    </tr>
    <tr>
      <td colSpan="4" className="px-2 sm:px-4 py-1 sm:py-2 text-right font-bold text-gray-900">Total</td>
      <td className="px-2 sm:px-4 py-1 sm:py-2 text-right font-bold text-gray-900">{finalTotal}</td>
    </tr>
  </tfoot>
</table>

    </>
  )
}

export default Tables
