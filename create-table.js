import { sql } from "./db.js";

sql`
CREATE TABLE Videos (
id    TEXT PRIMARY KEY,
title    TEXT,
description    TEXT,
duration    INTEGER
);
`.then(() => {
  console.log("Tabela Criada!");
});
