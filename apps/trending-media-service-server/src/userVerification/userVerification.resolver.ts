import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserVerificationResolverBase } from "./base/userVerification.resolver.base";
import { UserVerification } from "./base/UserVerification";
import { UserVerificationService } from "./userVerification.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserVerification)
export class UserVerificationResolver extends UserVerificationResolverBase {
  constructor(
    protected readonly service: UserVerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
