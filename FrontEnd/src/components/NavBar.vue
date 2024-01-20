<script>
export default {
    data() {
        return {
            NavOff: 'block px-3 py-2 text-white rounded hover:bg-blue-700 md:hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0',
            NavOn: 'block px-3 py-2 text-blue-700 rounded hover:bg-blue-700 hover:text-white md:hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0',
        }
    },
}
</script>

<template>
    <div>
        <nav class="border-g-ray-200 bg-stone-800 h-[64px]">
            <div class="flex flex-wrap items-center justify-between p-4 mx-auto">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../assets/Logo.avif" class="w-8 rounded-full" alt="Flowbite Logo" />
                    <span class="self-center font-serif text-2xl font-semibold text-white whitespace-nowrap">Barbeiro</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-stone-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="/" :class="this.$route.path == '/' ? NavOn : NavOff">Home</a>
                        </li>
                        <li>
                            <a href="Agenda" :class="this.$route.path == '/Agenda' ? NavOn : NavOff">Agenda</a>
                        </li>
                        <!-- <li>
                            <a href="#"
                                class="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Services</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-3 py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                        </li> -->
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped></style>