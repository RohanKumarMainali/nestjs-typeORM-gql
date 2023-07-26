import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteProductResponseDto {
  @Field()
  success: boolean;
}
