<script>
import axios from "axios";

export default {
    data() {
        return {
            email: "",
            senha: "",
        }
    },

    methods: {
        async Login() {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                "email": this.email,
                "password": this.senha
            })

            if (response.data.status) {
                localStorage.Usuario = JSON.stringify(response.data.Usuario)
                localStorage.Token = response.data.token
                window.location.href = '/'
            }

        }
    },
}
</script>

<template>
    <div class="w-full bg-stone-800 h-[100vh] flex items-center justify-center">
        <div class=" bg-white w-[90%] md:w-[50%] lg:w-[35%] p-8 rounded-xl shadow-xl">
            <img src="../assets/Logo.avif" alt="Logo" class="w-[30%] m-auto">
            <form class="max-w-sm mx-auto" @submit.prevent="Login">
                <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input v-model="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@mail.com" required>
                </div>
                <div class="mb-3">
                    <label class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input v-model="senha"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required>
                </div>
                <!-- <div class="flex items-center mb-3">
                    <input id="default-checkbox" type="checkbox" value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                    <label for="default-checkbox" class="text-sm font-medium text-gray-400 ms-2">Manter-me logado</label>
                </div> -->
                <div>
                    <button type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Entrar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style></style>