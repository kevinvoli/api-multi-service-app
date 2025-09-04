export class PaymentTransaction {}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_transactions", { schema: "amygo1" })
export class PaymentTransactions {
  @PrimaryGeneratedColumn({ type: "int", name: "iTransactionId" })
  iTransactionId: number;

  @Column("text", { name: "tReferenceNo" })
  tReferenceNo: string;

  @Column("text", { name: "tTransactionResponse" })
  tTransactionResponse: string;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("enum", {
    name: "eResponseReceived",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eResponseReceived: "Yes" | "No";

  @Column("text", { name: "tRequestData" })
  tRequestData: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["INITIATED", "PENDING", "EXPIRED", "SUCCESS", "FAILED"],
    default: () => "'INITIATED'",
  })
  eStatus: "INITIATED" | "PENDING" | "EXPIRED" | "SUCCESS" | "FAILED";
}
