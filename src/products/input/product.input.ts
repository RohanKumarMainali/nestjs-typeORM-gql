import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputProduct {
  @Field() readonly name: string;
  @Field() readonly brand: string;
  @Field() readonly category: string;
  @Field() readonly price: number;
}
