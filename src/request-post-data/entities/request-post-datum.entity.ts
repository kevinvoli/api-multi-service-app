import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("request_post_data", { schema: "amygo1" })
export class RequestPostData {
  @PrimaryGeneratedColumn({ type: "int", name: "iRequestPostId" })
  iRequestPostId: number;

  @Column("longtext", { name: "tData" })
  tData: string;

  @Column("longtext", { name: "tipaddress" })
  tipaddress: string;
}
