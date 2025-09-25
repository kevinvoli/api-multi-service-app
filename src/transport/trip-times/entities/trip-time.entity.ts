import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_times", { schema: "amygo1" })
export class TripTimes {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripTimeId" })
  iTripTimeId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("datetime", { name: "dResumeTime" })
  dResumeTime: Date;

  @Column("datetime", { name: "dPauseTime" })
  dPauseTime: Date;
}
