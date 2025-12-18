export default function AcknowledgmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full rounded-md border border-blue-200 bg-white p-8">
        
        <h1 className="text-xl font-semibold text-gray-800 mb-4">
          Registration Submitted Successfully
        </h1>

        <div className="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800 space-y-3">
          <p>
            Dear Applicant,
          </p>

          <p>
            We acknowledge the receipt of your registration application.
          </p>

          <p>
            Your details have been successfully submitted and are currently
            under verification. Please note that this acknowledgment does not
            confirm approval.
          </p>

          <p>
            If additional information is required, you will be contacted by
            the concerned authority.
          </p>

          <p className="pt-2">
            <strong>Regards,</strong><br />
            Registration Authority
          </p>

          <p className="text-xs text-gray-600">
            (This is an automated acknowledgment. Please do not reply.)
          </p>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          You may now safely close this page.
        </div>

      </div>
    </div>
  );
}
