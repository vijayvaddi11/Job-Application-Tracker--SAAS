import { useState } from "react";
import './formStyle.css';;

const AddJob = () => {
  const [status, setStatus] = useState("Applied");

  return (
     <div className="w-full flex justify-center mt-25 ">
      <div className="w-full max-w-xl bg-yellow-50 rounded-xl shadow-lg p-6">
        
        <h2 className="hero">
          Add Job
        </h2>

        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name"
          className=" w-full border border-gray-400 rounded-lg px-4 mb-2 py-2 focus:outline-none focus:ring-1 focus:ring-[#fbb401] ;"
        />

        {/* Job Title */}
        <input
          type="text"
          placeholder="Job Title"
          className=" w-full border border-gray-400 rounded-lg px-4 mb-2 py-2 focus:outline-none focus:ring-1 focus:ring-[#fbb401] ;"
        />

        {/* Status */}
        <div className="flex items-center gap-3 mb-3">
          <select
            className="px-4 py-2 border-gray-400 border rounded-lg  focus:outline-none focus:ring-1 focus:ring-[#FCE597] ;"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          {["Applied", "Interview", "Offer", "Rejected"].map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`px-4 py-2 rounded-lg border font-medium
                ${
                  status === item
                    ? "bg-[#e6a911] text-white"
                    : "bg-white text-yellow-600"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Interview Date */}
        <input
          type="date"
          className="w-full border border-gray-400 rounded-lg px-4 mb-2 py-2 focus:outline-none focus:ring-1 focus:ring-[#fbb401] ;"
        />


      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Location"
          className=" w-full border border-gray-400 rounded-lg px-4 mb-2 py-2 focus:outline-none focus:ring-1 focus:ring-[#fbb401] ;"
        />
        <input
          type="text"
          placeholder="Salary"
          className=" w-full border border-gray-400 rounded-lg px-4 mb-2 py-2 focus:outline-none focus:ring-1 focus:ring-[#fbb401] ;"
        />
        </div>

        {/* Notes */}
        <textarea
          rows="3"
          placeholder="Notes"
          className="w-full border border-gray-400 rounded-lg px-4 mb-2 py-2 focus:outline-none focus:ring-1 focus:ring-[#fbb401] ;"
        />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button className="px-5 py-2 border rounded-lg text-gray-600 hover:bg-[#FEF2CF]">
            Cancel
          </button>
          <button className="px-5 py-2 bg-[#e6a911] text-gray-800 rounded-lg hover:bg-[#FCE597]">
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
