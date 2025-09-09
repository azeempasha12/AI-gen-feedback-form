import { useState } from "react";
import FeedbackTable from "./feedbackForm/feedbackTable";
import React from 'react'
import './App.css'
import FeedbackForm from './feedbackForm/feedbackForm'

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = async (feedback) => {
    setFeedbacks([...feedbacks, { ...feedback, category: "Pending" }]);

    // Send to webhook (n8n)
    try {
      await fetch("https://azeempasha.app.n8n.cloud/webhook-test/1356c6ca-9ee6-4ced-ada2-ea4866d57c6b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <FeedbackForm onSubmit={handleSubmit} />
      <FeedbackTable feedbacks={feedbacks} />
    </div>
  );
}

export default App;
