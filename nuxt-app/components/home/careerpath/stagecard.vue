<template>
  <div class="career-path-content item">
    <div class="career-path-content-wrapper">
      <div>
        <p class="career-path-subtitle">5 Stages create your business overseas</p>
        <h2 class="career-path-title">Digiwin Go. Explore the best way to internationalize your business.</h2>
      </div>
      <div class="business-card">
        <div class="business-card-title">
          <span class="business-card-number">{{ props.stageNumber }}</span>
          <span class="business-card-heading">{{ props.stageTitle }}</span>
        </div>
        <div class="business-card-desc">
          {{ props.stageDescription }}
        </div>
        <button class="business-card-btn">
          Learn more
          <span class="arrow">→</span>
        </button>
      </div>
    </div>
  </div>
  
</template>
<script setup>
const props = defineProps([
  'stageTitle',
  'stageNumber',
  'stageDescription',
  'link'
]);

</script>


<style scoped>
.business-card {
  position: relative;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 2rem 2.5rem 2rem 2.5rem;
  margin: 2.5rem 0 0 0;
  max-width: 540px;
  border: 2px solid #d2e8f6;
  /* Stacked border effect */
  box-shadow:
    0 0 0 0 #fff,
    0 6px 0 0 #d2e8f6,
    0 12px 0 0 #b8daf0;
}

.business-card-title {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.business-card-number {
  font-size: 2rem;
  font-weight: bold;
  color: #2176d2;
  margin-right: 0.75rem;
}

.business-card-heading {
  font-size: 1.4rem;
  font-weight: bold;
  color: #1a2a3a;
}

.business-card-desc {
  color: #3a4a5a;
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  line-height: 1.6;
}

.business-card-btn {
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #17375a;
  border: 2px solid #2176d2;
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  outline: none;
}

.business-card-btn:hover {
  background: #2176d2;
  color: #fff;
}

.business-card-btn .arrow {
  margin-left: 0.7em;
  font-size: 1.2em;
  display: inline-block;
  transition: transform 0.2s;
}

.business-card-btn:hover .arrow {
  transform: translateX(4px);
}

.career-path-title {
  padding: 10px 0;
  font-size: 1.8rem;
  font-weight: bold;
  color: #1a2a3a;
  margin-bottom: 0.5rem;
}

.career-path-content-wrapper {
  align-items: center;
  padding: 2rem 3rem;
}
</style>