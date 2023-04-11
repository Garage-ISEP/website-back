import { Controller } from '@nestjs/common';
import { Get, Param, Post, Body } from '@nestjs/common/decorators';
import { NumberService } from './number.service';
import { CreateNumberDto } from './dto/create-number.dto';

@Controller('number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Get()
  getAllNumbers() {
    return this.numberService.getNumbers();
  }

  @Get(':id')
  getNumberById(@Param('id') id: string) {
    return this.numberService.getOneNumber(id);
  }

  @Post()
  create(@Body() createNumber: CreateNumberDto) {
    return this.numberService.addNumber(createNumber);
  }
}
