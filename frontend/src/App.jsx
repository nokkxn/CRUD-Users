import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const api = axios.create({
  baseURL: "http://localhost:3000"
});

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    api.get("/users")
      .then(res => setUsers(res.data))
      .catch(() => setError("Erro ao carregar usuários"))
      .finally(() => setLoading(false));
  }, []);

  function addUser() {
    setError("");

    if (!name || !email) {
      setError("Preencha todos os campos");
      return;
    }

    setLoading(true);

    api.post("/users", { name, email })
      .then(res => {
        setUsers([...users, res.data]);
        setName("");
        setEmail("");
      })
      .catch(err => {
        setError(err.response?.data?.message || "Erro ao adicionar usuário");
      })
      .finally(() => setLoading(false));
  }

  function deleteUser(id) {
    setLoading(true);

    api.delete(`/users/${id}`)
      .then(() => {
        setUsers(users.filter(u => u.id !== id));
      })
      .catch(() => {
        setError("Erro ao remover usuário");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="container">
      <h1>CRUD de Usuários</h1>

      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="form">
        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button onClick={addUser}>Adicionar</button>
      </div>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>
              {user.name}
              <small>{user.email}</small>
            </span>
            <button onClick={() => deleteUser(user.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}