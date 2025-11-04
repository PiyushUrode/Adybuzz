import  { useState } from 'react';
const S8Schedule = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const questions = [
    { 
      question: 'What digital marketing services does Adybuzz offer?', 
      answer: 'We offer SEO, PPC advertising, social media marketing,  email marketing,  to help businesses grow online.' 
    },
    { 
      question: 'How long does it take to see digital marketing results?', 
      answer: 'Most clients see improvements within 3-6 months, depending on their industry and marketing strategy..' 
    },
    { 
      question: 'Do you provide ongoing support?', 
      answer: 'Yes! We offer continuous support, reporting, and strategy optimization to ensure long-term success.' 
    },
    { 
      question: 'Can you cater to my specific industry?', 
      answer: ' Absolutely! We customize strategies for e-commerce, real estate, healthcare, technology, and more.' 
    },
    { 
      question: 'Can you help with animated websites and motion graphics?', 
      answer: 'Absolutely! We specialize in creating engaging animated websites, explainer videos, and interactive UI animations to enhance brand storytelling.' 
    },
    { 
      question: 'How long does it take to see results from digital marketing campaigns?', 
      answer: 'SEO results typically take 3-6 months, while PPC and social media ads can generate leads within weeks. We focus on both short-term and long-term growth strategies.' 
    },
    { 
      question: 'What platforms do you use for eCommerce development?', 
      answer: 'We work with Shopify, WooCommerce, Magento, and custom-built solutions using React, Node.js, and Laravel for a fully customized experience.' 
    },

  ];
  

  return (
    <div className="container mx-auto py-16 px-8 max-w-3xl " id='faq'>
      <h2 className="text-3xl font-semibold mb-8 bg-textcolor bg-clip-text text-transparent">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 px-6 text-lg text-gray-900 focus:outline-none hover:text-blue-800"
              onClick={() => handleToggle(index)}
              aria-expanded={expandedIndex === index ? 'true' : 'false'}
            >
              <span className="flex justify-between items-center">
                <span>{item.question}</span>
                <span
                  className={`transform transition-transform duration-200 ${expandedIndex === index ? 'rotate-90' : ''}`}
                >
                  &#x2192;
                </span>
              </span>
            </button>
            {expandedIndex === index && (
              <div className="p-6 text-black  max-h-[9em] transition-all duration-200">
                <p className='text-gray-700'>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



export default S8Schedule;
