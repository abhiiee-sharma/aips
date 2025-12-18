"use client";

import React from "react";
import { CreditCard, ShieldCheck, Heart, Landmark, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Header */}
      <section className="bg-[#003366] py-16 px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Support Our Protectors
        </motion.h1>
        <p className="text-yellow-400 text-lg md:text-xl max-w-2xl mx-auto italic">
          "Your contribution ensures that no police family stands alone in their time of need."
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side: Why Help Us */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#ef4444]">
              <h2 className="text-[#003366] text-3xl font-bold mb-6 flex items-center gap-2">
                <Heart className="text-[#ef4444]" /> Why Donate?
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <ShieldCheck className="text-green-600 shrink-0" />
                  <span><strong>Family Welfare:</strong> Supports education and healthcare for the families of martyrs.</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-green-600 shrink-0" />
                  <span><strong>Mental Health:</strong> Funds stress-relief programs and counseling for active-duty officers.</span>
                </li>
                <li className="flex gap-3">
                  <ShieldCheck className="text-green-600 shrink-0" />
                  <span><strong>Emergency Aid:</strong> Immediate financial relief for injuries sustained in the line of duty.</span>
                </li>
              </ul>
            </div>

            {/* Donor Benefit: ID Card */}
            <div className="bg-[#003366] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute right-[-20px] top-[-20px] opacity-10">
                <CreditCard size={150} />
              </div>
              <h3 className="text-yellow-400 text-2xl font-bold mb-4 flex items-center gap-2">
                <CreditCard /> Official Recognition
              </h3>
              <p className="text-gray-100 leading-relaxed">
                As a token of our gratitude, every donor contributing above a minimum threshold will be issued an 
                <strong> Official AIPS Membership ID Card</strong>. This card recognizes your status as a 
                distinguished supporter of the All India Police Sahyog.
              </p>
            </div>
          </div>

          {/* Right Side: Payment Details */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 h-fit">
            <h2 className="text-[#003366] text-2xl font-bold mb-6 flex items-center gap-2">
              <Landmark /> Bank Transfer Details
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 mb-6">
              <div className="space-y-4 text-lg">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Account Holder:</span>
                  <span className="font-bold text-[#003366]">All India Police Sahyog</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Bank Name:</span>
                  <span className="font-bold text-[#003366]">State Bank of India</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">Account Number:</span>
                  <span className="font-bold text-[#003366]">XXXXXXXX1234</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-500">IFSC Code:</span>
                  <span className="font-bold text-[#003366]">SBIN000XXXX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Branch:</span>
                  <span className="font-bold text-[#003366]">New Delhi Main Branch</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-6 italic">
              * Payments can be made via <strong>UPI, NEFT, IMPS, or Cheque</strong>. Please share a screenshot of your payment on our official WhatsApp or Email for ID card processing.
            </p>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl flex gap-3">
              <Info className="text-yellow-600 shrink-0" />
              <p className="text-yellow-800 text-sm font-medium">
                <strong>Important:</strong> Online gateway payments directly through this website have not been implemented yet. Please use the bank details provided above for all contributions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}