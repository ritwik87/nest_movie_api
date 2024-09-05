import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel(Movie)
    private movieModel: typeof Movie,
  ) {}

  async create(movie: CreateMovieDto): Promise<Movie> {
    return await this.movieModel.create<Movie>(movie);
  }

  async findAll(): Promise<Movie[]> {
    return await this.movieModel.findAll<Movie>();
  }

  async findOne(id: string): Promise<Movie> {
    return await this.movieModel.findOne<Movie>({ where: { id } });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  async remove(id: number) {
    return await this.movieModel.destroy<Movie>({ where: { id } });
  }
}
