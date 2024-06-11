import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VideoModuleBase } from "./base/video.module.base";
import { VideoService } from "./video.service";
import { VideoController } from "./video.controller";
import { VideoResolver } from "./video.resolver";

@Module({
  imports: [VideoModuleBase, forwardRef(() => AuthModule)],
  controllers: [VideoController],
  providers: [VideoService, VideoResolver],
  exports: [VideoService],
})
export class VideoModule {}
