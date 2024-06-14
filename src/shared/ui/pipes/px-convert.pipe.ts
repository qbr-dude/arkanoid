import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convert',
    standalone: true,
})
export class PxConvertPipe implements PipeTransform {
    transform(value: number) {
        if(isNaN(value)) {
            return '0'; // maybe change defaut value
        }
        return `${value}px`;
    }
}