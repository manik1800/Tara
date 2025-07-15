import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is this service really free?",
    answer: "Yes, our TaraBox downloader is completely free to use. There are no hidden charges, subscription fees, or premium plans. We believe in providing free access to your own files."
  },
  {
    question: "Which platforms are supported?",
    answer: "We support TaraBox, TeraBox, 1024Tera, 4FunBox, and several other cloud storage platforms. We're constantly adding support for new platforms based on user requests."
  },
  {
    question: "Is there a file size limit?",
    answer: "No, there's no file size limit. You can download files of any size, from small documents to large video files. However, larger files may take longer to process."
  },
  {
    question: "Do you store my files or data?",
    answer: "No, we never store your files or personal data. We only process the download links temporarily and all data is deleted immediately after processing. Your privacy is our priority."
  },
  {
    question: "Why do some downloads fail?",
    answer: "Downloads may fail if the original link has expired, the file has been deleted, or there are network issues. Make sure your link is valid and publicly accessible."
  },
  {
    question: "Can I download private files?",
    answer: "No, you can only download files that are publicly shared. Private files require authentication which we cannot bypass for security and privacy reasons."
  },
  {
    question: "Is it safe to use this service?",
    answer: "Yes, our service is completely safe. We use HTTPS encryption, don't store any data, and our servers are regularly security audited. Your downloads are as safe as the original platform."
  },
  {
    question: "How fast are the downloads?",
    answer: "Download speeds depend on your internet connection and the original server's capacity. We provide direct links to ensure maximum possible speed without any throttling."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-white font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got Questions?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Find answers to the most common questions about our TaraBox downloader service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-blue-400" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-blue-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-blue-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/20 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@taraboxdownloader.com"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200"
              >
                Email Support
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl border border-white/20 transition-all duration-200"
              >
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}