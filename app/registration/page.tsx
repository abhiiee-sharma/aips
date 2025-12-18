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
  <ol className="mt-2 list-decimal space-y-3 pl-5">
    <li>
      <strong>Registration Fees:</strong> ₹850 (Eight Hundred Fifty Rupees Only)  
      <br />
      <span className="block">
        <strong>पंजीकरण शुल्क:</strong> ₹850 (आठ सौ पचास भारतीय रुपये मात्र)।
      </span>
    </li>

    <li>
      <strong>Eligibility Requirement:</strong> You must certify that no criminal
      or civil legal cases (active or concluded) are registered against your
      name. Compliance will be verified through a mandatory background
      verification process.
      <br />
      <span className="block">
        <strong>पात्रता शर्त:</strong> आवेदक के नाम पर कोई भी आपराधिक या सिविल
        कानूनी कार्यवाही (सक्रिय या पूर्ण) पंजीकृत नहीं होनी चाहिए। इस स्थिति की
        पुष्टि एक अनिवार्य पृष्ठभूमि सत्यापन प्रक्रिया (Background Verification)
        के माध्यम से की जाएगी।
      </span>
    </li>
  </ol>
</div>


{/* REGISTRATION FORM */}
<div className="mt-8">
  <h2 className="text-lg font-medium text-gray-800 mb-4">
    Registration Form
  </h2>

  <form
    action="/api/register"
    method="POST"
    encType="multipart/form-data"
    className="rounded-md border border-gray-300 bg-white p-6 space-y-6"
  >
    {/* Full Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name / पूरा नाम
      </label>
      <input
        type="text"
        name="name"
        required
        placeholder="Enter your full name"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* Father's Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Father’s Name / पिता का नाम
      </label>
      <input
        type="text"
        name="father_name"
        required
        placeholder="Enter father's name"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* Date of Birth */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Date of Birth / जन्म तिथि
      </label>
      <input
        type="date"
        name="dob"
        required
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* Email (needed for acknowledgment) */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email Address / ईमेल
      </label>
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
      />
    </div>

    {/* Upload Photo */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Passport Size Photograph / पासपोर्ट साइज फोटो
      </label>
      <div className="flex items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600">
        <input
          type="file"
          name="photo"
          accept="image/*"
          required
          className="w-full cursor-pointer"
        />
      </div>
      <p className="mt-1 text-xs text-gray-500">
        JPG/PNG format only, max size 2MB
      </p>
    </div>

    {/* Aadhaar Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Aadhaar Card Upload / आधार कार्ड अपलोड
      </label>
      <div className="flex items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-600">
        <input
          type="file"
          name="aadhaar"
          accept="image/*,.pdf"
          required
          className="w-full cursor-pointer"
        />
      </div>
      <p className="mt-1 text-xs text-gray-500">
        PDF or Image format, max size 5MB
      </p>
    </div>

    {/* Submit */}
    <div className="pt-4">
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
      >
        Submit Registration
      </button>
    </div>
  </form>
</div>


      </div>
    </main>
  );
}
