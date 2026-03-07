import { Module } from '@nestjs/common';
import { AdminAlerts } from './entities/admin-alert.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminAlertsService } from './admin-alerts.service';
import { AdminAlertsController } from './admin-alerts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminAlerts])],
  controllers: [AdminAlertsController],
  providers: [AdminAlertsService],
  exports: [TypeOrmModule.forFeature([AdminAlerts])],
})
export class AdminAlertsModule {}
