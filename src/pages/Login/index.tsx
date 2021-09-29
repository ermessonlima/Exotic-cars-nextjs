import { useState } from 'react';
import Link from 'next/link';

type User = {
  username: string;
  password: string;
};

export default function Form() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [users, setUsers] = useState<any>([]);

  async function saveUser() {
    if (username != '' && password != '') {
      await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      setUsername('');
      setPassword('');
      const resp = await fetch('/api/form');
      const users = await resp.json();
      setUsers(users);
    } else {
      return null;
    }
  }

  function renderUser() {
    return users.map((user: User, i) => {
      return <li key={i}>{user.username}</li>;
    });
  }

  return (
    <div>
      <h1>Sistema de login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link href="/">
        <button onClick={saveUser}>Send</button>
      </Link>

      <ul>{renderUser()}</ul>
    </div>
  );
}
