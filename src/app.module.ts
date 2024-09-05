import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies/entities/movie.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/entities/user.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'movietestdb.cr2gkqqce18e.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'F00tball2024',
      database: 'movie_db',
      synchronize: true,
      logging: true,
      autoLoadModels: true,
      models: [Movie, User],
    }),
    MoviesModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
