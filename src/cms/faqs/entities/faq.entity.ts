import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FaqCategories } from "../../faq-categories/entities/faq-category.entity";

@Entity("faqs", { schema: "amygo1" })
export class Faqs {
  @PrimaryGeneratedColumn({ type: "int", name: "iFaqId" })
  iFaqId: number;

  @Column("int", { name: "iFaqcategoryId" })
  iFaqcategoryId: number;

  @ManyToOne(() => FaqCategories, (faqCategory) => faqCategory.faqs)
  @JoinColumn({
    name: "iFaqcategoryId",
    referencedColumnName: "iFaqcategoryId",
  })
  faqCategory: FaqCategories;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("longtext", { name: "vTitle_EN" })
  vTitleEn: string;

  @Column("longtext", { name: "vTitle_FR" })
  vTitleFr: string;

  @Column("longtext", { name: "tAnswer_EN" })
  tAnswerEn: string;

  @Column("longtext", { name: "tAnswer_FR" })
  tAnswerFr: string;

  @Column("enum", {
    name: "eTopic",
    enum: ["Front", "Admin", "RiderApp", "DriverApp", "General"],
  })
  eTopic: "Front" | "Admin" | "RiderApp" | "DriverApp" | "General";
}