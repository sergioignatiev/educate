<template>
  <footer class="shadow-black shadow-lg text-blue-900 ">
<TheWrapper>
    <div class="container ">
      <div class="py-16 flex lg:flex-row flex-col justify-between gap-10 border-b border-gray-300">

        <div class="block lg:w-1/3 ">
          <NuxtImg class="w-12 h-auto" src="/favicon.ico" alt="logo"/>
          <div class="text-sm font-semibold pt-6 space-y-3 text-blue-900">
            <p>
              Данный магазин создан Игнатьевым Сергеем исключительно для учебных целей. Не предназначен для коммерческого использования. 
            </p>
            <p>
              По вопросам сотрудничества обращайтесь ignatevsergey17@gmail.com или в <a target="_blank" class="underline hover:text-blue-600 transition-colors" href="https://t.me/SerjioIgnatev">Telegram</a>.
            </p>
          </div>
        </div>

        <div class="sm:flex lg:w-2/3 gap-10 justify-between ">
          <TheLinks :links="infoLinks">Информация</TheLinks>
          <TheLinks :links="productLinks">Продукция</TheLinks>
          <TheLinks :links="clientLinks">Клиентам</TheLinks>
        </div>

      </div>
      
      <TheBottom/>
    </div>
    </TheWrapper>
  </footer>
</template>

<script lang="ts" setup>
import TheLinks from './TheFooter/TheLinks.vue';
import TheBottom from './TheFooter/TheBottom.vue';
import { ref } from 'vue';

// Определяем интерфейс для типизации массивов ссылок
interface Link {
  id: number;
  name: string;
  link: string;
}

// 1. Ссылки для колонки "Информация"
const infoLinks = ref<Link[]>([
  { id: 1, name: "О Нас", link: "#" },
  { id: 2, name: "Карьера", link: "#" },
  { id: 3, name: "Пресса", link: "#" },
  { id: 4, name: "FAQ", link: "#" }
]);

// 2. Ссылки для колонки "Продукция" (Пример нового массива)
const productLinks = ref<Link[]>([
  { id: 5, name: "Новинки", link: "#" },
  { id: 6, name: "Скидки", link: "#" },
  { id: 7, name: "Популярное", link: "#" }
]);

// 3. Ссылки для колонки "Клиентам" (Пример нового массива)
const clientLinks = ref<Link[]>([
  { id: 8, name: "Доставка", link: "#" },
  { id: 9, name: "Возврат", link: "#" },
  { id: 10, name: "Контакты", link: "#" }
]);
</script>
