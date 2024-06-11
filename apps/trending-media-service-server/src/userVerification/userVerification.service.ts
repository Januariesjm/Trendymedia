import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserVerificationServiceBase } from "./base/userVerification.service.base";

@Injectable()
export class UserVerificationService extends UserVerificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
