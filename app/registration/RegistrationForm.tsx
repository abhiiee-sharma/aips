"use client";

export default function RegistrationForm() {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/register", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = data.redirect;
    } else {
      alert("Submission failed. Please try again.");
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Registration Form
      </h2>

      <form
        onSubmit={handleSubmit}
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
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Father */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Father’s Name / पिता का नाम
          </label>
          <input
            type="text"
            name="father_name"
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            required
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        {/* Mobile Number */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Mobile Number / मोबाइल नंबर
  </label>
  <input
    type="tel"
    name="mobile"
    required
    placeholder="Enter mobile number"
    pattern="[0-9]{10}"
    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
  />
  <p className="mt-1 text-xs text-gray-500">
    10-digit mobile number
  </p>
</div>


        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border px-3 py-2"
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md"
        >
          Submit Registration
        </button>
      </form>
    </div>
  );
}
