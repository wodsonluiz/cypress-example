import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'gridTransform'
})
export class TransformArrayForGrid implements PipeTransform {
  transform(array: any[], numberOfColumns: number): any[] {
    let resultArray: any[] = [];

    for (let i = 0, head = -1; i < array.length; i++) {
      if (i % numberOfColumns === 0) {
        resultArray.push([]);
        head ++;
      }
      resultArray[head].push(array[i])
    }
    
    return resultArray;
  }
}