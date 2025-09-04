import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("withdraw_requests", { schema: "amygo1" })
export class WithdrawRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "iWithdrawRequestsId" })
  iWithdrawRequestsId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("varchar", { name: "vName", length: 100 })
  vName: string;

  @Column("varchar", { name: "vLastName", length: 100 })
  vLastName: string;

  @Column("varchar", { name: "vEmail", length: 100 })
  vEmail: string;

  @Column("mediumtext", { name: "vCode" })
  vCode: string;

  @Column("mediumtext", { name: "vPhone" })
  vPhone: string;

  @Column("float", { name: "fAccountBalance", precision: 10, scale: 2 })
  fAccountBalance: number;

  @Column("float", { name: "fAmount", precision: 10, scale: 2 })
  fAmount: number;

  @Column("varchar", { name: "vCurrency", length: 100 })
  vCurrency: string;

  @Column("mediumtext", { name: "vBankAccountHolderName" })
  vBankAccountHolderName: string;

  @Column("mediumtext", { name: "vBankName" })
  vBankName: string;

  @Column("mediumtext", { name: "vAccountNumber" })
  vAccountNumber: string;

  @Column("mediumtext", { name: "vBIC_SWIFT_Code" })
  vBicSwiftCode: string;

  @Column("mediumtext", { name: "vBankLocation" })
  vBankLocation: string;

  @Column("timestamp", {
    name: "tRequestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRequestDate: Date;

  @Column("enum", {
    name: "eMarkAsDone",
    comment: "Record checked by admin - only for admin seen or not",
    enum: ["", "Yes", "No"],
  })
  eMarkAsDone: "" | "Yes" | "No";

  @Column("varchar", { name: "vPaymentEmail", length: 100 })
  vPaymentEmail: string;
}
