'use client';

import { useEffect, useState } from 'react';

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  // agar aur fields hain to add kar sakti ho
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Yahan apna backend URL daal do
        const res = await fetch('http://localhost:5000/api/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Agar JWT token use kar rahi ho to yahan add karo
            // Authorization: `Bearer ${token}`
          },
          cache: 'no-store',        // real-time data ke liye
        });

        if (!res.ok) throw new Error('Failed to fetch users');

        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-zinc-800">All Registered Users</h2>
        <p className="text-zinc-500">{users.length} users found</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="border-b border-zinc-200 text-left text-zinc-500 text-sm">
              <th className="py-4 px-6 font-medium">Name</th>
              <th className="py-4 px-6 font-medium">Email</th>
              <th className="py-4 px-6 font-medium">Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b border-zinc-100 hover:bg-zinc-50">
                <td className="py-5 px-6 font-medium text-zinc-800">{user.name}</td>
                <td className="py-5 px-6 text-zinc-600">{user.email}</td>
                <td className="py-5 px-6 text-zinc-500">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {users.length === 0 && (
        <p className="text-center text-zinc-500 py-10">No users registered yet.</p>
      )}
    </div>
  );
}