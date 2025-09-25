import { Module } from '@nestjs/common';
import { AllDatabaseDetailsModule } from './all-database-details/all-database-details.module';
import { BackupDatabaseModule } from './backup-database/backup-database.module';
import { CancelReasonModule } from './cancel-reason/cancel-reason.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { DatabaseModule } from './core/database/database.module';
import { DataStorageEngineModule } from './data-storage-engine/data-storage-engine.module';
import { LangConversionProcessModule } from './lang-conversion-process/lang-conversion-process.module';
import { LanguageLabelModule } from './language-label/language-label.module';
import { LanguageLabelOtherModule } from './language-label-other/language-label-other.module';
import { LanguageLabel1Module } from './language-label_1/language-label_1.module';
import { LanguageLabel2Module } from './language-label_2/language-label_2.module';
import { LanguageLabel5Module } from './language-label_5/language-label_5.module';
import { LanguageMasterModule } from './language-master/language-master.module';
import { LanguagePageDetailsModule } from './language-page-details/language-page-details.module';
import { LogFileModule } from './log-file/log-file.module';
import { MasterLngPagesModule } from './master-lng-pages/master-lng-pages.module';
import { MasterServiceCategoryModule } from './master-service-category/master-service-category.module';
import { MasterServiceMenuModule } from './master-service-menu/master-service-menu.module';
import { NotificationSoundModule } from './notification-sound/notification-sound.module';
import { PushnotificationLogModule } from './pushnotification-log/pushnotification-log.module';
import { RequestDataDebugModule } from './request-data-debug/request-data-debug.module';
import { RequestPostDataModule } from './request-post-data/request-post-data.module';
import { ServiceCategoriesModule } from './service-categories/service-categories.module';
import { SetupInfoModule } from './setup-info/setup-info.module';
import { VoiceDirectionFilesModule } from './voice-direction-files/voice-direction-files.module';

@Module({
  imports: [
    AllDatabaseDetailsModule,
    BackupDatabaseModule,
    CancelReasonModule,
    ConfigurationsModule,
    DatabaseModule,
    DataStorageEngineModule,
    LangConversionProcessModule,
    LanguageLabelModule,
    LanguageLabelOtherModule,
    LanguageLabel1Module,
    LanguageLabel2Module,
    LanguageLabel5Module,
    LanguageMasterModule,
    LanguagePageDetailsModule,
    LogFileModule,
    MasterLngPagesModule,
    MasterServiceCategoryModule,
    MasterServiceMenuModule,
    NotificationSoundModule,
    PushnotificationLogModule,
    RequestDataDebugModule,
    RequestPostDataModule,
    ServiceCategoriesModule,
    SetupInfoModule,
    VoiceDirectionFilesModule,
  ],
  exports: [
    AllDatabaseDetailsModule,
    BackupDatabaseModule,
    CancelReasonModule,
    ConfigurationsModule,
    DatabaseModule,
    DataStorageEngineModule,
    LangConversionProcessModule,
    LanguageLabelModule,
    LanguageLabelOtherModule,
    LanguageLabel1Module,
    LanguageLabel2Module,
    LanguageLabel5Module,
    LanguageMasterModule,
    LanguagePageDetailsModule,
    LogFileModule,
    MasterLngPagesModule,
    MasterServiceCategoryModule,
    MasterServiceMenuModule,
    NotificationSoundModule,
    PushnotificationLogModule,
    RequestDataDebugModule,
    RequestPostDataModule,
    ServiceCategoriesModule,
    SetupInfoModule,
    VoiceDirectionFilesModule,
  ],
})
export class CoreAppModule {}