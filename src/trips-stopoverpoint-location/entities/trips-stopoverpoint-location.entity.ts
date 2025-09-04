import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trips_stopoverpoint_location", { schema: "amygo1" })
export class TripsStopoverpointLocation {
  @PrimaryGeneratedColumn({ type: "int", name: "iStopId" })
  iStopId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("text", { name: "iCabRequestId" })
  iCabRequestId: string;

  @Column("text", { name: "tDestLatitude" })
  tDestLatitude: string;

  @Column("text", { name: "tDestLongitude" })
  tDestLongitude: string;

  @Column("text", { name: "tDAddress" })
  tDAddress: string;

  @Column("text", { name: "tActualDestLatitude" })
  tActualDestLatitude: string;

  @Column("text", { name: "tActualDestLongitude" })
  tActualDestLongitude: string;

  @Column("text", { name: "tActualDAddress" })
  tActualDAddress: string;

  @Column("float", { name: "fWaitingTime", precision: 12 })
  fWaitingTime: number;

  @Column("datetime", { name: "tReachedTime" })
  tReachedTime: Date;

  @Column("datetime", { name: "tEndTime" })
  tEndTime: Date;

  @Column("enum", { name: "eReached", enum: ["Yes", "No"] })
  eReached: "Yes" | "No";

  @Column("enum", { name: "eCanceled", enum: ["Yes", "No"] })
  eCanceled: "Yes" | "No";
}
