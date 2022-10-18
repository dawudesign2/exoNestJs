import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import { Article } from '../entities/article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get()
  getAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.articleService.findOne(id);
  }

  @Post()
  create(@Body() article: Article) {
    return this.articleService.save(article);
  }

  @Put(':id')
  update(@Body() article: Article) {
    return this.articleService.save(article);
  }

  @Delete(':id')
  delete(@Param() Params) {
    return this.articleService.delete(Params.id);
  }
}
