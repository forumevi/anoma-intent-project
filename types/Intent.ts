export interface Intent {
  id: string;
  type: "swap" | "stake" | "transfer";
  amount: number;
  token: string;
  date: string;
  status?: "pending" | "completed" | "failed"; // ← opsiyonel hale getirildi
}
