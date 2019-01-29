import {
  AllowNull,
  Column,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Book extends Model<Book> {
  @AllowNull(false)
  @PrimaryKey
  @AutoIncrement
  @Column
  book_id: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  description: string;

  @AllowNull(false)
  @Column
  price: number;

  @AllowNull(true)
  @Column
  image_url: string;
}



