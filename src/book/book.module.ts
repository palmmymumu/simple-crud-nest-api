import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { DatabaseModule } from '../database/database.module';
import { BookProviders } from './book.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [BookService, ...BookProviders],
})
export class BookModule {}




