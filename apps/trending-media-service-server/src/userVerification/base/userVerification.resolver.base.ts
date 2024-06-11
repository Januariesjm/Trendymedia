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
import { UserVerification } from "./UserVerification";
import { UserVerificationCountArgs } from "./UserVerificationCountArgs";
import { UserVerificationFindManyArgs } from "./UserVerificationFindManyArgs";
import { UserVerificationFindUniqueArgs } from "./UserVerificationFindUniqueArgs";
import { CreateUserVerificationArgs } from "./CreateUserVerificationArgs";
import { UpdateUserVerificationArgs } from "./UpdateUserVerificationArgs";
import { DeleteUserVerificationArgs } from "./DeleteUserVerificationArgs";
import { User } from "../../user/base/User";
import { UserVerificationService } from "../userVerification.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserVerification)
export class UserVerificationResolverBase {
  constructor(
    protected readonly service: UserVerificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "read",
    possession: "any",
  })
  async _userVerificationsMeta(
    @graphql.Args() args: UserVerificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserVerification])
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "read",
    possession: "any",
  })
  async userVerifications(
    @graphql.Args() args: UserVerificationFindManyArgs
  ): Promise<UserVerification[]> {
    return this.service.userVerifications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserVerification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "read",
    possession: "own",
  })
  async userVerification(
    @graphql.Args() args: UserVerificationFindUniqueArgs
  ): Promise<UserVerification | null> {
    const result = await this.service.userVerification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserVerification)
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "create",
    possession: "any",
  })
  async createUserVerification(
    @graphql.Args() args: CreateUserVerificationArgs
  ): Promise<UserVerification> {
    return await this.service.createUserVerification({
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
  @graphql.Mutation(() => UserVerification)
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "update",
    possession: "any",
  })
  async updateUserVerification(
    @graphql.Args() args: UpdateUserVerificationArgs
  ): Promise<UserVerification | null> {
    try {
      return await this.service.updateUserVerification({
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

  @graphql.Mutation(() => UserVerification)
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "delete",
    possession: "any",
  })
  async deleteUserVerification(
    @graphql.Args() args: DeleteUserVerificationArgs
  ): Promise<UserVerification | null> {
    try {
      return await this.service.deleteUserVerification(args);
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
  async getUser(
    @graphql.Parent() parent: UserVerification
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Boolean)
  async SendVerificationEmail(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.SendVerificationEmail(args);
  }

  @graphql.Mutation(() => Boolean)
  async VerifyToken(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.VerifyToken(args);
  }
}
