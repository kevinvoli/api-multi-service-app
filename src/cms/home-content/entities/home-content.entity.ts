import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("home_content", { schema: "amygo1" })
export class HomeContent {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "vCode", length: 100 })
  vCode: string;

  @Column("varchar", { name: "header_first_label", length: 350 })
  headerFirstLabel: string;

  @Column("varchar", { name: "header_second_label", length: 350 })
  headerSecondLabel: string;

  @Column("varchar", { name: "home_banner_left_image", length: 350 })
  homeBannerLeftImage: string;

  @Column("text", { name: "left_banner_txt" })
  leftBannerTxt: string;

  @Column("varchar", { name: "home_banner_right_image", length: 350 })
  homeBannerRightImage: string;

  @Column("text", { name: "right_banner_txt" })
  rightBannerTxt: string;

  @Column("varchar", { name: "third_sec_title", length: 500 })
  thirdSecTitle: string;

  @Column("text", { name: "third_sec_desc" })
  thirdSecDesc: string;

  @Column("varchar", { name: "third_mid_image_one", length: 350 })
  thirdMidImageOne: string;

  @Column("varchar", { name: "third_mid_title_one", length: 500 })
  thirdMidTitleOne: string;

  @Column("text", { name: "third_mid_desc_one" })
  thirdMidDescOne: string;

  @Column("varchar", { name: "third_mid_image_two", length: 350 })
  thirdMidImageTwo: string;

  @Column("varchar", { name: "third_mid_title_two", length: 500 })
  thirdMidTitleTwo: string;

  @Column("text", { name: "third_mid_desc_two" })
  thirdMidDescTwo: string;

  @Column("varchar", { name: "third_mid_image_three", length: 350 })
  thirdMidImageThree: string;

  @Column("varchar", { name: "third_mid_title_three", length: 500 })
  thirdMidTitleThree: string;

  @Column("text", { name: "third_mid_desc_three" })
  thirdMidDescThree: string;

  @Column("varchar", { name: "mobile_app_bg_img", length: 350 })
  mobileAppBgImg: string;

  @Column("varchar", { name: "mobile_app_left_img", length: 350 })
  mobileAppLeftImg: string;

  @Column("varchar", { name: "mobile_app_right_title", length: 500 })
  mobileAppRightTitle: string;

  @Column("text", { name: "mobile_app_right_desc" })
  mobileAppRightDesc: string;

  @Column("varchar", { name: "taxi_app_bg_img", length: 350 })
  taxiAppBgImg: string;

  @Column("varchar", { name: "taxi_app_left_img", length: 350 })
  taxiAppLeftImg: string;

  @Column("varchar", { name: "taxi_app_right_title", length: 500 })
  taxiAppRightTitle: string;

  @Column("text", { name: "taxi_app_right_desc" })
  taxiAppRightDesc: string;

  @Column("text", { name: "driver_sec_first_label" })
  driverSecFirstLabel: string;

  @Column("text", { name: "driver_sec_second_label" })
  driverSecSecondLabel: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("varchar", { name: "third_mid_image_one1", length: 350 })
  thirdMidImageOne1: string;

  @Column("varchar", { name: "third_mid_title_one1", length: 500 })
  thirdMidTitleOne1: string;

  @Column("text", { name: "third_mid_desc_one1" })
  thirdMidDescOne1: string;

  @Column("varchar", { name: "third_mid_image_two1", length: 350 })
  thirdMidImageTwo1: string;

  @Column("varchar", { name: "third_mid_title_two1", length: 500 })
  thirdMidTitleTwo1: string;

  @Column("text", { name: "third_mid_desc_two1" })
  thirdMidDescTwo1: string;

  @Column("varchar", { name: "third_mid_image_three1", length: 350 })
  thirdMidImageThree1: string;

  @Column("varchar", { name: "third_mid_title_three1", length: 500 })
  thirdMidTitleThree1: string;

  @Column("text", { name: "third_mid_desc_three1" })
  thirdMidDescThree1: string;

  @Column("varchar", { name: "mobile_app_bg_img1", length: 350 })
  mobileAppBgImg1: string;

  @Column("mediumtext", { name: "manual_order_first_label" })
  manualOrderFirstLabel: string;

  @Column("mediumtext", { name: "manual_order_second_label" })
  manualOrderSecondLabel: string;

  @Column("varchar", { name: "manual_order_button_label", length: 25 })
  manualOrderButtonLabel: string;

  @Column("mediumtext", { name: "manual_order_desc" })
  manualOrderDesc: string;

  @Column("mediumtext", { name: "manual_order_bg_img" })
  manualOrderBgImg: string;
}
