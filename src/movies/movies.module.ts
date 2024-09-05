import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './entities/movie.entity';
import { FileUploadService } from './file-upload.service';
import { ConfigService } from 'aws-sdk';

@Module({
  imports: [SequelizeModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesService, FileUploadService],
  exports: [MoviesService],
})
export class MoviesModule {}
