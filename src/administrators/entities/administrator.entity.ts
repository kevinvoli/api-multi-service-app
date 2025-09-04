import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("administrators", { schema: "amygo1" })
export class Administrators {
  @PrimaryGeneratedColumn({ type: "int", name: "iAdminId" })
  iAdminId: number;

  @Column("int", { name: "iGroupId", default: () => "'1'" })
  iGroupId: number;

  @Column("varchar", { name: "vFirstName", length: 255 })
  vFirstName: string;

  @Column("varchar", { name: "vLastName", length: 255 })
  vLastName: string;

  @Column("varchar", { name: "vEmail", length: 255 })
  vEmail: string;

  @Column("varchar", { name: "vContactNo", length: 100 })
  vContactNo: string;

  @Column("varchar", { name: "vCode", length: 50 })
  vCode: string;

  @Column("varchar", { name: "vPassword", length: 255 })
  vPassword: string;

  @Column("varchar", { name: "vCountry", length: 200 })
  vCountry: string;

  @Column("varchar", { name: "vState", length: 255 })
  vState: string;

  @Column("varchar", { name: "vCity", length: 255 })
  vCity: string;

  @Column("varchar", { name: "vAddress", length: 255 })
  vAddress: string;

  @Column("varchar", { name: "vAddressLat", length: 255 })
  vAddressLat: string;

  @Column("varchar", { name: "vAddressLong", length: 255 })
  vAddressLong: string;

  @Column("float", { name: "fHotelServiceCharge", precision: 12 })
  fHotelServiceCharge: number;

  @Column("varchar", { name: "vPaymentEmail", length: 255 })
  vPaymentEmail: string;

  @Column("varchar", { name: "vBankAccountHolderName", length: 255 })
  vBankAccountHolderName: string;

  @Column("varchar", { name: "vAccountNumber", length: 255 })
  vAccountNumber: string;

  @Column("varchar", { name: "vBankName", length: 255 })
  vBankName: string;

  @Column("varchar", { name: "vBankLocation", length: 255 })
  vBankLocation: string;

  @Column("mediumtext", { name: "vBIC_SWIFT_Code" })
  vBicSwiftCode: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDefault: "Yes" | "No";
}
