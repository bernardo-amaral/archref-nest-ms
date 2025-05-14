import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BudgetPlannerModule } from '@modules/budget-planner/budget-planner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CondominiumsModule } from './modules/condominiums/condominiums.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        'local.env',
        'develop.env',
        'homolog.env',
        'prod.env',
      ],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'archref-db',
      autoLoadEntities: true,
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    BudgetPlannerModule,
    CondominiumsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
