import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class UpdateContrasenaDto {
    @IsString()
    @Transform(({value}) => value?.trim())
    actual: string;
    @IsString()
    @Transform(({value}) => value?.trim())
    nueva: string;
}