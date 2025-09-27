import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("member_log", { schema: "amygo1" })
export class MemberLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iMemberLogId" })
  iMemberLogId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("enum", {
    name: "eMemberType",
    enum: [
      "Passenger",
      "Driver",
      "Company",
      "Hotel",
      "Admin",
      "Store",
      "Organization",
      "TrackServiceCompany",
      "TrackServiceUser",
    ],
  })
  eMemberType:
    | "Passenger"
    | "Driver"
    | "Company"
    | "Hotel"
    | "Admin"
    | "Store"
    | "Organization"
    | "TrackServiceCompany"
    | "TrackServiceUser";

  @Column("enum", { name: "eMemberLoginType", enum: ["AppLogin", "WebLogin"] })
  eMemberLoginType: "AppLogin" | "WebLogin";

  @Column("enum", {
    name: "eDeviceType",
    enum: ["Android", "Ios", "Web", "Admin"],
    default: () => "'Web'",
  })
  eDeviceType: "Android" | "Ios" | "Web" | "Admin";

  @Column("timestamp", {
    name: "dDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  dDateTime: Date;

  @Column("varchar", { name: "vIP", length: 255 })
  vIp: string;

  @Column("enum", {
    name: "eAutoLogin",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAutoLogin: "Yes" | "No";

  @Column("varchar", { name: "vLocation", nullable: true, length: 200 })
  vLocation: string | null;

  @Column("varchar", { name: "vCountry", nullable: true, length: 200 })
  vCountry: string | null;

  @Column("text", { name: "tApiError", nullable: true })
  tApiError: string | null;

  @Column("enum", {
    name: "eFor",
    enum: ["SignIn", "SignUp"],
    default: () => "'SignIn'",
  })
  eFor: "SignIn" | "SignUp";
}
