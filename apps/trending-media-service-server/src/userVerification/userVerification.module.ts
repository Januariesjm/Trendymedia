import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserVerificationModuleBase } from "./base/userVerification.module.base";
import { UserVerificationService } from "./userVerification.service";
import { UserVerificationController } from "./userVerification.controller";
import { UserVerificationResolver } from "./userVerification.resolver";

@Module({
  imports: [UserVerificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserVerificationController],
  providers: [UserVerificationService, UserVerificationResolver],
  exports: [UserVerificationService],
})
export class UserVerificationModule {}
