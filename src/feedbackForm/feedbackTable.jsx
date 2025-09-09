import React from "react";


export default function FeedbackTable({ feedbacks }) {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Feedback Submissions</h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Rating</th>
            <th className="border border-gray-300 px-4 py-2">Comment</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((fb, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{fb.rating}</td>
              <td className="border border-gray-300 px-4 py-2">{fb.comment}</td>
              <td className="border border-gray-300 px-4 py-2">{fb.category || "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
