import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductEntity } from './product.entity';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { inputProduct } from './input/product.input';
import { DeleteProductResponseDto } from './dto/delete-product.dto';

@Resolver((of: any) => ProductEntity)
export class ProductResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => [CreateProductDto])
  async products() {
    return this.productService.findAll();
  }

  @Query(() => CreateProductDto)
  async singleProduct(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => CreateProductDto)
  async createProduct(@Args('data') data: inputProduct) {
    return this.productService.create(data);
  }

  @Mutation(() => CreateProductDto)
  async updateProduct(
    @Args('id') id: string,
    @Args('data') data: inputProduct,
  ) {
    return this.productService.update(id, data);
  }

  @Mutation(() => DeleteProductResponseDto)
  async deleteProduct(@Args('id') id: string) {
    const success = await this.productService.remove(id);
    return { success };
  }
}
