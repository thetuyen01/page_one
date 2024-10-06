<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-12">
      Choose Your Perfect Plan
    </h1>
    <p class="text-xl text-center mb-8">
      Unlock the power of AI with our flexible pricing options
    </p>

    <div class="flex flex-wrap justify-center gap-8">
      <!-- Base Plan -->
      <div
        class="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">
          {{ basePackages[0]?.name }}
        </h2>
        <p class="text-4xl font-bold text-center mb-6">
          ${{ basePackages[0]?.price
          }}<span class="text-lg font-normal">/month</span>
        </p>
        <ul class="mb-8">
          <li
            class="flex items-center mb-2"
            v-for="detail in basePackages[0]?.details"
            :key="detail?.id"
          >
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {{ detail?.detail }}
          </li>
        </ul>
        <button
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Choose Base Plan
        </button>
      </div>

      <!-- VIP Plan -->
      <div
        class="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">
          {{ vipPackages[0]?.name }}
        </h2>
        <p class="text-4xl font-bold text-center mb-6">
          ${{ vipPackages[0]?.price
          }}<span class="text-lg font-normal">/month</span>
        </p>
        <ul class="mb-8">
          <li
            class="flex items-center mb-2"
            v-for="detail in vipPackages[0]?.details"
            :key="detail?.id"
          >
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {{ detail?.detail }}
          </li>
        </ul>
        <button
          class="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
        >
          Choose VIP Plan
        </button>
      </div>

      <!-- Pro VIP Plan -->
      <div
        class="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      >
        <h2 class="text-2xl font-semibold text-center mb-4">
          {{ vipProPackages[0]?.name }}
        </h2>
        <p class="text-4xl font-bold text-center mb-6">
          ${{ vipProPackages[0]?.price
          }}<span class="text-lg font-normal">/month</span>
        </p>
        <ul class="mb-8">
          <li
            class="flex items-center mb-2"
            v-for="detail in vipProPackages[0]?.details"
            :key="detail?.id"
          >
            <svg
              class="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            {{ detail?.detail }}
          </li>
        </ul>
        <button
          class="w-full bg-gold-500 text-white py-2 px-4 rounded-lg hover:bg-gold-600 transition-colors duration-300"
        >
          Choose Pro VIP Plan
        </button>
      </div>
    </div>
    <div class="mt-16">
      <h2 class="text-2xl font-semibold mb-4">Secure Payment Options</h2>
      <p class="mb-6">We accept all major credit cards for your convenience</p>
      <div class="flex justify-center items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="Visa"
          class="h-8"
          width="50"
          height="32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="Mastercard"
          class="h-8"
          width="50"
          height="32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="American Express"
          class="h-8"
          width="50"
          height="32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1280px-Visa_2021.svg.png"
          alt="PayPal"
          class="h-8"
          width="50"
          height="32"
        />
      </div>
    </div>

    <div class="mt-16">
      <h2 class="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <el-collapse>
        <el-collapse-item :name="faq?.id + 1" v-for="faq in faq" :key="faq?.id">
          <template #title>
            <el-icon class="m-2"><CirclePlusFilled /></el-icon>
            {{ faq?.question }}
          </template>
          <p class="ml-8">
            {{ faq?.answer }}
          </p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script setup>
// Add any necessary imports here
import { onMounted, computed } from "vue";
import { CirclePlusFilled } from "@element-plus/icons-vue";
import { usePricingStore } from "@/stores/pricing/Pricing";
import { useFaqStore } from "@/stores/faq/Faq";

const pricingStore = usePricingStore();
const faqStore = useFaqStore();

const basePackages = computed(() => pricingStore.base_plan ?? []);
const vipPackages = computed(() => pricingStore.vip_plan ?? []);
const vipProPackages = computed(() => pricingStore.pro_vip_plan ?? []);
const faq = computed(() => faqStore.faq ?? []);

// Add any necessary component logic here
onMounted(async () => {
  await pricingStore.getPackages();
  await faqStore.getFaq();
});
</script>

<style scoped>
.bg-gold-500 {
  background-color: #ffd700;
}
.bg-gold-600 {
  background-color: #ffc600;
}
.el-collapse-item__header {
  margin-bottom: 10px !important;
}
</style>
