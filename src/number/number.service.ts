import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { NumberGarage } from './number.schema';
import { Model } from 'mongoose';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Injectable()
export class NumberService {
  constructor(
    @InjectModel(NumberGarage.name) private numberModel: Model<NumberGarage>
  ) {}

  getNumbers(): Promise<NumberGarage[]> {
    return this.numberModel.find().exec();
  }

  getOneNumber(id: string) {
    const number = this.findNumber(id)[0];
    return { ...number };
  }

  findNumber(id: string): Promise<NumberGarage> {
    const numberGarage = this.numberModel.findById(id);
    if (!numberGarage) throw new NotFoundException('Could not find number');
    return numberGarage;
  }

  addNumber(numberDto: CreateNumberDto): Promise<NumberGarage> {
    const newNumber = new this.numberModel(numberDto);
    return newNumber.save();
  }

  deleteNumber(id: string): Promise<NumberGarage> {
    return this.numberModel.findByIdAndRemove(id);
  }

  updateNumber(
    updateNumberDto: UpdateNumberDto,
    id: string
  ): Promise<NumberGarage> {
    return this.numberModel.findByIdAndUpdate(id, updateNumberDto);
  }
}
