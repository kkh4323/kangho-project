import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'floppy.db.elephantsql.com',
      port: 5432,
      username: 'abrtgnyi',
      password: 'yJZLtUXzKYPTzAUCQfsEPx-3czXe27uM',
      database: 'abrtgnyi',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
