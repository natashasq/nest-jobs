/* eslint-disable prettier/prettier */
import { ObjectLiteral } from 'common/contracts/global.contracts';
import { Document, FilterQuery, Model, UpdateQuery } from 'mongoose';

export abstract class BaseRepository<T extends Document> {
  constructor(protected readonly model: Model<T>) {}

  async findOne(
    filterQuery: FilterQuery<T>,
    projection?: Record<string, ObjectLiteral>
  ): Promise<T | null> {
    return this.model
      .findOne(filterQuery, {
        _id: 0,
        __v: 0,
        ...projection,
      })
      .exec();
  }

  async find(filterQuery: FilterQuery<T>): Promise<T[] | null> {
    return this.model.find(filterQuery).exec();
  }

  async create(createData: ObjectLiteral): Promise<T> {
    const entity = new this.model(createData);
    return entity.save();
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<T>,
    updateData: UpdateQuery<ObjectLiteral>
  ): Promise<T | null> {
    return this.model.findOneAndUpdate(filterQuery, updateData, {
      new: true,
    });
  }

  async delete(filterQuery: FilterQuery<T>): Promise<boolean> {
    const deletedResult = await this.model.deleteMany(filterQuery);
    return deletedResult.deletedCount >= 1;
  }
}
