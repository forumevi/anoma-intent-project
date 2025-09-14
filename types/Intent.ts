export interface Intent {
  type: string;
  amount: number;
  token: string;
  tx: string;
  status: "pending" | "fulfilled";
}
