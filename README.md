 # 🧾 JustInvoice

**Live Demo**: [https://justinvoice.vercel.app](https://justinvoice.vercel.app)

**JustInvoice** is a fully frontend-based invoice generator app designed to help freelancers, small business owners, and service providers create professional invoices in minutes. With a clean, responsive design and zero backend setup, it offers a fast, reliable way to create, view, and print invoices directly from the browser.

---

## 🚀 Features

- **Add Business & Client Info**  
  Easily input your company name, client name, addresses, invoice number, and date.

- **Itemized Invoice Entries**  
  Add multiple line items — each with description, quantity, unit price, and it calculates the subtotal automatically.

- **Automatic Calculations**  
  The app automatically calculates:
  - Total for each item (quantity × price)
  - Subtotal of all items
  - Optional tax (if included)
  - Grand Total (with tax)

- **Real-Time Preview**  
  As you fill in the details, your invoice updates live on the screen.

- **Print & Export Friendly**  
  The layout is optimized for printing. You can use the browser's print option to save the invoice as PDF or print it directly.

- **Responsive Design**  
  Works perfectly on desktop, tablet, and mobile screens using TailwindCSS.

- **Frontend Only (No Backend)**  
  No data is stored or sent to any server. Everything runs in the browser, ensuring full privacy.

---

## 🛠️ How It Works

JustInvoice is built using **React** for the UI and **TailwindCSS** for styling. The app uses component-based state management to dynamically update invoice values as the user types.

### Step-by-Step Flow:

1. **User Enters Information**
   - Business & client details
   - Invoice number and date
   - Item/service list (with qty & price)

2. **Live Calculation**
   - Totals are calculated as you type using JavaScript

3. **Print Button**
   - Clicking print opens the browser's print dialog
   - You can choose to save as PDF or send to a printer

4. **No Login or Save**
   - It's meant for quick generation. You can print/export the invoice immediately.
   - Data resets on page refresh

---

## 📋 How to Use

1. **Open the App:**  
   Go to [justinvoice.vercel.app](https://justinvoice.vercel.app)

2. **Enter Invoice Info:**
   - Fill in the business name, client details, and invoice metadata (date, number, etc.)

3. **Add Items:**
   - Add rows with item name, quantity, and price
   - Totals will be calculated automatically

4. **Check Preview:**
   - The invoice layout will update in real time

5. **Print or Export:**
   - Click the **Print** button in your browser or use `Ctrl + P`
   - Choose **Save as PDF** or print on paper

---

## 🧰 Tech Stack

- **React** – For building UI components and managing state
- **TailwindCSS** – For utility-first, responsive design
- **Vite** – For fast development and production builds
- **React Icons** – For UI icons (print, delete, etc.)

---

## 🔧 Installation (For Developers)

```bash
# Clone the repository
git clone https://github.com/vivek-Kr97/justinvoice.git
cd justinvoice

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
