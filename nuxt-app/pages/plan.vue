<template>
	<div class="bg-gradient-to-b from-blue-50 to-white min-h-screen pb-12">
		<!-- Header Section -->
		<div class="text-center pt-8">
			<p class="text-blue-500 text-lg font-medium mb-2">5 Stage crate your company</p>
			<h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Digiwing Go. Explore the best way to internationalize your business.</h1>
		</div>

		<!-- Stage Progress Bar -->
		<div class="flex justify-center items-center gap-8 mb-8">
			<div v-for="(stage, idx) in stages" :key="stage.label" class="flex flex-col items-center">
				<div :class="['rounded-full border-4 flex items-center justify-center w-20 h-20 mb-2', idx === activeStage ? 'bg-blue-500 border-blue-400 text-white shadow-lg' : 'bg-white border-blue-200 text-blue-500']">
					<span class="text-3xl">{{ stage.icon }}</span>
				</div>
				<span class="text-sm font-semibold" :class="idx === activeStage ? 'text-blue-600' : 'text-gray-500'">{{ stage.label }}</span>
			</div>
		</div>

		<!-- Stage Description -->
		<div class="flex justify-center mb-8">
			<div class="bg-white rounded-xl shadow px-8 py-6 max-w-2xl border border-blue-100">
				<h2 class="text-blue-700 text-xl font-bold mb-2">01 Preperation</h2>
				<p class="text-gray-700 text-base">The preparation stage focuses on market research and data collection, assessing laws, industry, workforce, and supply chains. It includes financial planning and team building, creating resources and networks to reduce risks and build a foundation for operations.</p>
			</div>
		</div>

		<!-- Section Title -->
		<div class="text-center mb-6">
			<h3 class="text-lg font-semibold text-gray-700">探索此階段更多方案</h3>
		</div>

		<!-- Card Grid -->
		<div class="flex flex-wrap justify-center gap-6 px-4">
			<div v-for="card in cards" :key="card.id" class="bg-white rounded-xl shadow-md w-72 p-4 flex flex-col">
				<img :src="card.img" alt="方案" class="rounded-lg mb-3 w-full h-40 object-cover">
				<h4 class="font-bold text-base mb-1">{{ card.title }}</h4>
				<p class="text-gray-600 text-sm mb-2">{{ card.desc }}</p>
				<div class="flex items-center mt-auto pt-2">
					<img :src="card.avatar" alt="avatar" class="w-7 h-7 rounded-full mr-2">
					<span class="text-xs text-gray-500">{{ card.author }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const stages = [
	{ icon: '📝', label: '前置' },
	{ icon: '📊', label: '階段一' },
	{ icon: '💼', label: '階段二' },
	{ icon: '🌏', label: '階段三' },
	{ icon: '👥', label: '階段四' }
];
const activeStage = 1;
const cards = [
	{
		id: 1,
		img: 'https://imgur.com/1.jpg',
		title: '超級必收',
		desc: '超級必收方案內容說明，這裡是描述文字。',
		avatar: 'https://imgur.com/avatar1.jpg',
		author: 'Vivian Chiu'
	},
	{
		id: 2,
		img: 'https://imgur.com/2.jpg',
		title: '超級必收',
		desc: '超級必收方案內容說明，這裡是描述文字。',
		avatar: 'https://imgur.com/avatar1.jpg',
		author: 'Vivian Chiu'
	},
	{
		id: 3,
		img: 'https://imgur.com/3.jpg',
		title: '超級必收',
		desc: '超級必收方案內容說明，這裡是描述文字。',
		avatar: 'https://imgur.com/avatar1.jpg',
		author: 'Vivian Chiu'
	},
	{
		id: 4,
		img: 'https://imgur.com/4.jpg',
		title: '超級必收',
		desc: '超級必收方案內容說明，這裡是描述文字。',
		avatar: 'https://imgur.com/avatar1.jpg',
		author: 'Vivian Chiu'
	}
];
</script>
