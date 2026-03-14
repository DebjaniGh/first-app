import { PartialType } from "@nestjs/mapped-types";
import { CreateProfileDto } from "./create-profile.dto";
import { IsString, IsNotEmpty } from "class-validator";

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsString()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsNotEmpty()
    description?: string;
}