import { Module } from '@nestjs/common';
import { AdminAlertsService } from './admin-alerts.service';
import { AdminAlertsController } from './admin-alerts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminAlerts } from './entities/admin-alert.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminAlerts])],
  controllers: [AdminAlertsController],
  providers: [AdminAlertsService],
})
export class AdminAlertsModule {}