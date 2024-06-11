import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserVerificationService } from "./userVerification.service";
import { UserVerificationControllerBase } from "./base/userVerification.controller.base";

@swagger.ApiTags("userVerifications")
@common.Controller("userVerifications")
export class UserVerificationController extends UserVerificationControllerBase {
  constructor(
    protected readonly service: UserVerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
