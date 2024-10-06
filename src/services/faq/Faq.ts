import endpoints from "@/shared/apis/endpoints";
import { reqGet } from "@/shared/apis/api-client";

export class FaqService {
  getFaq() {
    return reqGet(endpoints.faq);
  }
}
