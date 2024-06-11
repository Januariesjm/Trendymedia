/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserVerification as PrismaUserVerification,
  User as PrismaUser,
} from "@prisma/client";

export class UserVerificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserVerificationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userVerification.count(args);
  }

  async userVerifications<T extends Prisma.UserVerificationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserVerificationFindManyArgs>
  ): Promise<PrismaUserVerification[]> {
    return this.prisma.userVerification.findMany<Prisma.UserVerificationFindManyArgs>(
      args
    );
  }
  async userVerification<T extends Prisma.UserVerificationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserVerificationFindUniqueArgs>
  ): Promise<PrismaUserVerification | null> {
    return this.prisma.userVerification.findUnique(args);
  }
  async createUserVerification<T extends Prisma.UserVerificationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserVerificationCreateArgs>
  ): Promise<PrismaUserVerification> {
    return this.prisma.userVerification.create<T>(args);
  }
  async updateUserVerification<T extends Prisma.UserVerificationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserVerificationUpdateArgs>
  ): Promise<PrismaUserVerification> {
    return this.prisma.userVerification.update<T>(args);
  }
  async deleteUserVerification<T extends Prisma.UserVerificationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserVerificationDeleteArgs>
  ): Promise<PrismaUserVerification> {
    return this.prisma.userVerification.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userVerification
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
  async SendVerificationEmail(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async VerifyToken(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}