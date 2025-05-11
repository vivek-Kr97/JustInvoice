import React, { useEffect, useRef, useState } from 'react'

import './index.css';
import MainData from './Components/MainData'
import Clients from './Components/Clients'
import Dates from './Components//Dates'
import Notes from './Components/Notes'
import Tables from './Components/Tables'
import Footer from './Components/Footer'
import TableForm from './Components/TableForm';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
import Navbar from './Components/Navbar';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useReactToPrint } from 'react-to-print';



const App = () => {
  const sectionRef = useRef();
  

  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress ] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankname] = useState("");
  const [accountno, setAccountno] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDuedate] = useState("");
  const [notes, setNotes] = useState("");
  const [item ,setItem ] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const [tax, setTax ] = useState("");
  const [taxAmount, setTaxAmount] = useState(0);
  const [total , setTotal] = useState("");  // for each row 
  const [list, setList] = useState([]);
  const [totalAmount, setTotalAmount] = useState("") // after adding all the rows
  const [finalTotal, setFinalTotal] = useState("");// total price after making Invoice Final

  const handleDownloadPDF = async () => {
    const element = sectionRef.current;


    // Capture the content as a canvas
    const canvas = await html2canvas(element);

    // Convert canvas to image data
    const imgData = canvas.toDataURL("image/png");

    // Create PDF
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Add image to PDF
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("madeWithJustInvoice.pdf");
  };




  useEffect(() => {
    setTotal(quantity * unitPrice);
  }, [quantity, unitPrice]);

  return (
    <>
    <div className='w-full'>
    
    <Navbar/>
    
    </div>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    <main 
    className='w-auto min-w-fit mx-auto pt-2  pb-5'>
  
      {showInvoice ? 
            (<div className='lg:w-[90%] lg:p-16  px-4 mx-auto mt-20 '>
                     <Header handleDownloadPDF={handleDownloadPDF}
                     />


            <div id="printable-section" ref={sectionRef} className='p-5 lg:p-10 border mt-8 border-black'>
              <section  >


              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"> */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6">

                        {/* Seller / Business Info */}
                    <MainData name={name} address={address} email={email} phone={phone}/>
                        {/* Client Info */}
                    <Clients clientName={clientName} clientAddress={clientAddress} clientEmail={clientEmail}/>
              </div>


                    <Dates invoiceNo={invoiceNo} invoiceDate={invoiceDate} dueDate={dueDate} finalTotal={finalTotal} accountno={accountno}  name={name} />
                    <Tables
                            item={item}  description={description}  quantity={quantity}  
                            unitPrice={unitPrice} total={total} setTotal={setTotal} list={list} setList={setList}
                            totalAmount={totalAmount} setTotalAmount={setTotalAmount} tax={tax} setTax={setTax}
                            finalTotal={finalTotal} setFinalTotal={setFinalTotal}
                            taxAmount={taxAmount} setTaxAmount={setTaxAmount} />
                    <Notes notes={notes}/>
                    <Footer name={name} email={email} phone={phone} bankName={bankName} accountno={accountno}
                    website={website}  />
              </section>
             </div>

             


              <div>
                <button
                 className='bg-blue-500 mt-5 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
                 hover:text-blue-500 transition-all duration-300'
                 onClick={() => setShowInvoice(false)}>
                  Edit Invoice
                </button>
              </div>
            </div>)
              :
            (<div className="
            max-w-7xl mx-auto mt-20
            flex flex-col justify-center pt-6 px-16 pb-5 rounded bg-gray-50 shadow-2xl shadow-slate-800 ">
  {/* Your buisness Info */}
  <h1 className='text-2xl font-bold mb-4 border-b-4 border-black w-[40%]'>Business Information</h1>
        <article className='md:grid grid-cols-2 gap-10 mb-6'>
          <div className='flex flex-col'>
                <label htmlFor="name">Enter Your Name</label>
                <input 
                  type="text" 
                  name='name' 
                  id='name'
                  placeholder='Enter Your Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                  />
          </div>

              <div className='flex flex-col'>   
                <label htmlFor="address">Enter Your Address</label>
                <input 
                  type="text" 
                  name='address' 
                  id='address'
                  placeholder='Enter Your address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  />
              </div>
       </article>

       <article className='md:grid grid-cols-3 gap-10'>
          <div className='flex flex-col'>
              <label htmlFor="email">Enter Your E-mail</label>
              <input 
                type="email" 
                name='email' 
                id='email'
                placeholder='Enter Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>  
            
            <div className='flex flex-col'>
              <label htmlFor="phone">Enter Your Phone Number</label>
              <input 
                type="text" 
                name='phone' 
                id='phone'
                placeholder='Enter Your Phone number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="website">Enter Your Website</label>
              <input 
                type="url" 
                name='website' 
                id='website'
                placeholder='Enter Your Website'
                value={website}
                target= '_blank'
                onChange={(e) => setWebsite(e.target.value)}
                />
            </div>
        </article>

        
        <article className='md:grid grid-cols-2 gap-10 mb-10'>
          {/* <div className='flex flex-col'>
              <label htmlFor="bankName">Enter Your Bank Name</label>
              <input 
                type="text" 
                name='bankName' 
                id='bankName'
                placeholder='Enter Your Bank Name'
                value={bankName}
                onChange={(e) => setBankname(e.target.value)}
                />
          </div> */}

          <div className='flex flex-col'>
              <label htmlFor="accountno">Enter Your UPI id</label>
              <input 
                type="text" 
                name='accountno' 
                id='accountno'
                placeholder='Enter Your UPI id'
                value={accountno}
                onChange={(e) => setAccountno(e.target.value)}
                />
          </div>
        </article>
{/* End of buisness details */}     
{/* Clients info */}
<h1 className='text-2xl font-bold mb-4 border-b-4 border-black w-[40%]'>Client Information</h1>

        <article className='md:grid grid-cols-3 gap-10 mb-10'>
            <div className='flex flex-col'>
              <label htmlFor="clientName">Enter Client Name</label>
              <input 
                type="text" 
                name='clientName' 
                id='clientName'
                placeholder='Enter Client Name'
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="clientAddress">Enter Client Address</label>
              <input 
                type="text" 
                name='clientAddress' 
                id='clientAddress'
                placeholder='Enter Client Address'
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                />
              </div>
              <div className='flex flex-col'>
              <label htmlFor="clientEmail">Enter Client E-mail</label>
              <input 
                type="email" 
                name='clientEmail' 
                id='clientEmail'
                placeholder='Enter client E-mail'
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                />
            </div> 
        </article>

{/* Clients info End */}

{/* Table Form */}
<section className='mb-10'>
<h1 className='text-2xl font-bold mb-5 border-b-4 border-black w-[40%] '>Itemized Billing</h1>

<TableForm item={item} setItem={setItem} description={description} setDescription={setDescription} 
quantity={quantity} setQuantity={setQuantity} unitPrice={unitPrice} setUnitPrice={setUnitPrice} 
total={total} setTotal={setTotal} list={list} setList={setList} totalAmount={totalAmount} tax={tax} setTax={setTax}
finalTotal={finalTotal} setFinalTotal={setFinalTotal}
taxAmount={taxAmount} setTaxAmount={setTaxAmount}/>
</section>

{/* invoice dates  */}
<h1 className='text-2xl font-bold mb-4 border-b-4 border-black w-[40%]'>Invoice Details</h1>


        <article className='md:grid grid-cols-3 gap-10 '>
            <div className='flex flex-col'>
              <label htmlFor="invoiceNo">Enter Invoice Number</label>
              <input 
                type="text" 
                name='invoiceNo' 
                id='invoiceNo'
                placeholder='Enter Invoice Number'
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="invoiceDate">Enter Invoice Date</label>
              <input 
                type="date" 
                name='invoiceDate' 
                id='invoiceDate'
                placeholder='Enter Invoice Date'
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
                />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="dueDate">Enter Due date</label>
              <input 
                type="date" 
                name='dueDate' 
                id='dueDate'
                placeholder='Enter  Due date'
                value={dueDate}
                onChange={(e) => setDuedate(e.target.value)}
                />
            </div>
        </article>

{/* Invoice date ends */}

{/* Additional notes */}
       <article className='md:grid grid-cols-1 gap-10 mb-5'>
          <div className='flex flex-col'>
             <label htmlFor="notes">Additional Notes</label>
              <textarea 
                type="notes" 
                cols="30"
                rows="8"
                name='notes' 
                id='notes'
                placeholder='Enter Additional notes'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                />
              </div>
        </article>


      <button
        className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 text-white hover:bg-transparent mb-10
         hover:text-blue-500 transition-all duration-300 font-semibold'
          onClick={() => setShowInvoice(true)}>
           Preview Invoice
      </button>
            </div>)
          }

      </main>
    </>
  )
}

export default App;




/*  
🚀 Core Features (MVP)
These are essential for a working invoice generator:

🔧 Invoice Builder
Add/remove line items

Enter description, quantity, unit price

Auto-calculate subtotal, tax, total

Add invoice number, date, due date

👤 Customer & Sender Info
Fields for your business info

Fields for client/customer info

📄 Invoice Preview
Live preview as user fills the form

Professional-looking template

📥 Export & Share
Download as PDF

Option to print

Option to copy invoice link (if stored online)

🎯 Smart Add-ons
These give your app a competitive edge:

💸 Payment Integration
Generate UPI payment QR

Optional: integrate PayPal, Razorpay, Stripe links

🖼 Branding
Upload business logo

Customizable colors & fonts

Set default business info

📑 Templates & Custom Layouts
Choose between invoice styles/layouts

Save as drafts or templates

📂 Save & History (if login-based)
Save past invoices

Duplicate old invoices

Export as CSV

✨ Extra Features (for advanced UX)
Light/Dark mode 🌗

Mobile responsiveness 📱

Multilingual & multi-currency support 💱

Tax-inclusive/exclusive toggle

Discount fields (flat or %)

Auto-generate invoice numbers

Smart suggestions (e.g. frequently used items or clients)

Email invoice directly from app

🧠 Bonus Ideas (Long-term)
Login/auth system for managing invoices

Client dashboard to track their invoices

Analytics (total billed, payments received)

Invoice reminders via email

Recurring invoices (monthly services)


*/
