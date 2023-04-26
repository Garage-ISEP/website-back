import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  getAllPartners() {
    return this.partnersService.getPartners();
  }

  @Get(':id')
  getPartnerById(@Param('id') id: string) {
    return this.partnersService.getOnePartner(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnersService.deletePartner(id);
  }

  @Post()
  create(@Body() createPartner: CreatePartnerDto) {
    return this.partnersService.addPartner(createPartner);
  }

  @Patch(':id')
  update(@Body() updatePartner: UpdatePartnerDto, @Param('id') id: string) {
    return this.partnersService.updatePartner(updatePartner, id);
  }
}
