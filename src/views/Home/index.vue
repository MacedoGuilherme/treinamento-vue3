<template>
  <CustomHeader
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
  <Contact/>
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2021 </p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Contact from '@/views/Home/Contact.vue'
import CustomHeader from '@/views/Home/CustomHeader.vue'

export default {
  components: { Contact, CustomHeader },
  setup() {
    const router = useRouter()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin() {
      console.log('login')
    }

    function handleAccountCreate() {
      console.log('account create')
    }

    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
