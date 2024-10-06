import endpoints from "@/shared/apis/endpoints";
import { reqGet } from "@/shared/apis/api-client";

export class PricingService {
  getPackages() {
    return reqGet(endpoints.packages);
  }
}
