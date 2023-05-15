export interface IResult {
  alloy: string;
  castingConfiguration: string;
  compoundRadius: number;
  moldTemperature: number;
  pouringTemperature: number;
  finalCoolingTemperature: number;
  hardeningTime: number;
  coolingTime: number;
}

export type ResultsContextType = {
  calculationResult: IResult;
  id: string;
  saveResult: (result: IResult) => void;
};