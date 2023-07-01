import { Injectable, NotFoundException } from '@nestjs/common';
import { Partners } from './partners.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnersService {
  constructor(
    @InjectModel(Partners.name) private partnersModel: Model<Partners>
  ) {}

  getPartners(): Promise<Partners[]> {
    return this.partnersModel.find().exec();
  }

  getOnePartner(id: string) {
    const partner = this.findPartner(id);
    return partner;
  }

  findPartner(id: string): Promise<Partners> {
    const partner = this.partnersModel.findById(id);
    if (!partner) throw new NotFoundException('Could not find partner');
    return partner;
  }

  deletePartner(id: string): Promise<Partners> {
    return this.partnersModel.findByIdAndRemove(id);
  }

  addPartner(partnerDto: CreatePartnerDto): Promise<Partners> {
    const newPartner = new this.partnersModel(partnerDto);
    return newPartner.save();
  }

  updatePartner(partnerDto: UpdatePartnerDto, id: string) {
    return this.partnersModel.findByIdAndUpdate(id, partnerDto);
  }
}
