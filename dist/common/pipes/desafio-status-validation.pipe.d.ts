import { PipeTransform } from '@nestjs/common';
import { DesafioStatus } from 'src/desafios/interfaces/desafio-status.enum';
export declare class DesafioStatusValidacaoPipe implements PipeTransform {
    readonly statusPermitidos: DesafioStatus[];
    transform(value: any): any;
    private ehStatusValido;
}
