import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      
      useFactory: (configService :
        ConfigService)=> ({
          type: 'mysql',
          host:configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get(''),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname+ '/**/*.entity{.ts,.js}'],
          keepConnectionAlive:true,
          connectTimeout:10000,
          autoLoadEntities: true,
          synchronize:true,
        })
    })
  ],
})
export class DatabaseModule {}
