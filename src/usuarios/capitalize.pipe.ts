import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class CapitalizePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value || typeof value !== 'object')
            throw new BadRequestException("Invalid input");

        if (value.nombre)
            value.nombre = this.capitalize(value.nombre);

        if (value.apellido)
            value.apellido = this.capitalize(value.apellido);

        return value;
    }

    private capitalize(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}