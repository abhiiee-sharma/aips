export const metadata = {
  title: "Registration | All India Police Sahyog",
  description:
    "Official registration portal for programs and initiatives under All India Police Sahyog.",
};

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        
        {/* HEADER */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Registration
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          This page is for official registration related to programs,
          initiatives, or notices issued under <strong>All India Police Sahyog</strong>.
        </p>

        {/* DIVIDER */}
        <hr className="my-6" />

        {/* INSTRUCTIONS */}
        <section>
          <h2 className="text-lg font-medium text-gray-800">
            Instructions
          </h2>
          <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Please ensure all information provided is accurate.</li>
            <li>Fields marked as mandatory must be filled.</li>
            <li>Submission of false information may lead to rejection.</li>
            <li>Keep a copy of your response for future reference.</li>
          </ul>
        </section>

        {/* DISCLAIMER */}
        <div className="mt-6 rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
          <strong>Official Notice:</strong>  
          This registration form is hosted via a secure Google Forms service
          and is officially linked by the concerned authority.
        </div>

        {/* FORM EMBED */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Registration Form
          </h2>

          <div className="w-full overflow-hidden rounded-md border border-gray-300">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd8DYASPVix-MNFtBKts0zYpm95kSVOVi5Pnw5TNZrxt2m4QA/viewform?usp=dialog"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
