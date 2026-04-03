"use client";
import { useEffect, useState } from "react";

type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function AdminContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch messages from backend
  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact");
      const data = await res.json();
      if (data.success) setMessages(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) return <p className="p-6">Loading messages...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td className="border p-2">{msg._id}</td>
                <td className="border p-2">{msg.name}</td>
                <td className="border p-2">{msg.email}</td>
                <td className="border p-2">{msg.message}</td>
                <td className="border p-2">
                  {new Date(msg.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}