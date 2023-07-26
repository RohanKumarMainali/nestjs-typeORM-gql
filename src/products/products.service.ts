import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly ProductRepository: Repository<ProductEntity>,
  ) {}

  async create(data: CreateProductDto): Promise<ProductEntity> {
    const product = this.ProductRepository.create(data);
    await this.ProductRepository.save(product);
    return product;
  }

  async findAll() {
    return await this.ProductRepository.find();
  }

  async findOne(id: string) {
    return await this.ProductRepository.findOneBy({ id });
  }

  async remove(id: string) {
    const product = await this.ProductRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('product not found');
    await this.ProductRepository.remove(product);
    return true;
  }
  async update(id: string, data: UpdateProductDto): Promise<ProductEntity> {
    const product = await this.ProductRepository.findOneBy({ id });
    if (!product) throw new NotFoundException('product not found');
    const updatedProduct = {
      ...product,
      ...data,
    };
    await this.ProductRepository.save(updatedProduct);
    return updatedProduct;
  }
}
