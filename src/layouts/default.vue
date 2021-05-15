<template>
  <main class="min-h-screen flex flex-col px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view class="flex-grow" />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div>
  </main>
</template>
