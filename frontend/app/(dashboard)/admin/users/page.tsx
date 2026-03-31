// 'use client';

// import { useEffect, useState } from 'react';

// type User = {
//   _id: string;
//   name: string;
//   email: string;
//   createdAt: string;
//   // agar aur fields hain to add kar sakti ho
// };

// export default function UsersPage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         // Yahan apna backend URL daal do
//         const res = await fetch('http://localhost:5000/api/users', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             // Agar JWT token use kar rahi ho to yahan add karo
//             // Authorization: `Bearer ${token}`
//           },
//           cache: 'no-store',        // real-time data ke liye
//         });

//         if (!res.ok) throw new Error('Failed to fetch users');

//         const data = await res.json();
//         setUsers(data);
//       } catch (err: any) {
//         setError(err.message || 'Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <p className="text-center text-lg">Loading users...</p>;
//   if (error) return <p className="text-red-500 text-center">{error}</p>;

//   return (
//     <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8">
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-3xl font-semibold text-zinc-800">All Registered Users</h2>
//         <p className="text-zinc-500">{users.length} users found</p>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full min-w-full">
//           <thead>
//             <tr className="border-b border-zinc-200 text-left text-zinc-500 text-sm">
//               <th className="py-4 px-6 font-medium">Name</th>
//               <th className="py-4 px-6 font-medium">Email</th>
//               <th className="py-4 px-6 font-medium">Joined Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id} className="border-b border-zinc-100 hover:bg-zinc-50">
//                 <td className="py-5 px-6 font-medium text-zinc-800">{user.name}</td>
//                 <td className="py-5 px-6 text-zinc-600">{user.email}</td>
//                 <td className="py-5 px-6 text-zinc-500">
//                   {new Date(user.createdAt).toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric'
//                   })}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {users.length === 0 && (
//         <p className="text-center text-zinc-500 py-10">No users registered yet.</p>
//       )}
//     </div>
//   );
// }













'use client';

import { useEffect, useState } from 'react';
import { FiTrash2, FiEdit2, FiX } from 'react-icons/fi';

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // 🔹 Edit states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '' });

  // ✅ Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users', {
          cache: 'no-store',
        });

        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 🔴 Delete
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this user?')) return;

    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: 'DELETE',
    });

    setUsers((prev) => prev.filter((u) => u._id !== id));
  };

  // ✏️ Open Edit Modal
  const handleEditClick = (user: User) => {
    setSelectedUser(user);
    setFormData({ name: user.name, email: user.email });
    setIsModalOpen(true);
  };

  // 💾 Update user
  const handleUpdate = async () => {
    if (!selectedUser) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/users/${selectedUser._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Update failed');

      const updatedUser = await res.json();

      // UI update
      setUsers((prev) =>
        prev.map((u) =>
          u._id === updatedUser._id ? updatedUser : u
        )
      );

      setIsModalOpen(false);
    } catch {
      alert('Update failed');
    }
  };

  if (loading) return <p className="text-center text-zinc-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-sm p-8">
      
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-semibold text-zinc-800">Users</h2>
        <span className="text-sm text-zinc-500">{users.length} records</span>
      </div>

      {/* Table */}
      <div className="overflow-hidden border rounded-xl">
        <table className="w-full text-sm">
          <thead className="bg-zinc-50 text-zinc-500">
            <tr>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Joined</th>
              <th className="px-6 py-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t hover:bg-zinc-50">
                
                <td className="px-6 py-4 font-medium">{user.name}</td>
                <td className="px-6 py-4 text-zinc-600">{user.email}</td>
                <td className="px-6 py-4 text-zinc-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-center space-x-4">
                  
                  {/* Edit */}
                  <button
                    onClick={() => handleEditClick(user)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FiEdit2 size={16} />
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <FiTrash2 size={16} />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🧾 Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          
          <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
            
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Edit User</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <FiX />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email"
                className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}