import { Controller, Delete, Get, Param } from '@nestjs/common';
import { PartnersService } from './partners.service';

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
}
