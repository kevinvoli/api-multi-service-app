import { Module } from '@nestjs/common';
import { AdvertiseBannersModule } from './advertise-banners/advertise-banners.module';
import { AppLaunchinfoModule } from './app-launchinfo/app-launchinfo.module';
import { AppScreenMasterModule } from './app-screen-master/app-screen-master.module';
import { BannerImpressionModule } from './banner-impression/banner-impression.module';
import { BannersModule } from './banners/banners.module';
import { ContactusModule } from './contactus/contactus.module';
import { ContentCubexDetailsModule } from './content-cubex-details/content-cubex-details.module';
import { EmailTemplatesModule } from './email-templates/email-templates.module';
import { FaqCategoriesModule } from './faq-categories/faq-categories.module';
import { FaqsModule } from './faqs/faqs.module';
import { HelpDetailModule } from './help-detail/help-detail.module';
import { HelpDetailCategoriesModule } from './help-detail-categories/help-detail-categories.module';
import { HelpsModule } from './helps/helps.module';
import { HelpsCategoriesModule } from './helps-categories/helps-categories.module';
import { HomeContentModule } from './home-content/home-content.module';
import { HomeContentFoodModule } from './home-content-food/home-content-food.module';
import { HomeScreensModule } from './home-screens/home-screens.module';
import { HotelBannersModule } from './hotel-banners/hotel-banners.module';
import { NewsLetterModule } from './news-letter/news-letter.module';
import { NewsfeedModule } from './newsfeed/newsfeed.module';
import { PagesModule } from './pages/pages.module';
import { SeoSectionModule } from './seo-section/seo-section.module';
import { SmsTemplatesModule } from './sms-templates/sms-templates.module';
import { StoreWiseBannersModule } from './store-wise-banners/store-wise-banners.module';

@Module({
  imports: [
    AdvertiseBannersModule,
    AppLaunchinfoModule,
    AppScreenMasterModule,
    BannerImpressionModule,
    BannersModule,
    ContactusModule,
    ContentCubexDetailsModule,
    EmailTemplatesModule,
    FaqCategoriesModule,
    FaqsModule,
    HelpDetailModule,
    HelpDetailCategoriesModule,
    HelpsModule,
    HelpsCategoriesModule,
    HomeContentModule,
    HomeContentFoodModule,
    HomeScreensModule,
    HotelBannersModule,
    NewsLetterModule,
    NewsfeedModule,
    PagesModule,
    SeoSectionModule,
    SmsTemplatesModule,
    StoreWiseBannersModule,
  ],
  exports: [
    AdvertiseBannersModule,
    AppLaunchinfoModule,
    AppScreenMasterModule,
    BannerImpressionModule,
    BannersModule,
    ContactusModule,
    ContentCubexDetailsModule,
    EmailTemplatesModule,
    FaqCategoriesModule,
    FaqsModule,
    HelpDetailModule,
    HelpDetailCategoriesModule,
    HelpsModule,
    HelpsCategoriesModule,
    HomeContentModule,
    HomeContentFoodModule,
    HomeScreensModule,
    HotelBannersModule,
    NewsLetterModule,
    NewsfeedModule,
    PagesModule,
    SeoSectionModule,
    SmsTemplatesModule,
    StoreWiseBannersModule,
  ],
})
export class CmsModule {}