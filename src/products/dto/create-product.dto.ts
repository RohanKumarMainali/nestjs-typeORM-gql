import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateProductDto {
  @Field() readonly id?: string;
  @Field() readonly name: string;
  @Field() readonly price: number;
  @Field() readonly brand: string;
  @Field() readonly category: string;
}
