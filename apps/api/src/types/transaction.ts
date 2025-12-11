export interface transaction{
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
