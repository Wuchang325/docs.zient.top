<script setup lang="ts">
interface Props {
  url: string
  title: string
  description: string
}

withDefaults(defineProps<Props>(), {
  url: '',
  title: '',
  description: '',
})
</script>

<template>
  <a
    class="link-card"
    :href="url"
    target="_blank"
    rel="noopener"
  >
    <!-- 文本区 -->
    <div class="link-card__text">
      <p class="link-card__title">{{ title }}</p>
      <p class="link-card__desc">{{ description }}</p>
    </div>
  </a>
</template>

<style scoped>
/* ===== 卡片整体 ===== */
.link-card {
  --border: var(--vp-c-divider);
  --bg: var(--vp-c-bg-soft);
  --bg-hover: var(--vp-c-yellow-soft);
  --text-1: var(--vp-c-text-1);
  --text-2: var(--vp-c-text-2);

  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-1);
  background-color: var(--bg);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s, box-shadow 0.25s, transform 0.25s;
  text-decoration: none !important;
}

.link-card:hover {
  background-color: var(--bg-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}


/* ===== 文本区 ===== */
.link-card__text {
  flex: 1;
  min-width: 0;
}

.link-card__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: var(--text-1);
}

.link-card__desc {
  margin: 2px 0 0;
  font-size: 14px;
  line-height: 1.4;
  color: var(--text-2);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>