import { defineStore } from "pinia";
import { PricingService } from "@/services/pricing/Pricing";
import type { IPricingState } from "@/types/pricing/Pricing";

const pricingService = new PricingService();

export const usePricingStore = defineStore("pricing", {
  state: (): IPricingState => ({
    base_plan: [],
    vip_plan: [],
    pro_vip_plan: [],
  }),
  actions: {
    async getPackages() {
      const response = await pricingService.getPackages();
      this.base_plan = (response.data as IPricingState).base_plan;
      this.vip_plan = (response.data as IPricingState).vip_plan;
      this.pro_vip_plan = (response.data as IPricingState).pro_vip_plan;
    },
  },
});
