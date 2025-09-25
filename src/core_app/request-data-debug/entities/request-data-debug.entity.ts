import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("request_data_debug", { schema: "amygo1" })
export class RequestDataDebug {
  @PrimaryGeneratedColumn({ type: "int", name: "iRequestData" })
  iRequestData: number;

  @Column("text", { name: "tTitle" })
  tTitle: string;

  @Column("varchar", { name: "tType", length: 255 })
  tType: string;

  @Column("longtext", { name: "tDescription" })
  tDescription: string;

  @Column("longtext", { name: "tPurpose" })
  tPurpose: string;

  @Column("longtext", { name: "tCallToAction" })
  tCallToAction: string;

  @Column("longtext", { name: "tRequestParam" })
  tRequestParam: string;

  @Column("longtext", { name: "tResponse" })
  tResponse: string;

  @Column("longtext", { name: "tErrorResponse" })
  tErrorResponse: string;

  @Column("datetime", {
    name: "dModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dModifiedDate: Date;
}
