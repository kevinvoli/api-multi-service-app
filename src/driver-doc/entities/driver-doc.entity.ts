import { Column, Entity } from "typeorm";

@Entity("driver_doc", { schema: "amygo1" })
export class DriverDoc {
  @Column("int", { primary: true, name: "iDriverDocId" })
  iDriverDocId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("varchar", { name: "vLicence", length: 500 })
  vLicence: string;

  @Column("varchar", { name: "vNoc", length: 500 })
  vNoc: string;

  @Column("varchar", { name: "vCerti", length: 500 })
  vCerti: string;
}
