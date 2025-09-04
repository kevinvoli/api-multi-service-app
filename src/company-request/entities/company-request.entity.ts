import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("company_request", { schema: "amygo1" })
export class CompanyRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "iCompanyRequestId" })
  iCompanyRequestId: number;

  @Column("int", { name: "iRequestId" })
  iRequestId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("mediumtext", { name: "vMsgCode" })
  vMsgCode: string;

  @Column("timestamp", {
    name: "dAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddedDate: Date;
}
