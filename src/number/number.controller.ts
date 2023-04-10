import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { NumberService } from './number.service';

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
}
