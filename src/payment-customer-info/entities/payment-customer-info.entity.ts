import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_customer_info", { schema: "amygo1" })
export class PaymentCustomerInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "iCustomerInfoId" })
  iCustomerInfoId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("enum", { name: "eUserType", enum: ["Passenger", "Driver"] })
  eUserType: "Passenger" | "Driver";

  @Column("text", { name: "tCustomerId" })
  tCustomerId: string;

  @Column("longtext", { name: "vPaymentMethod" })
  vPaymentMethod: string;

  @Column("enum", { name: "ePaymentEnv", enum: ["Test", "Live"] })
  ePaymentEnv: "Test" | "Live";
}
