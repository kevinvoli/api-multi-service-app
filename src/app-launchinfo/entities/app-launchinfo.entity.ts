import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("app_launch_info", { schema: "amygo1" })
export class AppLaunchInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "iImageId" })
  iImageId: number;

  @Column("text", { name: "tTitle" })
  tTitle: string;

  @Column("text", { name: "tSubtitle" })
  tSubtitle: string;

  @Column("text", { name: "vImage" })
  vImage: string;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eUserType",
    enum: ["General", "Driver", "Company", "Passenger"],
  })
  eUserType: "General" | "Driver" | "Company" | "Passenger";

  @Column("enum", { name: "eForSmartLogin", enum: ["No", "Yes"] })
  eForSmartLogin: "No" | "Yes";
}
