import React from 'react';

export default function AcknowledgmentPage() {
  return (
    // min-h-[70vh] ensures it centers nicely if you have a header above it
    <div className="flex items-center justify-center bg-transparent py-12 px-4">
      <div className="max-w-2xl w-full rounded-xl border border-gray-200 bg-white shadow-sm p-10">
        
        {/* Main Heading with better margin and weight */}
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          Registration Submitted Successfully
        </h1>

        {/* Message Container: Improved padding and line-height */}
        <div className="rounded-lg border border-blue-100 bg-[#f0f7ff] p-8 text-[15px] leading-relaxed text-blue-900">
          <div className="space-y-5">
            <p className="font-medium">Dear Applicant,</p>

            <p>
              We acknowledge the receipt of your registration application.
            </p>

            <p>
              Your details have been successfully submitted and are currently
              under verification. <span className="font-semibold">Please note that this acknowledgment does not
              confirm approval.</span>
            </p>

            <p>
              If additional information is required, you will be contacted by
              the concerned authority.
            </p>

            <div className="pt-4 border-t border-blue-200/50">
              <p className="font-bold text-blue-950">Regards,</p>
              <p>Registration Authority</p>
            </div>

            <p className="text-xs text-gray-500 italic mt-6">
              (This is an automated acknowledgment. Please do not reply.)
            </p>
          </div>
        </div>

        {/* Footer text aligned to the message box */}
        <div className="mt-8 text-sm text-gray-500">
          You may now safely close this page.
        </div>

      </div>
    </div>
  );
}