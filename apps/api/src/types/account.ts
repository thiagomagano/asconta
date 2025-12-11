export interface Account {
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
