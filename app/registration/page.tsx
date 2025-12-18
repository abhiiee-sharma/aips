export const metadata = {
  title: "Registration | All India Police Sahyog",
  description:
    "Official registration portal for programs and initiatives under All India Police Sahyog.",
};

import RegistrationForm from "./RegistrationForm";

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
          initiatives, or notices issued under{" "}
          <strong>All India Police Sahyog</strong>.
        </p>

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
          <ol className="mt-2 list-decimal space-y-3 pl-5">
            <li>
              <strong>Registration Fees:</strong> ₹850 (Eight Hundred Fifty Rupees Only)
              <br />
              <strong>पंजीकरण शुल्क:</strong> ₹850 (आठ सौ पचास भारतीय रुपये मात्र)
            </li>
            <li>
              <strong>Eligibility Requirement:</strong> No criminal or civil cases.
            </li>
          </ol>
        </div>

        {/* ✅ CLIENT FORM */}
        <RegistrationForm />

      </div>
    </main>
  );
}
