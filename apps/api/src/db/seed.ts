import { sql } from "bun";
import type {insertCategory} from "../types/types"

const seedCategory = async () => {
  const defaultCategories: insertCategory[] =
    [
      { type: "expense", name: "Alimentação", color: "#e74c3c", icon: "food" },
      { type: "expense", name: "Transporte", color: "#3498db", icon: "car" },
      { type: "expense", name: "Moradia", color: "#9b59b6", icon: "home" },
      { type: "expense", name: "Saúde", color: "#2ecc71", icon: "health" },
      { type: "income", name: "Salário", color: "#27ae60", icon: "money" },
      { type: "income", name: "Freelance", color: "#16a085", icon: "work" },
    ];

  for (let category of defaultCategories) {
    await sql`
      INSERT INTO categories (name, type, color, icon, is_default)
              VALUES (
                ${category.name},
                ${category.type},
                ${category.color},
                ${category.icon},
                TRUE
              )
            `;
  }
}

await seedCategory();
