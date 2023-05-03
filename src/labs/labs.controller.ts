import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LabsService } from './labs.service';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';

@Controller('labs')
export class LabsController {
  constructor(private readonly labsService: LabsService) {}

  @Get()
  getAllLabs() {
    return this.labsService.getLabs();
  }

  @Get(':id')
  getLabById(@Param('id') id: string) {
    return this.labsService.getOneLab(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.labsService.deleteLab(id);
  }

  @Post()
  create(@Body() createLab: CreateLabDto) {
    return this.labsService.addLab(createLab);
  }

  @Patch(':id')
  update(@Body() updateLab: UpdateLabDto, @Param('id') id: string) {
    return this.labsService.updateLab(updateLab, id);
  }
}
