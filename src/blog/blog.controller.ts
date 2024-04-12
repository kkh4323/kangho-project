import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  // 블로그 전체 데이터 가져오기
  @Get()
  async getBlogs() {
    return await this.blogService.getBlogDatas();
  }

  // 상세 블로그 데이터 가져오기
  @Get('/:id')
  async getBlogById(@Param('id') id: string) {
    return await this.blogService.getBlogById(id);
  }

  // 블로그 데이터 등록
  @Post('/create')
  async createBlog(
    // @Body('title') title: string,
    // @Body('description') description: string,
    // @Body('price') price: number,
    // @Body('category') category: string,
    @Body() createBlogDto: CreateBlogDto,
  ) {
    return await this.blogService.createBlog(createBlogDto);
  }
}
