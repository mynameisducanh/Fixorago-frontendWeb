<template>
  <div class="text-primary d-flex">
    <p class="mx-2 mb-0 font-weight-bold">INIT SOURCE</p>
    <p>test</p>
    <div class="w-25">
      <a-input placeholder="Basic usage" />
      <a-button type="primary">
        <ArrowLeftOutlined />
        Primary Button
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
</script>
