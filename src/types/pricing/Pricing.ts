export interface IPricingState {
  base_plan: IPackage[];
  vip_plan: IPackage[];
  pro_vip_plan: IPackage[];
}

export interface IPackage {
  id: number;
  name: string;
  price: number;
  session: number;
  duration: number;
  details: IPackageDetails[];
}

export interface IPackageDetails {
  package: number;
  detail: string;
}
