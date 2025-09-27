import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_payment_info", { schema: "amygo1" })
export class UserPaymentInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "iPaymentInfoId" })
  iPaymentInfoId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("enum", { name: "eUserType", enum: ["Passenger", "Driver"] })
  eUserType: "Passenger" | "Driver";

  @Column("text", { name: "tCardToken" })
  tCardToken: string;

  @Column("text", { name: "tAuthId" })
  tAuthId: string;

  @Column("text", { name: "tCardNum" })
  tCardNum: string;

  @Column("varchar", { name: "vCardBrand", length: 100 })
  vCardBrand: string;

  @Column("varchar", { name: "vPaymentMethod", length: 100 })
  vPaymentMethod: string;

  @Column("text", { name: "tPaymentDetails" })
  tPaymentDetails: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Deleted";

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDefault: "Yes" | "No";

  @Column("enum", { name: "ePaymentEnv", enum: ["Test", "Live"] })
  ePaymentEnv: "Test" | "Live";
}
