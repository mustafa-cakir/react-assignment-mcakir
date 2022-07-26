export enum MATERIAL {
  METAL = "Metal ",
  PLASTIC = "Plastic",
  WOOD = "Wood",
}

export interface Device {
  id?: number;
  title: string;
  material: MATERIAL;
  enabled: boolean;
}
