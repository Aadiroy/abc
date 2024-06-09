/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TvShowWhereUniqueInput } from "./TvShowWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TvShowUpdateInput } from "./TvShowUpdateInput";

@ArgsType()
class UpdateTvShowArgs {
  @ApiProperty({
    required: true,
    type: () => TvShowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TvShowWhereUniqueInput)
  @Field(() => TvShowWhereUniqueInput, { nullable: false })
  where!: TvShowWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TvShowUpdateInput,
  })
  @ValidateNested()
  @Type(() => TvShowUpdateInput)
  @Field(() => TvShowUpdateInput, { nullable: false })
  data!: TvShowUpdateInput;
}

export { UpdateTvShowArgs as UpdateTvShowArgs };
