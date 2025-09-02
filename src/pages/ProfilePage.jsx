import { useState } from "react";

export default function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">My Profile</h2>

      {/* First Name */}
      <label className="block font-medium mb-1">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Enter first name"
        className="w-full border-b-2 border-blue-400 p-2 mb-4 outline-none"
      />

      {/* Last Name */}
      <label className="block font-medium mb-1">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Enter last name"
        className="w-full border-b p-2 mb-6 outline-none"
      />

      {/* Submit Button */}
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold mb-6">
        SUBMIT
      </button>

      {/* Mobile Number */}
      <div className="flex justify-between items-center border-b py-3">
        <div>
          <p className="text-gray-500">Mobile Number</p>
          <p className="font-medium">{mobile}</p>
        </div>
        <button className="text-blue-500 font-semibold">Update</button>
      </div>

      {/* Email ID */}
      <div className="flex justify-between items-center border-b py-3">
        <div>
          <p className="text-gray-500">Email ID</p>
          <p className="font-medium">{email}</p>
        </div>
        <button className="text-blue-500 font-semibold">Update</button>
      </div>
    </div>
  );
}
