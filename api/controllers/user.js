import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios(`Id`, `Name`, `Country`, `Score`) VALUES(?)";

  const values = [
    req.body.id,
    req.body.Name,
    req.body.Country,
    req.body.Score,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Success.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `Id` = ?, `Name` = ?, `Country` = ?, `Score` = ? WHERE `id` = ?";

  const values = [
    req.body.id,
    req.body.Name,
    req.body.Country,
    req.body.Score,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Success.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("delete.");
  });
};

