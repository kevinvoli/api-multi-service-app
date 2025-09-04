import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_referrer_transaction", { schema: "amygo1" })
export class UserReferrerTransaction {
  @PrimaryGeneratedColumn({ type: "int", name: "iRefTransactionId" })
  iRefTransactionId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("enum", { name: "eUserType", enum: ["Rider", "Driver"] })
  eUserType: "Rider" | "Driver";

  @Column("text", {
    name: "tReferrerInfo",
    comment: "Details of all referrers (Direct and Parent)",
  })
  tReferrerInfo: string;
}
