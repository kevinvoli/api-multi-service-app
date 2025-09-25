import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bidding_driver_service", { schema: "amygo1" })
export class BiddingDriverService {
  @PrimaryGeneratedColumn({ type: "int", name: "iBiddingDriverServiceId" })
  iBiddingDriverServiceId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("longtext", { name: "vBiddingId" })
  vBiddingId: string;
}
