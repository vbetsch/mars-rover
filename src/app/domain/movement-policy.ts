import { Map } from '@app/domain/map';

export namespace MovementPolicy {
  export type Params = {
    readonly map: Map.Class;
  };

  export class Class {
    private readonly _map: Map.Class;

    public constructor(params: Params) {
      this._map = params.map;
    }

    public get map(): Map.Class {
      return this._map;
    }
  }
}
