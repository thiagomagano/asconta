import { sql } from "bun";
import { insertCategory } from "@/types/category";

const seedCategory = async () => {
  const defaultCategories: insertCategory[] =
    [
      { type: "expense", name: "Alimentação", color: "#e74c3c", icon: "food" },
      { type: "expense", name: "Transporte", color: "#3498db", icon: "car" },
      { type: "expense", name: "Moradia", color: "#9b59b6", icon: "home" },
      { type: "expense", name: "Saúde", color: "#2ecc71", icon: "health" },
      { type: "income", name: "Salário", color: "#27ae60", icon: "money" },
      { type: "income", name: "Freelance", color: "#16a085", icon: "work" },
      { type: "income", name: "Vale", color: "#87a085", icon: "food" },
    ];

  await sql`INSERT INTO categories ${sql(defaultCategories)}`;
}

await seedCategory();
