// 'use client';
// import { useUser } from '../context/UserContext';

// export default function UserDisplay() {
//   const { user } = useUser();

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">User Information</h2>
//       <p><strong>Logged In:</strong> {user.isLoggedIn ? 'Yes' : 'No'}</p>
//       <p><strong>Name:</strong> {user.name || 'N/A'}</p>
//       <p><strong>Email:</strong> {user.email || 'N/A'}</p>
//     </div>
//   );
// }


'use client';
import { useState } from 'react';
import { useUser } from '../context/UserContext';

export default function UserDisplay() {
  const { user, login, logout } = useUser();

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Static valid credentials for login check
    const validName = 'Sitesh Kumar';
    const validEmail = 'hello@siteshkumar.com';

    if (nameInput === validName && emailInput === validEmail) {
      login({ name: nameInput, email: emailInput });
      setNameInput('');
      setEmailInput('');
      setError('');
    } else {
      setError('Invalid name or email');
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-md mx-auto mt-10 bg-white text-black">
      <h2 className="text-xl font-bold mb-4">User Login</h2>

      {user.isLoggedIn ? (
        <div>
          <p><strong>Logged In:</strong> true</p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button
            onClick={logout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2">You are not logged in.</p>
          <input
            type="text"
            placeholder="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="border p-2 rounded mr-2 mb-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="border p-2 rounded mb-2 w-full"
          />
          {error && <p className="text-red-600 mb-2">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}


