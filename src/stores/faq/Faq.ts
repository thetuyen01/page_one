import { defineStore } from "pinia";
import { FaqService } from "@/services/faq/Faq";
import type { IFaqState, IFaq } from "@/types/faq/Faq";

const faqService = new FaqService();

export const useFaqStore = defineStore("faq", {
  state: (): IFaqState => ({
    faq: [],
  }),
  actions: {
    async getFaq() {
      const response = await faqService.getFaq();
      this.faq = response.data as IFaq[];
    },
  },
});
