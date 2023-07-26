import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/products.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly ProductRepository: Repository<ProductEntity>,
  ) {}

  async create(data: CreateProductDto): Promise<ProductEntity> {
    const product = new ProductEntity();
    product.name = data.name;
    product.category = data.category;
    product.price = data.price;
    product.brand = data.brand;

    await this.ProductRepository.save(product);

    return product;
  }

  async findAll() {
    return await this.ProductRepository.find();
  }
}
