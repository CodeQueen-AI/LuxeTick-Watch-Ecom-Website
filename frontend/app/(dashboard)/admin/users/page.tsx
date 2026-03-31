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

import { useEffect, useMemo, useState } from 'react';
import { FiTrash2, FiEdit2, FiSearch } from 'react-icons/fi';

type User = {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
};

// 🎨 generate color from name (consistent colors)
const colors = [
  'bg-red-100 text-red-600',
  'bg-blue-100 text-blue-600',
  'bg-green-100 text-green-600',
  'bg-purple-100 text-purple-600',
  'bg-pink-100 text-pink-600',
  'bg-yellow-100 text-yellow-600',
];

const getAvatarColor = (name: string) => {
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');

  // ✅ Inline edit state
  const [editUserId, setEditUserId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState({ name: '', email: '' });

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

  const filteredUsers = useMemo(() => {
    const q = search.toLowerCase();
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q)
    );
  }, [users, search]);

  // 🔴 Delete user
  const handleDelete = async (id: string) => {
    if (!confirm('Delete this user?')) return;

    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: 'DELETE',
    });

    setUsers((prev) => prev.filter((u) => u._id !== id));
  };

  // ✏️ Start inline edit
  const startEdit = (user: User) => {
    setEditUserId(user._id);
    setEditFormData({ name: user.name, email: user.email });
  };

  // 💾 Save inline edit
  const handleUpdate = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });

      if (!res.ok) throw new Error('Update failed');

      const updatedUser = await res.json();

      setUsers((prev) =>
        prev.map((u) => (u._id === updatedUser._id ? updatedUser : u))
      );

      setEditUserId(null); // exit edit mode
    } catch {
      alert('Update failed');
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        Loading users...
      </div>
    );

  if (error)
    return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 min-h-screen">
      {/* Center Heading */}
      <div className="text-center mb-8">
        <h2 className="text-5xl font-serif font-extralight">Users</h2>
      </div>

      {/* Search + Count */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm">
          Users Total: <span className="font-semibold">{filteredUsers.length}</span>
        </div>

        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="pl-11 pr-4 py-2 w-72 rounded-full border bg-white shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm transition"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-wide bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Joined</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-10 text-gray-400">
                  No users found
                </td>
              </tr>
            )}

            {filteredUsers.map((user) => (
              <tr key={user._id} className="border-t hover:bg-gray-50 transition">
                {/* Name */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${getAvatarColor(user.name)}`}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>

                  {editUserId === user._id ? (
                    <input
                      type="text"
                      value={editFormData.name}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, name: e.target.value })
                      }
                      className="border-b border-gray-400 focus:outline-none text-gray-800"
                    />
                  ) : (
                    <span className="font-medium capitalize">{user.name}</span>
                  )}
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-gray-800">
                  {editUserId === user._id ? (
                    <input
                      type="email"
                      value={editFormData.email}
                      onChange={(e) =>
                        setEditFormData({ ...editFormData, email: e.target.value })
                      }
                      className="border-b border-gray-400 focus:outline-none text-gray-800"
                    />
                  ) : (
                    user.email
                  )}
                </td>

                {/* Joined Date */}
                <td className="px-6 py-4 text-gray-800">
                  {new Date(user.createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-center flex justify-center gap-2">
                  {editUserId === user._id ? (
                    <button
                      onClick={() => handleUpdate(user._id)}
                      className="px-3 py-1 bg-green-600 text-white  hover:bg-green-700 transition cursor-pointer"
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(user)}
                        className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
                      >
                        <FiEdit2 size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(user._id)}
                        className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}