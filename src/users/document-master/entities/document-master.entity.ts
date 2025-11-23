import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "../../../location/country/entities/country.entity";
import { VehicleCategory } from "../../../vehicles/vehicle-category/entities/vehicle-category.entity";
import { BiddingService } from "../../../bidding/bidding-service/entities/bidding-service.entity";
import { DocumentList } from "../../document-list/entities/document-list.entity";

export enum docUsertype{
  "company", "driver", "car", "store"
}

export enum exStatus{
 "yes", "no" 
}

export enum status{
  "Active", "Inactive", "Deleted"
}

export enum eType{
  "Ride", "Delivery", "UberX"
}

export enum eDocServiceType{
  "General", "ServiceSpecific", "BiddingSpecific"
}

@Entity("document_master", { schema: "amygo1" })
export class DocumentMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "doc_masterid" })
  docMasterid: number;

  @Column("enum", {
    name: "doc_usertype",
    enum: docUsertype,
  })
  docUsertype: docUsertype;

  @Column("varchar", { name: "doc_name", length: 50 })
  docName: string;

  // @Column("varchar", { name: "country", length: 10 })
  // countryCode?: string;

  @ManyToOne(() => Country, (country) => country.documentMasters)
  @JoinColumn({ name: "country",
    //  referencedColumnName: "vCountryCode" 
    })
  country: Country;

  @Column("enum", { name: "ex_status", enum: exStatus })
  exStatus: exStatus;

  @Column("enum", {
    name: "status",
    enum:status,
    nullable:true,
    // default: "Active",
  })
  status: status;

  @Column("timestamp", {
    name: "doc_instime",
    default: () => "CURRENT_TIMESTAMP",
  })
  docInstime?: Date;

  @Column("varchar", { name: "doc_name_EN", length: 50 })
  docNameEn: string;

  @Column("varchar", { name: "doc_name_FR", length: 50 })
  docNameFr: string;

  @Column("enum", {
    name: "eType",
    enum: eType,
    nullable:true
    // default: "Ride",
  })
  eType?:eType;

  @Column("enum", {
    name: "eDocServiceType",
    enum: eDocServiceType,
    nullable:true,
    // default: "General",
  })
  eDocServiceType?: eDocServiceType;

  @Column("int", { name: "iVehicleCategoryId", default: "0" })
  iVehicleCategoryId?: number;

  @ManyToOne(
    () => VehicleCategory,
    (vehicleCategory) => vehicleCategory.documentMasters,
  )
  @JoinColumn({
    name: "iVehicleCategoryId",
    // referencedColumnName: "iVehicleCategoryId",
  })
  vehicleCategory?: VehicleCategory;

  @Column("int", { name: "iDisplayOrder", default: () => "'1'" })
  iDisplayOrder?: number;

  @Column("int", { name: "iBiddingId" })
  iBiddingId?: number;

  @ManyToOne(() => BiddingService, (bidding) => bidding.documentMasters)
  @JoinColumn({ name: "iBiddingId", 
    // referencedColumnName: "iBiddingId"
   })
  bidding?: BiddingService;

  @OneToMany(() => DocumentList, (docList) => docList.documentMaster)
  documentLists?: DocumentList[];
}
