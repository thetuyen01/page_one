<template>
  <div class="container mx-auto py-8">
    <!-- Avatar và thông tin cá nhân -->
    <div class="bg-white p-6 rounded shadow-md max-w-2xl mx-auto">
      <div class="flex items-center mb-4">
        <img
          class="w-24 h-24 rounded-full"
          :src="profile.avatar"
          alt="User Avatar"
        />
        <div class="ml-4">
          <h2 class="text-2xl font-semibold">{{ profile.name }}</h2>
          <p class="text-gray-600">{{ profile.email }}</p>
          <div v-if="profile.vipLevel" class="mt-2">
            <span class="bg-yellow-400 text-white py-1 px-2 rounded">{{
              vipStatus
            }}</span>
            <p class="mt-1 text-sm text-gray-500">
              Time left: {{ profile.vipExpiration }} days
            </p>
          </div>
        </div>
      </div>
      <!-- Nút mở dialog lịch sử mua gói -->
      <button
        @click="openDialog"
        class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        View Purchase History
      </button>
    </div>

    <!-- Dialog Lịch sử mua gói -->
    <el-dialog v-model="isDialogOpen" title="Purchase History" width="600px">
      <div v-if="purchaseHistory.length > 0">
        <ul>
          <li
            v-for="(item, index) in purchaseHistory"
            :key="index"
            class="mb-2"
          >
            <p class="text-lg font-semibold">Package: {{ item.packageName }}</p>
            <p>Date: {{ item.purchaseDate }}</p>
            <p>Status: {{ item.status }}</p>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>No purchase history available.</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElDialog, ElButton } from "element-plus";

const profile = ref({
  avatar: "https://i.pravatar.cc/150?img=3", // Link ảnh avatar
  name: "Nguyen Vo The Tuyen",
  email: "nguyen.tuyen@example.com",
  vipLevel: 3, // Level VIP (số mấy)
  vipExpiration: 30, // Số ngày sử dụng gói còn lại
});

const purchaseHistory = ref([
  {
    packageName: "VIP Package 1",
    purchaseDate: "2023-09-01",
    status: "Active",
  },
  {
    packageName: "VIP Package 2",
    purchaseDate: "2023-06-15",
    status: "Expired",
  },
]);

const isDialogOpen = ref(false);

const openDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
};

const vipStatus = `VIP Level ${profile.value.vipLevel}`;
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
