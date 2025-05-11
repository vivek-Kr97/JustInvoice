import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const features = [
  { title: 'Create Invoices', description: 'Easily generate professional invoices in minutes.' },
  { title: 'Track Payments', description: 'Monitor payment status and client activity.' },
  { title: 'Download PDFs', description: 'Export your invoices to print-ready PDF format.' },
  {title: "Completely Free", description: "Use all available features at no cost—no hidden charges."},
  {title: "Simple & Time-Saving", description: "Create professional invoices in just a few clicks—no hassle."},
];

const comingSoonFeatures = [
  {
    title: "Payment Tracking",
    description: "Track invoice payments and get notified when clients pay."
  },
  {
    title: "Custom Branding",
    description: "Add your business logo, colors, and styling to personalize invoices."
  },
  {
    title: "Invoice Templates",
    description: "Choose from a variety of professionally designed invoice layouts."
  }
];


const workSteps = [
  {
    step: 1,
    description: 'Click on the "Create Invoice" button to get started.'
  },
  {
    step: 2,
    description: 'Fill in your business, client, and invoice details in the form that appears.'
  },
  {
    step: 3,
    description: 'Preview your invoice. If needed, click "Edit Invoice" to make changes.'
  },
  {
    step: 4,
    description: 'Once everything looks good, click "Download" to save your invoice.'
  }
];


const pricingPlans = [
  { title: 'Free', price: '$0', features: ['Basic invoice creation', 'Download PDF','Unlimited invoices', 'Custom invoice number and dates', 'Auto total & tax breakdown' ,'Real-time invoice preview'
    ,'Clean, printable invoice layout','Download as PDF','UPI ID input with QR code','100% mobile-friendly','No login required',
    'All features, no subscriptions, no limits — just free and forever.'
  ] },
  // { title: 'Pro', price: '$9/mo', features: ['Everything in Free', 'Custom branding', 'Unlimited invoices', 'Priority support'] },
];

const testimonials = [
  { name: 'John Doe', quote: 'JustInvoice made my billing process effortless!', role: 'Freelancer' },
  { name: 'Jane Smith', quote: 'A must-have tool for any small business.', role: 'Startup Owner' },
];

const faqs = [
  {
    question: 'Is JustInvoice free to use?',
    answer: 'Yes, all current features are completely free to use—no hidden fees.'
  },
  {
    question: 'Can I export invoices as PDFs?',
    answer: 'Absolutely! You can download high-quality PDFs of your invoices anytime.'
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No account is needed to get started. Just fill out the form and create your invoice.'
  },
  {
    question: 'Can I accept payments through QR codes?',
    answer: 'Yes, QR-based payment options are supported for faster transactions.'
  },
  {
    question: 'Can I edit the invoice after creating it?',
    answer: 'Yes, before downloading, you can preview and edit the invoice as needed.'
  },
  {
    question: 'Are invoice templates customizable?',
    answer: 'Currently no, but customizable templates are coming soon!'
  }
];
const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'JustInvoice - Online Invoice Maker';
  }, []);

  return (
    <main className="bg-white text-gray-800">
      <Navbar/>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white" id='home'>
   
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-5xl md:text-6xl font-bold mb-4"
        >
        Create Invoices in Seconds, Get Paid Faster.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.3 }} 
          className="text-lg md:text-xl max-w-xl mb-6"
        >
          Online Invoice Maker to streamline your billing with ease and style.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button 
          className="text-lg px-6 py-3 rounded-full bg-white text-indigo-600 hover:bg-gray-200 transition-all"
          onClick={() => navigate('/create-invoice')}
          >
            Get Started
        
          </button>
        </motion.div>
      </section>



      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100" id='features'>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


           {/* comingSoonFeatures  Section */}
           <section className="py-16 px-4 bg-gray-100" id='comingSoonFeatures'>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">More Tools Coming Soon</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white" id='workSteps'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {workSteps.map(({step, description}) => (
              <motion.div
                key={step}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: step * 0.1 }}
                className="bg-indigo-50 p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-4">{step}</div>
                <p className="text-gray-700">Step {step}: {description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-100" id='pricing'>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Pricing Plans</h2>
          <div className="grid md:grid-cols-2 
          lgap-8 justify-self-center
           ">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md text-left "
              >
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{plan.title}</h3>
                <p className="text-3xl font-extrabold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-gray-600">- {f}</li>
                  ))}
                </ul>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition" onClick={() => navigate('/create-invoice')}>
                  Get Started Free</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">What Users Say</h2>
          <div className="space-y-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-100 p-6 rounded-xl shadow"
              >
                <p className="italic text-gray-700">"{t.quote}"</p>
                <div className="mt-4 font-semibold text-indigo-600">- {t.name}, <span className="text-gray-600">{t.role}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-4 bg-gray-100" id='faq'>
        <div className="max-w-4xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-5 rounded-lg shadow"
              >
                <h4 className="font-semibold text-indigo-600 mb-2">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Ready to create your first invoice?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-lg"
        >
          Try JustInvoice for free – no sign-up required!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="text-lg px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-200"
            onClick={() => navigate('/create-invoice')}
>
      Start generating Invoices instantly → No signup required
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
    
    {/* Logo + Name */}
    <div className="flex flex-col items-start">
      <h1 className="text-2xl md:text-3xl font-bold text-white">JustInvoice</h1>
      <p className="mt-2 text-sm text-gray-400">Your smart & simple invoice solution.</p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-col space-y-2">
      <a href="#" className="hover:text-white">Privacy Policy</a>
      <a href="#" className="hover:text-white">Terms & Conditions</a>
      <a href="mailto:developervivek.dev@gmail.com" className="hover:text-white">Feedback</a>
      <a href="#" className="hover:text-white">Help & Support</a>
    </div>

    {/* Developer Info + Socials */}
    <div>
      <p className="mb-2 font-semibold text-white">Made with ❤️ by <a href='https://developervivekdev.vercel.app/' className='underline text-gray-300'>Vivek</a></p>
      <div className="flex space-x-4">
        <a href="https://github.com/vivek-Kr97" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/vivek-kr97" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          LinkedIn
        </a>
        <a href="mailto:developervivek.dev@gmail.com" className="hover:text-white">
          Email
        </a>
      </div>
    </div>
  </div>

  {/* Footer bottom */}
  <div className="mt-8 text-center text-sm text-gray-500">
    &copy; 2025 JustInvoice. All rights reserved.
  </div>
</footer>

    </main>
  );
};

export default Home;
