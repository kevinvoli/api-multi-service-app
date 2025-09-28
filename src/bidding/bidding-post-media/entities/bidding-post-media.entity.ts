import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("bidding_post_media", { schema: "amygo1" })
export class BiddingPostMedia {
  @PrimaryGeneratedColumn({ type: "int", name: "ibiddingPostMediaId" })
  ibiddingPostMediaId: number;

  @Column("int", { name: "iBiddingPostId", comment: "bidding_post table id" })
  iBiddingPostId: number;

  @Column("varchar", { name: "vImage", length: 255 })
  vImage: string;

  @CreateDateColumn({ type: 'timestamp', name: 'tAddedDate' })
  tAddedDate: Date;
 
  @UpdateDateColumn({type:'timestamp', name: 'tModifiedDate'})
  tModifiedDate: Date;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("enum", {
    name: "eMediaType",
    nullable: true,
    enum: ["Image", "Video", "Audio"],
  })
  eMediaType: "Image" | "Video" | "Audio" | null;

  @Column("int", { name: "iUserId" })
  iUserId: number;
}
