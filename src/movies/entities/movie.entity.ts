import { UUID } from 'sequelize';
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Movie extends Model<Movie> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @Column
  title: string;

  @Column
  year: number;

  @Column
  poster: string;
}
