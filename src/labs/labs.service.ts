import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lab } from './labs.schema';
import { Model } from 'mongoose';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';

@Injectable()
export class LabsService {
  constructor(@InjectModel(Lab.name) private labModel: Model<Lab>) {}

  getLabs(): Promise<Lab[]> {
    return this.labModel.find().exec();
  }

  getOneLab(id: string) {
    const lab = this.findLab(id);
    return lab;
  }

  findLab(id: string): Promise<Lab> {
    const lab = this.labModel.findById(id);
    if (!lab) throw new NotFoundException('Could not find partner');
    return lab;
  }

  deleteLab(id: string) {
    return this.labModel.findByIdAndRemove(id);
  }

  addLab(labDto: CreateLabDto) {
    const newLab = new this.labModel(labDto);
    return newLab.save();
  }

  updateLab(labDto: UpdateLabDto, id: string) {
    return this.labModel.findByIdAndUpdate(id, labDto);
  }
}
