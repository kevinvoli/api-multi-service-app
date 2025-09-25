import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_profile_master", { schema: "amygo1" })
export class UserProfileMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserProfileMasterId" })
  iUserProfileMasterId: number;

  @Column("longtext", { name: "vTitle" })
  vTitle: string;

  @Column("longtext", { name: "vSubTitle" })
  vSubTitle: string;

  @Column("longtext", { name: "vScreenHeading" })
  vScreenHeading: string;

  @Column("longtext", { name: "vScreenTitle" })
  vScreenTitle: string;

  @Column("longtext", { name: "tDescription" })
  tDescription: string;

  @Column("longtext", { name: "vScreenButtonText" })
  vScreenButtonText: string;

  @Column("varchar", { name: "vImage", length: 500 })
  vImage: string;

  @Column("varchar", { name: "vWelcomeImage", length: 500 })
  vWelcomeImage: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("text", { name: "vProfileName" })
  vProfileName: string;

  @Column("longtext", { name: "vShortProfileName" })
  vShortProfileName: string;
}
