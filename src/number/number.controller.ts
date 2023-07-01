import { Controller } from '@nestjs/common';
import {
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common/decorators';
import { NumberService } from './number.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numberService.deleteNumber(id);
  }

  @Patch(':id')
  update(@Body() updateNumber: UpdateNumberDto, @Param('id') id: string) {
    return this.numberService.updateNumber(updateNumber, id);
  }
}
