let users = [
  { id: 1, name: "User Test", email: "user@test.com" }
];

export function getUsers(req, res) {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
}

export function createUser(req, res) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Nome e email são obrigatórios"
      });
    }

    const userExists = users.some(user => user.email === email);

    if (userExists) {
      return res.status(409).json({
        message: "Email já cadastrado"
      });
    }

    const newUser = {
      id: Date.now(),
      name,
      email
    };

    users.push(newUser);
    res.status(201).json(newUser);

  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
}

export function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const index = users.findIndex(user => user.id == id);

    if (index === -1) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      });
    }

    users[index] = { ...users[index], name, email };

    res.status(200).json(users[index]);

  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário" });
  }
}

export function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const userExists = users.some(user => user.id == id);

    if (!userExists) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      });
    }

    users = users.filter(user => user.id != id);

    res.status(200).json({ message: "Usuário removido com sucesso" });

  } catch (error) {
    res.status(500).json({ message: "Erro ao remover usuário" });
  }
}