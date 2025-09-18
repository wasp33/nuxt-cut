<template>
  <div class="career-path">
    <div class="career-path-header item">
      <div class="circle-container">
        <svg class="circle-lines" :width="size" :height="size">
          <polyline :points="polylinePoints" fill="none" stroke="#2bb3e6" stroke-width="3" />
        </svg>
        <div v-for="(stage, i) in stages" :key="i" class="stage" :style="getStageStyle(i)" @click="selectStage(i)">
          <div class="stage-outer"></div>
          <div class="stage-inner" :class="{ active: selectedStage === i }">
            <div class="stage-icon"><img :src="house" alt=""></div>
            <div class="stage-label">Stage {{ i + 1 }}</div>
          </div>
        </div>
        <div class="center-label">
          <div class="center-icon"><img :src="justwantoknow" alt=""></div>
        </div>
      </div>
    </div>
    <home-careerpath-stagecard
      :stage-title="stages[selectedStage].stageTitle"
      :stage-number="stages[selectedStage].stageNumber"
      :stage-description="stages[selectedStage].stageDescription"
      :link="stages[selectedStage].link"
    />
   <!-- <div class="career-path-content item">
      <div class="career-path-content-wrapper">
        <div>
          <h2 class="career-path-title">Career Path</h2>
          <p class="career-path-subtitle">Explore the stages of business growth and the digital solutions that support
            each phase.</p>
        </div>
        <div class="business-card">
          <div class="business-card-title">
            <span class="business-card-number">03</span>
            <span class="business-card-heading">Management & Expansion</span>
          </div>
          <div class="business-card-desc">
            The expansion stage emphasizes management and scaling. Companies adopt ERP, finance, and production
            platforms
            to stabilize processes. Strengthening supply chain and HR systems modernizes operations, enabling
            sustainable
            market growth with digital support.
          </div>
          <button class="business-card-btn">
            Learn more
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>

.career-path {
  width: 100vmax;
  display: flex;
  justify-content: space-between;
  background-color: #f5f8fa;
  border-radius: 10px;
}

.career-path .item {
  align-items: center;
  width: 50%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.circle-container {
  position: relative;
  width: 340px;
  height: 340px;
  margin: 40px auto;
  background: #f7fafc;
}

.circle-lines {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.stage {
  border-radius: 50%;
  position: absolute;
}

.stage-outer {
  position: absolute;
  width: 110px;
  height: 110px;
  left: -5px;
  top: -5px;
  border-radius: 50%;
  border: 1px dashed #2bb3e6;
  box-sizing: border-box;
  z-index: 1;
  background: transparent;
  pointer-events: none;
}

.stage-inner {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid #2bb3e6;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
  z-index: 2;
}

.stage-inner-normal {
  padding-top: 10px;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #2bb3e6;
  box-sizing: border-box;
  align-items: center;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.state-inner-normal.active {
  background: linear-gradient(135deg, #2176d2 60%, #2bb3e6 100%);
  color: #fff;
  border: none;
  box-shadow: 0 4px 16px rgba(43, 179, 230, 0.15);
}

.stage-inner.active {
  background: linear-gradient(135deg, #2176d2 60%, #2bb3e6 100%);
  color: #fff;
  border: none;
  box-shadow: 0 4px 16px rgba(33, 118, 210, 0.15);
}

.stage-inner:hover {
  background: #2176d2;
  color: #fff;
}

.stage-icon {
  width: 50%;
}

.stage-label {
  font-size: 0.9rem;
  font-weight: 600;
}

.center-label {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #222;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  pointer-events: none;
}

.center-icon img {
  width: 80px;
  height: 90px;
}

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

<script setup>
import { ref } from "vue";
import house from "../../../assets/icons/house.png";
import justwantoknow from "../../../assets/icons/justwanttoknow.png";
//const stages = [1, 2, 3, 4, 5];
const size = 340; // px
const center = size / 2;
const radius = 120;

const selectedStage = ref(0);
const selectStage = (index) => {
  selectedStage.value = index;
};

const stages=ref([
  {
    stageId: 1,
    stageTitle: "Startup & Launch",
    stageNumber: "01",
    stageDescription:
      "In the startup phase, businesses focus on establishing their online presence. They typically utilize basic tools like website builders and social media platforms to create brand awareness and attract initial customers.",
    link: "#"
  },
  {
    stageId: 2,
    stageTitle: "Growth & Development",
    stageNumber: "02",
    stageDescription:
      "During the growth stage, companies aim to expand their market reach and customer base. They often adopt CRM systems, email marketing tools, and analytics platforms to enhance customer engagement and optimize marketing strategies.",
    link: "#"
  },
  {
    stageId: 3,
    stageTitle: "Management & Expansion",
    stageNumber: "03",
    stageDescription:
      "The expansion stage emphasizes management and scaling. Companies adopt ERP, finance, and production platforms to stabilize processes. Strengthening supply chain and HR systems modernizes operations, enabling sustainable market growth with digital support.",
  },
  {
    istageId: 4,
    stageTitle: "Maturity & Optimization",
    stageNumber: "04",
    stageDescription:
      "In the maturity phase, businesses focus on optimizing operations and maintaining market position. They implement advanced analytics, AI-driven tools, and automation solutions to enhance efficiency, reduce costs, and improve decision-making processes.",
    link: "#"
  },
  {
    stageId: 5,
    stageTitle: "Innovation & Transformation",
    stageNumber: "05",
    stageDescription:
      "At this stage, companies prioritize innovation to stay competitive. They explore emerging technologies like blockchain, IoT, and machine learning to create new products or services, transform business models, and drive long-term growth.",
    link: "#"
  },
]);


function getStageStyle(i) {
  const angle = (2 * Math.PI * i) / stages.value.length - Math.PI / 2;
  const x = center + radius * Math.cos(angle) - 50;
  const y = center + radius * Math.sin(angle) - 50;
  return {
    position: "absolute",
    left: `${x}px`,
    top: `${y}px`,
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  };
}

// For SVG polyline connecting the stages
const polylinePoints = stages.value
  .map((_, i) => {
    const angle = (2 * Math.PI * i) / stages.value.length - Math.PI / 2;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return `${x},${y}`;
  })
  .join(" ") + ` ${center + radius * Math.cos(-Math.PI / 2)},${center + radius * Math.sin(-Math.PI / 2)}`;
</script>