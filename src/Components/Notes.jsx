import React from 'react'

const Notes = ({notes}) => {
  return (
    <>
  <section className="mt-6 mb-6">
  <div className="bg-gray-100 p-4 md:p-6">
    <h2 className="text-lg font-semibold mb-2 text-gray-800">Additional Notes</h2>
    <p className="text-gray-700 text-sm md:text-base leading-relaxed break-words">
      {notes || "No additional notes provided."}
    </p>
  </div>
</section>
    </>
  )
}

export default Notes
