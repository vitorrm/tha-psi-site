<template>
  <div
    class="relative mx-auto py-6 px-4 w-full max-w-7xl bg-gray-50 text-gray-800"
  >
    <div class="flex flex-col items-center">
      <!-- :TITLE CONTAINER *-->
      <div class="mb-8 mx-auto max-w-3xl flex items-center text-center">
        <span class="mr-3 w-10 sm:w-20 h-0.5 bg-gray-500" />
        <h2
          class="text-xl sm:text-3xl md:text-4xl text-gray-400 font-light font-serif tracking-wider uppercase"
        >
          DEPOIMENTOS
        </h2>
        <span class="ml-3 w-10 sm:w-20 h-0.5 bg-gray-500" />
      </div>

      <!-- :TESTIMONIALS CONTAINER *-->
      <div class="mx-auto w-full max-w-xl lg:max-w-6xl">
        <ul class="grid grid-cols-3 gap-x-4">
          <li
            v-for="person of people"
            :key="person.name"
            class="col-span-full lg:col-span-1 relative py-5 px-4 flex flex-col justify-between rounded text-center"
          >
            <!-- ::Testimony *-->
            <p class="z-10 relative mt-2 text-gray-600 font-serif">
              "{{ person.testimony }}"
            </p>

            <!-- ::Author details *-->
            <div class="z-10 relative mt-5 flex flex-col items-center">
              <!-- :::picture *-->
              <span
                class="w-20 h-20 rounded-full border-2 border-indigo-50 overflow-hidden"
              >
                <img
                  :src="person.picture"
                  alt=""
                  class="object-cover filter grayscale"
                />
              </span>
              <div class="ml-3 inline-flex flex-col">
                <!-- :::name *-->
                <h3 class="text-lg font-semibold">{{ person.name }}</h3>
                <!-- :::role *-->
                <p class="text-sm text-gray-400 font-bold uppercase">
                  {{ person.company }}
                </p>
              </div>
            </div>

            <!-- ::Quote SVG *-->
            <svg
              class="absolute top-0 left-1/2 w-56 h-56 text-gray-200 transform -translate-x-1/2"
              fill="currentColor"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 421.000000 374.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,374.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M100 2769 l0 -901 575 3 c428 2 578 0 586 -8 28 -28 -1 -235 -53 -381 -60 -171 -143 -305 -269 -437 -184 -192 -412 -308 -684 -350 -60 -9 -120 -18 -132 -21 l-23 -4 0 -305 c0 -168 3 -305 8 -305 27 0 277 31 322 40 704 134 1268 689 1416 1394 22 106 26 159 34 426 10 358 13 1599 4 1689 l-7 61 -888 0 -889 0 0 -901z"
                />
                <path
                  d="M2370 2776 l0 -894 25 -6 c14 -4 278 -6 587 -6 602 1 581 3 573 -50 -2 -14 -12 -72 -20 -129 -41 -262 -170 -511 -356 -686 -177 -168 -397 -271 -671 -315 -70 -11 -130 -20 -133 -20 -3 0 -5 -135 -5 -300 l0 -300 63 0 c143 0 328 34 499 90 580 193 1021 669 1173 1265 48 189 48 192 52 1248 l4 997 -895 0 -896 0 0 -894z"
                />
              </g>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const people = [
  {
    name: 'Jon Domino',
    company: 'Google',
    picture:
      'https://fancytailwind.com/static/profile13-9abe52b1e8851f9e4afde349f2789d3e.jpg',
    testimony:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aliquid, illo reiciendis voluptatum asperiores ipsum perspiciatis beatae repellendus quis dicta consequatur tempora sapiente molestiae cupiditate harum dolore in voluptatem laboriosam.',
  },
  {
    name: 'Luke Skyrunner',
    company: 'Netflix',
    picture:
      'https://fancytailwind.com/static/profile1-f6247c7096a1fde2574d6ca47a62e534.jpg',
    testimony:
      'Amet ipsam nam architecto doloribus earum asperiores voluptates minus quibusdam culpa, officiis eius quasi, deserunt esse ipsa iste unde tempora? Obcaecati, a!',
  },
  {
    name: 'Clara Twingo',
    company: 'Amazon',
    picture:
      'https://fancytailwind.com/static/profile16-3468a6740e58a45b951142454acb94d0.jpg',
    testimony:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque cumque dolore doloremque, vel necessitatibus ab blanditiis sunt est mollitia accusamus odio dolorum expedita facere repellat aut magnam adipisci asperiores nam.',
  },
]
</script>

<style scoped></style>
