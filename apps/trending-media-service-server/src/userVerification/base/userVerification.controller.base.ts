/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { UserVerificationService } from "../userVerification.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserVerificationCreateInput } from "./UserVerificationCreateInput";
import { UserVerification } from "./UserVerification";
import { Post } from "../../post/base/Post";
import { UserVerificationFindManyArgs } from "./UserVerificationFindManyArgs";
import { UserVerificationWhereUniqueInput } from "./UserVerificationWhereUniqueInput";
import { UserVerificationUpdateInput } from "./UserVerificationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserVerificationControllerBase {
  constructor(
    protected readonly service: UserVerificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserVerification })
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserVerificationCreateInput,
  })
  async createUserVerification(
    @common.Body() data: UserVerificationCreateInput
  ): Promise<UserVerification> {
    return await this.service.createUserVerification({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        expiresAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        verificationToken: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserVerification] })
  @ApiNestedQuery(UserVerificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userVerifications(
    @common.Req() request: Request
  ): Promise<UserVerification[]> {
    const args = plainToClass(UserVerificationFindManyArgs, request.query);
    return this.service.userVerifications({
      ...args,
      select: {
        createdAt: true,
        expiresAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        verificationToken: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserVerification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userVerification(
    @common.Param() params: UserVerificationWhereUniqueInput
  ): Promise<UserVerification | null> {
    const result = await this.service.userVerification({
      where: params,
      select: {
        createdAt: true,
        expiresAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        verificationToken: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserVerification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserVerificationUpdateInput,
  })
  async updateUserVerification(
    @common.Param() params: UserVerificationWhereUniqueInput,
    @common.Body() data: UserVerificationUpdateInput
  ): Promise<UserVerification | null> {
    try {
      return await this.service.updateUserVerification({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          expiresAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          verificationToken: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserVerification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UserVerification",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserVerification(
    @common.Param() params: UserVerificationWhereUniqueInput
  ): Promise<UserVerification | null> {
    try {
      return await this.service.deleteUserVerification({
        where: params,
        select: {
          createdAt: true,
          expiresAt: true,
          id: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          verificationToken: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Post("/send-verification-email")
  @swagger.ApiOkResponse({
    type: Boolean,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async SendVerificationEmail(
    @common.Body()
    body: string
  ): Promise<boolean> {
    return this.service.SendVerificationEmail(body);
  }

  @common.Post("/verify-token")
  @swagger.ApiOkResponse({
    type: Boolean,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async VerifyToken(
    @common.Body()
    body: string
  ): Promise<boolean> {
    return this.service.VerifyToken(body);
  }
}
