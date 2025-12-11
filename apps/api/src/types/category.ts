export interface category {
  id: string,
  name: string,
  type: "income"| "expense",
  color?: string,
  icon?: string,
  isDefault: boolean,
  createdAt: string
}

export interface insertCategory {
  name: string,
  type: "income"| "expense",
  color?: string,
  icon?: string,
  isDefault?: boolean,
}
