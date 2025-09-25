import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("wallet_money_referrer_email", { schema: "amygo1" })
export class WalletMoneyReferrerEmail {
  @PrimaryGeneratedColumn({ type: "int", name: "iEmailId" })
  iEmailId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("text", { name: "tMailInfo" })
  tMailInfo: string;

  @Column("enum", { name: "eSent", enum: ["Yes", "No"], default: () => "'No'" })
  eSent: "Yes" | "No";

  @Column("datetime", { name: "dDate" })
  dDate: Date;
}
