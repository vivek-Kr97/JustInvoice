import { useState } from 'react'
import { MdCreate, MdDelete } from 'react-icons/md'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

const TableForm = ({description,setDescription, item ,setItem, 
                    quantity, setQuantity, unitPrice, setUnitPrice,
                    total, setTotal, list, setList, totalAmount, tax, setTax, taxAmount, finalTotal
                }) => {
 const [isEditing, setIsEditing] = useState(false)
 const handleSubmit = (e) => {
    e.preventDefault()

    if (!item) {
      toast.info("Please Add Item ")
    }
    else if(!unitPrice) {
      toast.info("Please Add Price ")
    }
    else if(!quantity) {
      toast.info("Please Add Quantity ")
    }
     else  {
      const newItems = {
        id: uuidv4(),
        item: item,
        description: description,
        quantity: quantity,
        unitPrice:  unitPrice,
        total: total
      }
      setItem("")
      setIsEditing(false)
      setDescription("")
      setQuantity("")
      setUnitPrice("")
      setTotal("")
      setList([...list, newItems])
    }
   
 }


 // Edit and delete button

 const editRow = (id) => {
  const editingRow = list.find((row) => row.id == id )
  setList(list.filter((row) => row.id !== id ))
  setIsEditing(true);
  setItem(editingRow.item)
  setDescription(editingRow.description)
  setQuantity(editingRow.quantity)
  setUnitPrice(editingRow.unitPrice)

 }

 const deleteRow = (id) => {
  setList(list.filter((row) => row.id !== id))
 }

  return (
    <> 
     <form onSubmit={handleSubmit} >
     <article className='md:grid grid-cols-2 gap-10'>
      <div className='flex flex-col'>
            <label htmlFor="item">Item</label>
            <input 
                type="text"
                id='item' 
                name='item'
                placeholder='item'
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
      </div>

      <div className='flex flex-col'>
            <label htmlFor="description">Item Description</label>
            <input 
                type="text"
                id='description' 
                name='description'
                placeholder='item Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
      </div>
      </article>

     <article className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
                  <label htmlFor="quantity">Quantity</label>
                  <input 
                      type="number"
                      id='quantity' 
                      name='quantity'
                      min="0"
                      step="1"
                      placeholder='item quantity'
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                  />
            </div>

            <div className='flex flex-col'>
                  <label htmlFor="unitPrice">Unit Price</label>
                  <input 
                      type="number"
                      min="0"
                      step="1"
                      id='unitPrice' 
                      name='unitPrice'
                      placeholder='Unit Price'
                      value={unitPrice}
                      onChange={(e) => setUnitPrice(e.target.value)}
                  />
            </div>
            
          <button
              // onClick={}
              type='submit'
              className="w-auto px-4 py-3 border-blue-500 border bg-blue-500 text-white 
              rounded hover:bg-transparent hover:text-blue-500 transition-all duration-300 font-semibold"
            >
            {isEditing ? "Update Entry" : " Add New Item"}
            </button>
    
     </article>
      
     <article className='md:grid grid-cols-2 gap-10'>
     <div className='flex flex-col'>
            <label htmlFor="unitPrice">Total</label>
            <div>{total}</div>
            
      </div>

      <div className='flex flex-col'>
            <label htmlFor="tax">Tax (%)</label>
            <input 
                type="number"
                min="0"
                step="1"
                id='tax' 
                name='tax'
                placeholder='Enter tax(%)'
                value={tax}
                onChange={(e) => setTax(e.target.value)}
            />
      </div>

      
      </article>

      <h1 className='font-semibold text-xl uppercase'>Table Preview</h1>
      {/* Table items */}
     <section className='mt-4 '>
       
        <table className=" border border-gray-300 divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">Item</th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                      <th className="px-4 py-2 text-center font-semibold text-gray-700">Quantity</th>
                      <th className="px-4 py-2 text-right font-semibold text-gray-700">Unit Price</th>
                      <th className="px-4 py-2 text-right font-semibold text-gray-700">Total</th>
                      <th className="px-4 py-2 text-center font-semibold text-gray-700"> Edit/Delete</th>
                    </tr>
           </thead>
           <tbody>
           {list.map(({ id,item, description, unitPrice, quantity,total}) => (
                <tr key={id}>
                  <td className="px-4 py-2 text-gray-800">{item || "" }</td>
                  <td className="px-4 py-2 text-gray-600">{description || ""}</td>
                  <td className="px-4 py-2 text-center text-gray-800">{quantity || 0}</td>
                  <td className="px-4 py-2 text-right text-gray-800">{unitPrice || 0}</td>
                  <td className="px-4 py-2 text-right text-gray-800">{total || 0}</td>
                  <td>
                  <div className='flex gap-x-4 p-2 items-center text-center justify-center text-lg'>
                      <div className='p-2 text-white cursor-pointer bg-green-500 rounded-full '
                      onClick={() => editRow(id)}
                      >
                      <MdCreate/>
                      </div>

                      <div className='p-2 text-white cursor-pointer bg-red-500 font-bold rounded-full ' 
                        onClick={() => deleteRow(id)}>
                      <MdDelete/>
                      </div>
                  </div>
                  </td>
                </tr>
                 ))}
            </tbody>

            <tfoot className="bg-gray-50">
          <tr>
            <td colSpan="4" className="px-4 py-2 text-right font-semibold text-gray-700">Subtotal</td>
            <td className="px-4 py-2 text-right text-gray-800">{totalAmount}</td>
          </tr>
          <tr>
            <td colSpan="4" className="px-4 py-2 text-right font-semibold text-gray-700">Tax ({tax}%)</td>
            <td className="px-4 py-2 text-right text-gray-800">{taxAmount}</td>
          </tr>
          <tr>
            <td colSpan="4" className="px-4 py-2 text-right font-bold text-gray-900">Total</td>
            <td className="px-4 py-2 text-right font-bold text-gray-900">{finalTotal}</td>
          </tr>
        </tfoot>
       </table>
          
      
     </section>

     </form>
     
   

    

    </>
  )
}

export default TableForm
