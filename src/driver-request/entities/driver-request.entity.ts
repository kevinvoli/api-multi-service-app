import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_request", { schema: "amygo1" })
export class DriverRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverRequestId" })
  iDriverRequestId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iRequestId" })
  iRequestId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Decline", "Accept", "Timeout", "Received", "Sent"],
    default: () => "'Timeout'",
  })
  eStatus: "Decline" | "Accept" | "Timeout" | "Received" | "Sent";

  @Column("enum", {
    name: "eAcceptAttempted",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAcceptAttempted: "Yes" | "No";

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;

  @Column("mediumtext", { name: "vMsgCode" })
  vMsgCode: string;

  @Column("mediumtext", { name: "vStartLatlong" })
  vStartLatlong: string;

  @Column("mediumtext", { name: "vEndLatlong" })
  vEndLatlong: string;

  @Column("mediumtext", { name: "tStartAddress" })
  tStartAddress: string;

  @Column("mediumtext", { name: "tEndAddress" })
  tEndAddress: string;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("enum", {
    name: "eReceivedByPubSub",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReceivedByPubSub: "Yes" | "No";

  @Column("timestamp", {
    name: "dPunSubDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dPunSubDate: Date;

  @Column("enum", {
    name: "eReceivedByPush",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReceivedByPush: "Yes" | "No";

  @Column("timestamp", {
    name: "dPushDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dPushDate: Date;

  @Column("enum", {
    name: "eReceivedByScript",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReceivedByScript: "Yes" | "No";

  @Column("timestamp", {
    name: "dScriptDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dScriptDate: Date;

  @Column("enum", {
    name: "eFromDevice",
    comment: "From device type. (Generally, passenger's device type)",
    enum: ["Android", "Ios"],
  })
  eFromDevice: "Android" | "Ios";

  @Column("enum", {
    name: "eToDevice",
    comment: "To device type. (Generally, driver's device type)",
    enum: ["Android", "Ios"],
  })
  eToDevice: "Android" | "Ios";

  @Column("enum", {
    name: "eSent",
    comment: "This will be yes when passenger sent a request.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eSent: "Yes" | "No";

  @Column("timestamp", {
    name: "dSentDate",
    comment: "Date when passenger sent a request",
    default: () => "'0000-00-00 00:00:00'",
  })
  dSentDate: Date;

  @Column("enum", {
    name: "eTimeOut",
    comment: "This will be yes if driver received request is timeout.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eTimeOut: "Yes" | "No";

  @Column("timestamp", {
    name: "dTimeOutDate",
    comment:
      "Date when driver received request is timeout. This field must be in server's time zone not user's device time zone.",
    default: () => "'0000-00-00 00:00:00'",
  })
  dTimeOutDate: Date;

  @Column("enum", {
    name: "eReceived",
    comment:
      "This field must be ignored in every case. Should not use for report. This is for internal use only",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReceived: "Yes" | "No";

  @Column("enum", {
    name: "eOpened",
    comment: "This will be yes if driver opens request.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eOpened: "Yes" | "No";

  @Column("timestamp", {
    name: "dOpenedDate",
    comment:
      "Date when driver opens request. This field must be in server's timezone not in user's device timezone.",
    default: () => "'0000-00-00 00:00:00'",
  })
  dOpenedDate: Date;

  @Column("enum", {
    name: "eAccept",
    comment: "This will be yes if driver accepts request.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAccept: "Yes" | "No";

  @Column("timestamp", {
    name: "dAcceptDate",
    comment:
      "Date when driver declines request. This must be in server's timezone not user's device time zone.",
    default: () => "'0000-00-00 00:00:00'",
  })
  dAcceptDate: Date;

  @Column("enum", {
    name: "eDecline",
    comment:
      "This will be yes if driver accepts request. This field must be in server's time zone not user's device time zone",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDecline: "Yes" | "No";

  @Column("timestamp", {
    name: "dDeclineDate",
    comment:
      "Date when driver declines request. This must be in server's timezone not user's device time zone.",
    default: () => "'0000-00-00 00:00:00'",
  })
  dDeclineDate: Date;

  @Column("enum", {
    name: "eDiscardByApp",
    comment: "This will be yes if app discards request.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDiscardByApp: "Yes" | "No";

  @Column("timestamp", {
    name: "dDiscardByApp",
    comment:
      "Date when server discards request. This field must be in server time zone not user's device time zone. ",
    default: () => "'0000-00-00 00:00:00'",
  })
  dDiscardByApp: Date;

  @Column("enum", {
    name: "eDiscard",
    comment: "This will be yes if server discards request.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDiscard: "Yes" | "No";

  @Column("timestamp", {
    name: "dDiscardDate",
    comment: "Date when server discards request.",
    default: () => "'0000-00-00 00:00:00'",
  })
  dDiscardDate: Date;
}
