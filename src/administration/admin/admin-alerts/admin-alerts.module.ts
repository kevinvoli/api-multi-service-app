import { Module } from '@nestjs/common';
import { AdminAlertsService } from './admin-alerts.service';
import { AdminAlertsController } from './admin-alerts.controller';

@Module({
  controllers: [AdminAlertsController],
  providers: [AdminAlertsService],
})
export class AdminAlertsModule {}
