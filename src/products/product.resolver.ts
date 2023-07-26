import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductEntity } from './product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { inputProduct } from './input/product.input';

@Resolver((of : any) => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => [CreateProductDto])
  async products() {
    return this.productService.findAll();
  }

  @Mutation(() => CreateProductDto)
  async createProduct(@Args('data') data: inputProduct) {
    return this.productService.create(data);
  }
}
