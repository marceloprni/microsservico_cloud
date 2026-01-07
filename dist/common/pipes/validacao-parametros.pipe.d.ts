import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ValidaParametrosPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
