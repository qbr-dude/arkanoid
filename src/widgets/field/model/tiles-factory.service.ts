import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})
export class TilesFactory {
    tilesMap: FieldMap;
    
    private  _tilesSize: ElementSize = {width: 50, height: 20};
    private _paddingShift = 20; // px
    private  _tilesCountInRow = 7;
    private _rows = 5;

    get fieldSize(): ElementSize {
        return {
            width: this._tilesCountInRow * this._tilesSize.width + this._paddingShift * 2,
            height: this._rows * this._tilesSize.height * 4 + this._paddingShift * 2,
        }
    }

    constructor() {
        this.tilesMap = [];
    }

    createFieldMap() {
        let xShift = this._paddingShift;
        let yShift = this._paddingShift;
        for (let i = 0; i < 20; i++) {
            this.tilesMap.push({
                x: xShift,
                y: yShift,
            });

            if(xShift + this._tilesSize.width + this._paddingShift < this.fieldSize.width) {
                xShift += this._tilesSize.width;
            } else {
                xShift = this._paddingShift;
                // TODO necessary of checking Y overflow? If i'll obly try to fill certain count
                yShift += this._tilesSize.height;
            }
        }
        return this.tilesMap;
    }
}

type ElementSize = {
    width: number; 
    height: number;
};

export type FieldPosition = {
    x: number;
    y: number;
}

type FieldMap = FieldPosition[];