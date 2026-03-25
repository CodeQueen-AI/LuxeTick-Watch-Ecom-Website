export default function UsersPage() {
  const users = [
    { id: 1, name: "Ahmed Khan", email: "ahmed@example.com", joined: "12 Mar 2026" },
    { id: 2, name: "Sumbal Fatima", email: "sumbal@example.com", joined: "05 Feb 2026" },
    { id: 3, name: "Bilal Malik", email: "bilal@example.com", joined: "20 Jan 2026" },
    { id: 4, name: "Ayesha Noor", email: "ayesha@example.com", joined: "10 Mar 2026" },
  ];

  return (
    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
      <h2 className="text-3xl font-semibold mb-8">All Users</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="text-left py-4">Name</th>
            <th className="text-left py-4">Email</th>
            <th className="text-left py-4">Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-800 hover:bg-gray-800/50">
              <td className="py-5 font-medium">{user.name}</td>
              <td className="py-5 text-gray-400">{user.email}</td>
              <td className="py-5 text-gray-400">{user.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}