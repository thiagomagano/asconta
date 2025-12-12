export interface Account {
  id: string,
  title: string,
  type: "checking" | "savings" | "cash" | "investment";
  initialBalance: number,
  currentBalance: number,
  currency: string,
  color?: string,
  icon?: string,
  isActive: boolean
  createdAt: Date,
  updatedAt: Date,
}

export interface CreateAccountDTO {
  name: string;
  type: "checking" | "savings" | "cash" | "investment";
  initialBalance: number;
  color?: string;
  icon?: string;
}

export interface UpdateAccountDTO {
  name?: string;
  color?: string;
  icon?: string;
}
