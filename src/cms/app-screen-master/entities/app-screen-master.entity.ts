import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LanguageLabel } from "../../../core_app/language-label/entities/language-label.entity";
import { LanguageLabelOther } from "../../../core_app/language-label-other/entities/language-label-other.entity";
import { LanguageLabel_1 } from "../../../core_app/language-label_1/entities/language-label_1.entity";
import { LanguageLabel_2 } from "../../../core_app/language-label_2/entities/language-label_2.entity";
import { LanguageLabel_5 } from "../../../core_app/language-label_5/entities/language-label_5.entity";

@Entity("app_screen_master", { schema: "amygo1" })
export class AppScreenMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "lPage_id" })
  lPageId: number;

  @Column("varchar", { name: "vScreenName", length: 255 })
  vScreenName: string;

  @Column("varchar", { name: "vScreenImage", length: 255 })
  vScreenImage: string;

  @Column("int", { name: "iParentId" })
  iParentId: number;

  @ManyToOne(() => AppScreenMaster, (appScreenMaster) => appScreenMaster.children)
  @JoinColumn({ name: "iParentId", referencedColumnName: "lPageId" })
  parent: AppScreenMaster;

  @OneToMany(() => AppScreenMaster, (appScreenMaster) => appScreenMaster.parent)
  children: AppScreenMaster[];

  @OneToMany(() => LanguageLabel, (languageLabel) => languageLabel.appScreen)
  languageLabels: LanguageLabel[];

  @OneToMany(
    () => LanguageLabelOther,
    (languageLabelOther) => languageLabelOther.appScreen,
  )
  languageLabelOthers: LanguageLabelOther[];

  @OneToMany(() => LanguageLabel_1, (languageLabel) => languageLabel.appScreen)
  languageLabels1: LanguageLabel_1[];

  @OneToMany(() => LanguageLabel_2, (languageLabel) => languageLabel.appScreen)
  languageLabels2: LanguageLabel_2[];

  @OneToMany(() => LanguageLabel_5, (languageLabel) => languageLabel.appScreen)
  languageLabels5: LanguageLabel_5[];

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eAppType",
    enum: ["Ride", "Delivery", "UberX", "Deliverall", "General"],
    default: "General",
  })
  eAppType: "Ride" | "Delivery" | "UberX" | "Deliverall" | "General";
}
