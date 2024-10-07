<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="200"
    height="200"
  >
    <!-- Hình tròn đại diện cho Trái Đất -->
    <circle
      cx="100"
      cy="100"
      r="90"
      fill="lightblue"
      stroke="gold"
      stroke-width="5"
    />

    <!-- Lục địa, được vẽ như các hình dạng tùy ý -->
    <path
      d="M 50,100 Q 60,70 80,90 Q 100,110 110,70 Q 90,60 100,50 Q 120,60 130,80 Q 140,100 130,120 Q 100,130 90,150 Q 70,140 50,100 Z"
      fill="green"
      stroke="gold"
      stroke-width="2"
    />

    <!-- Hiệu ứng sáng bóng mạ vàng -->
    <circle cx="70" cy="70" r="30" fill="rgba(255, 215, 0, 0.3)" />
  </svg>
</template>
