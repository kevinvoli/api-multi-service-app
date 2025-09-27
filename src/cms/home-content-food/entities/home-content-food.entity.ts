import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("homecontentfood", { schema: "amygo1" })
export class Homecontentfood {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("longtext", { name: "vCode" })
  vCode: string;

  @Column("longtext", { name: "BannerBgImage" })
  bannerBgImage: string;

  @Column("longtext", { name: "BannerBigTitle" })
  bannerBigTitle: string;

  @Column("longtext", { name: "BannerSmallTitle" })
  bannerSmallTitle: string;

  @Column("longtext", { name: "BannerContent" })
  bannerContent: string;

  @Column("longtext", { name: "FirstSectionLeftImage" })
  firstSectionLeftImage: string;

  @Column("longtext", { name: "FirstSectionHeading" })
  firstSectionHeading: string;

  @Column("longtext", { name: "FirstParaTitle" })
  firstParaTitle: string;

  @Column("longtext", { name: "FirstParaContent" })
  firstParaContent: string;

  @Column("longtext", { name: "SecondParaTitle" })
  secondParaTitle: string;

  @Column("longtext", { name: "SecondParaContent" })
  secondParaContent: string;

  @Column("longtext", { name: "ThirdParaTitle" })
  thirdParaTitle: string;

  @Column("longtext", { name: "ThirdParaContent" })
  thirdParaContent: string;

  @Column("longtext", { name: "MidFirstImage" })
  midFirstImage: string;

  @Column("longtext", { name: "MidFirstTitle" })
  midFirstTitle: string;

  @Column("longtext", { name: "MidFirstContent" })
  midFirstContent: string;

  @Column("longtext", { name: "MidSecImage" })
  midSecImage: string;

  @Column("longtext", { name: "MidSecTitle" })
  midSecTitle: string;

  @Column("longtext", { name: "MidSecContent" })
  midSecContent: string;

  @Column("longtext", { name: "MidThirdImage" })
  midThirdImage: string;

  @Column("longtext", { name: "MidThirdTitle" })
  midThirdTitle: string;

  @Column("longtext", { name: "MidThirdContent" })
  midThirdContent: string;

  @Column("longtext", { name: "ThirdLeftImg1" })
  thirdLeftImg1: string;

  @Column("longtext", { name: "ThirdLeftImg2" })
  thirdLeftImg2: string;

  @Column("longtext", { name: "ThirdLeftImg3" })
  thirdLeftImg3: string;

  @Column("longtext", { name: "ThirdRightTitle" })
  thirdRightTitle: string;

  @Column("longtext", { name: "ThirdRightContent" })
  thirdRightContent: string;

  @Column("longtext", { name: "PlayStoreImg" })
  playStoreImg: string;

  @Column("longtext", { name: "AppStoreImg" })
  appStoreImg: string;

  @Column("longtext", { name: "AboutUsBgImage" })
  aboutUsBgImage: string;

  @Column("longtext", { name: "AboutUsTitle" })
  aboutUsTitle: string;

  @Column("longtext", { name: "AboutUsSecondTitle" })
  aboutUsSecondTitle: string;

  @Column("longtext", { name: "AboutUsContent" })
  aboutUsContent: string;

  @Column("longtext", { name: "HomeRestuarantSectionLabel" })
  homeRestuarantSectionLabel: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("longtext", {
    name: "header_first_label",
    comment: "home_first_first_title",
  })
  headerFirstLabel: string;

  @Column("longtext", {
    name: "header_second_label",
    comment: "home_second_first_title",
  })
  headerSecondLabel: string;

  @Column("longtext", {
    name: "home_banner_left_image",
    comment: "home_banner_image",
  })
  homeBannerLeftImage: string;

  @Column("longtext", { name: "left_banner_txt" })
  leftBannerTxt: string;

  @Column("longtext", {
    name: "home_banner_right_image",
    comment: "home_second_right_banner_image",
  })
  homeBannerRightImage: string;

  @Column("longtext", { name: "right_banner_txt" })
  rightBannerTxt: string;

  @Column("longtext", {
    name: "third_sec_title",
    comment: "home_third_first_title",
  })
  thirdSecTitle: string;

  @Column("longtext", {
    name: "third_sec_desc",
    comment: "home_first_second_texthome_first_second_content",
  })
  thirdSecDesc: string;

  @Column("longtext", { name: "third_mid_image_one" })
  thirdMidImageOne: string;

  @Column("longtext", {
    name: "third_mid_title_one",
    comment: "home_third_second_text",
  })
  thirdMidTitleOne: string;

  @Column("longtext", {
    name: "third_mid_desc_one",
    comment: "home_first_four_button_content",
  })
  thirdMidDescOne: string;

  @Column("longtext", {
    name: "third_mid_image_two",
    comment: "home_third_banner_image",
  })
  thirdMidImageTwo: string;

  @Column("longtext", {
    name: "third_mid_title_two",
    comment: "home_fours_first_text",
  })
  thirdMidTitleTwo: string;

  @Column("longtext", {
    name: "third_mid_desc_two",
    comment: "home_second_second_content",
  })
  thirdMidDescTwo: string;

  @Column("longtext", {
    name: "third_mid_image_three",
    comment: "home_fours_icon_image",
  })
  thirdMidImageThree: string;

  @Column("longtext", {
    name: "third_mid_title_three",
    comment: "home_fours_second_text",
  })
  thirdMidTitleThree: string;

  @Column("longtext", {
    name: "third_mid_desc_three",
    comment: "home_third_third_content",
  })
  thirdMidDescThree: string;

  @Column("longtext", { name: "mobile_app_bg_img" })
  mobileAppBgImg: string;

  @Column("longtext", { name: "mobile_app_left_img" })
  mobileAppLeftImg: string;

  @Column("longtext", {
    name: "mobile_app_right_title",
    comment: "home_six_first_title",
  })
  mobileAppRightTitle: string;

  @Column("longtext", {
    name: "mobile_app_right_desc",
    comment: "home_six_second_content",
  })
  mobileAppRightDesc: string;

  @Column("longtext", {
    name: "taxi_app_bg_img",
    comment: "home_five_left_banner_image",
  })
  taxiAppBgImg: string;

  @Column("longtext", {
    name: "taxi_app_left_img",
    comment: "home_six_banner_image",
  })
  taxiAppLeftImg: string;

  @Column("longtext", { name: "taxi_app_right_title" })
  taxiAppRightTitle: string;

  @Column("longtext", {
    name: "taxi_app_right_desc",
    comment: "home_five_second_content",
  })
  taxiAppRightDesc: string;

  @Column("longtext", { name: "driver_sec_first_label" })
  driverSecFirstLabel: string;

  @Column("longtext", { name: "driver_sec_second_label" })
  driverSecSecondLabel: string;

  @Column("longtext", { name: "third_mid_image_one1" })
  thirdMidImageOne1: string;

  @Column("longtext", {
    name: "third_mid_title_one1",
    comment: "home_five_first_title",
  })
  thirdMidTitleOne1: string;

  @Column("longtext", { name: "third_mid_desc_one1" })
  thirdMidDescOne1: string;

  @Column("longtext", { name: "third_mid_image_two1" })
  thirdMidImageTwo1: string;

  @Column("longtext", { name: "third_mid_title_two1" })
  thirdMidTitleTwo1: string;

  @Column("longtext", {
    name: "third_mid_desc_two1",
    comment: "home_first_third_button_content",
  })
  thirdMidDescTwo1: string;

  @Column("longtext", { name: "third_mid_image_three1" })
  thirdMidImageThree1: string;

  @Column("longtext", {
    name: "third_mid_title_three1",
    comment: "home_seven_first_title",
  })
  thirdMidTitleThree1: string;

  @Column("longtext", {
    name: "third_mid_desc_three1",
    comment: "home_seven_second_content",
  })
  thirdMidDescThree1: string;

  @Column("longtext", {
    name: "mobile_app_bg_img1",
    comment: "home_seven_banner_image",
  })
  mobileAppBgImg1: string;

  @Column("longtext", { name: "vehicle_category_ids" })
  vehicleCategoryIds: string;

  @Column("longtext", { name: "manual_order_first_label" })
  manualOrderFirstLabel: string;

  @Column("longtext", { name: "manual_order_second_label" })
  manualOrderSecondLabel: string;

  @Column("longtext", { name: "manual_order_button_label" })
  manualOrderButtonLabel: string;

  @Column("longtext", { name: "manual_order_desc" })
  manualOrderDesc: string;

  @Column("longtext", { name: "manual_order_bg_img" })
  manualOrderBgImg: string;

  @Column("longtext", { name: "vBannerBgImage" })
  vBannerBgImage: string;

  @Column("longtext", { name: "vBannerLeftImg" })
  vBannerLeftImg: string;

  @Column("longtext", { name: "vBannerRightTitle" })
  vBannerRightTitle: string;

  @Column("longtext", { name: "vBannerRightTitleSmall" })
  vBannerRightTitleSmall: string;

  @Column("longtext", { name: "tBannerRightContent" })
  tBannerRightContent: string;

  @Column("longtext", { name: "vDeliveryPartTitle" })
  vDeliveryPartTitle: string;

  @Column("longtext", { name: "vDeliveryPartContent" })
  vDeliveryPartContent: string;

  @Column("longtext", { name: "vDeliveryPartBgImg" })
  vDeliveryPartBgImg: string;

  @Column("longtext", { name: "vDeliveryPartImg" })
  vDeliveryPartImg: string;

  @Column("longtext", { name: "vMidSectionTitle" })
  vMidSectionTitle: string;

  @Column("longtext", { name: "vMidFirstImg" })
  vMidFirstImg: string;

  @Column("longtext", { name: "vMidFirstTitle" })
  vMidFirstTitle: string;

  @Column("longtext", { name: "tMidFirstContent" })
  tMidFirstContent: string;

  @Column("longtext", { name: "vMidSecondImg" })
  vMidSecondImg: string;

  @Column("longtext", { name: "vMidSecondTitle" })
  vMidSecondTitle: string;

  @Column("longtext", { name: "tMidSecondContent" })
  tMidSecondContent: string;

  @Column("longtext", { name: "vMidThirdImg" })
  vMidThirdImg: string;

  @Column("longtext", { name: "vMidThirdTitle" })
  vMidThirdTitle: string;

  @Column("longtext", { name: "tMidThirdContent" })
  tMidThirdContent: string;

  @Column("longtext", { name: "vThirdSectionImg1" })
  vThirdSectionImg1: string;

  @Column("longtext", { name: "vThirdSectionImg2" })
  vThirdSectionImg2: string;

  @Column("longtext", { name: "vThirdSectionImg3" })
  vThirdSectionImg3: string;

  @Column("longtext", { name: "vThirdSectionRightTitle" })
  vThirdSectionRightTitle: string;

  @Column("longtext", { name: "tThirdSectionRightContent" })
  tThirdSectionRightContent: string;

  @Column("longtext", { name: "vThirdSectionAPPImgAPPStore" })
  vThirdSectionAppImgAppStore: string;

  @Column("longtext", { name: "vThirdSectionAPPImgPlayStore" })
  vThirdSectionAppImgPlayStore: string;

  @Column("longtext", { name: "vLastSectionTitle" })
  vLastSectionTitle: string;

  @Column("longtext", { name: "vLastSectionImg" })
  vLastSectionImg: string;

  @Column("longtext", { name: "vLastSectionFirstTitle" })
  vLastSectionFirstTitle: string;

  @Column("longtext", { name: "tLastSectionFirstContent" })
  tLastSectionFirstContent: string;

  @Column("longtext", { name: "vLastSectionSecondTitle" })
  vLastSectionSecondTitle: string;

  @Column("longtext", { name: "tLastSectionSecondContent" })
  tLastSectionSecondContent: string;

  @Column("longtext", { name: "vLastSectionThirdTitle" })
  vLastSectionThirdTitle: string;

  @Column("longtext", { name: "tLastSectionThirdContent" })
  tLastSectionThirdContent: string;

  @Column("longtext", { name: "vLastSectionFourthTitle" })
  vLastSectionFourthTitle: string;

  @Column("longtext", { name: "tLastSectionFourthContent" })
  tLastSectionFourthContent: string;

  @Column("longtext", { name: "vLastSectionFifthTitle" })
  vLastSectionFifthTitle: string;

  @Column("longtext", { name: "tLastSectionFifthContent" })
  tLastSectionFifthContent: string;

  @Column("longtext", { name: "vLastSectionSixthTitle" })
  vLastSectionSixthTitle: string;

  @Column("longtext", { name: "tLastSectionSixthContent" })
  tLastSectionSixthContent: string;
}
