interface Account {
  id: string,
  title: string,
  type: string,
  initialBalance: number,
  currentBalance: number,
  currency: string,
  color?: string,
  icon?: string,
  isActive: boolean
  createdAt: string,
  updatedAt: string,
}

interface transaction{
  id: string,
  accountId: string,
  categoryId: string,
  type: "income" | "expense",
  amount: number,
  description: string,
  date: string,
  notes?: string,             // Campo opcional para observações
  createdAt: string,
  updatedAt: string

}

interface category {
  id: string,
  name: string,
  type: "income"| "expense",
  color?: string,
  icon?: string,
  isDefault: boolean,
  createdAt: string
}
