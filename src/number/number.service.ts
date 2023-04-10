import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { NumberGarage } from './number.schema';
import { Model } from 'mongoose';

@Injectable()
export class NumberService {
  private numbers: any[] = [];

  constructor(
    @InjectModel(NumberGarage.name) private numberModel: Model<NumberGarage>
  ) {}

  getNumbers(): Promise<NumberGarage[]> {
    // return [...this.numbers];
    return this.numberModel.find().exec();
  }

  getOneNumber(id: string) {
    const number = this.findNumber(id)[0];
    return { ...number };
  }

  findNumber(id: string): [any, number] {
    const numberId = parseInt(id);
    const numberIndex = this.numbers.findIndex((n) => n.id === numberId);
    const number = this.numbers.find((num) => num.id === numberId);
    if (!number) throw new NotFoundException('Could not find number');
    return [number, numberIndex];
  }
}
