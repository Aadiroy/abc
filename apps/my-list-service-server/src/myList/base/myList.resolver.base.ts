/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { MyList } from "./MyList";
import { MyListCountArgs } from "./MyListCountArgs";
import { MyListFindManyArgs } from "./MyListFindManyArgs";
import { MyListFindUniqueArgs } from "./MyListFindUniqueArgs";
import { CreateMyListArgs } from "./CreateMyListArgs";
import { UpdateMyListArgs } from "./UpdateMyListArgs";
import { DeleteMyListArgs } from "./DeleteMyListArgs";
import { User } from "../../user/base/User";
import { MyListCreateInput } from "./MyListCreateInput";
import { MyListWhereInput } from "./MyListWhereInput";
import { MyListUpdateInput } from "./MyListUpdateInput";
import { MyListService } from "../myList.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MyList)
export class MyListResolverBase {
  constructor(
    protected readonly service: MyListService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MyList",
    action: "read",
    possession: "any",
  })
  async _myListsMeta(
    @graphql.Args() args: MyListCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MyList])
  @nestAccessControl.UseRoles({
    resource: "MyList",
    action: "read",
    possession: "any",
  })
  async myLists(@graphql.Args() args: MyListFindManyArgs): Promise<MyList[]> {
    return this.service.myLists(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MyList, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MyList",
    action: "read",
    possession: "own",
  })
  async myList(
    @graphql.Args() args: MyListFindUniqueArgs
  ): Promise<MyList | null> {
    const result = await this.service.myList(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MyList)
  @nestAccessControl.UseRoles({
    resource: "MyList",
    action: "create",
    possession: "any",
  })
  async createMyList(@graphql.Args() args: CreateMyListArgs): Promise<MyList> {
    return await this.service.createMyList({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MyList)
  @nestAccessControl.UseRoles({
    resource: "MyList",
    action: "update",
    possession: "any",
  })
  async updateMyList(
    @graphql.Args() args: UpdateMyListArgs
  ): Promise<MyList | null> {
    try {
      return await this.service.updateMyList({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => MyList)
  @nestAccessControl.UseRoles({
    resource: "MyList",
    action: "delete",
    possession: "any",
  })
  async deleteMyList(
    @graphql.Args() args: DeleteMyListArgs
  ): Promise<MyList | null> {
    try {
      return await this.service.deleteMyList(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: MyList): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => String)
  async AddToMyList(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AddToMyList(args);
  }

  @graphql.Mutation(() => MyList)
  async AddToMyListAction(
    @graphql.Args()
    args: MyListCreateInput
  ): Promise<MyList> {
    return this.service.AddToMyListAction(args);
  }

  @graphql.Query(() => String)
  async ListMyItems(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ListMyItems(args);
  }

  @graphql.Query(() => MyList)
  async ListMyItemsAction(
    @graphql.Args()
    args: MyListWhereInput
  ): Promise<MyList> {
    return this.service.ListMyItemsAction(args);
  }

  @graphql.Query(() => String)
  async RemoveFromMyList(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RemoveFromMyList(args);
  }

  @graphql.Mutation(() => MyList)
  async RemoveFromMyListAction(
    @graphql.Args()
    args: MyListUpdateInput
  ): Promise<MyList> {
    return this.service.RemoveFromMyListAction(args);
  }
}
