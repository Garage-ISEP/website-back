import { Injectable, NotFoundException } from '@nestjs/common';
import { Partners } from './partners.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

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
    return { ...partner };
  }

  findPartner(id: string): Promise<Partners> {
    const partner = this.partnersModel.findById(id);
    if (!partner) throw new NotFoundException('Could not find partner');
    return partner;
  }
}
