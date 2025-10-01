import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DocumentMaster } from "../../document-master/entities/document-master.entity";

@Entity("document_list", { schema: "amygo1" })
export class DocumentList {
  @PrimaryGeneratedColumn({ type: "int", name: "doc_id" })
  docId: number;

  @Column("int", { name: "doc_masterid" })
  docMasterid: number;

  @ManyToOne(() => DocumentMaster, (docMaster) => docMaster.documentLists)
  @JoinColumn({ name: "doc_masterid", referencedColumnName: "docMasterid" })
  documentMaster: DocumentMaster;

  @Column("enum", {
    name: "doc_usertype",
    enum: ["company", "driver", "car", "store", "trackcompany"],
  })
  docUsertype: "company" | "driver" | "car" | "store" | "trackcompany";

  @Column("int", { name: "doc_userid" })
  docUserid: number;

  @Column("date", { name: "ex_date" })
  exDate: string;

  @Column("varchar", { name: "doc_file", length: 200 })
  docFile: string;

  @Column("enum", {
    name: "status",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  status: "Active" | "Inactive" | "Deleted";

  @Column("timestamp", { name: "edate", default: () => "CURRENT_TIMESTAMP" })
  edate: Date;

  @Column("date", { name: "req_date" })
  reqDate: string;

  @Column("text", { name: "req_file" })
  reqFile: string;

  @Column("date", { name: "lastReminderDate" })
  lastReminderDate: string;
}
