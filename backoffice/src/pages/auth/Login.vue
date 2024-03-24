<template>
  <VaForm ref="form" @submit.prevent="submit">
    <h1 class="font-semibold text-4xl mb-4">Log in</h1>
  
    <VaInput
      v-model="formData.email"
      :rules="[validators.required, validators.email]"
      class="mb-4"
      label="Email"
      type="email"
    />
    <VaValue v-slot="isPasswordVisible" :default-value="false">
      <VaInput
        v-model="formData.password"
        :rules="[validators.required]"
        :type="isPasswordVisible.value ? 'text' : 'password'"
        class="mb-4"
        label="Password"
        @clickAppendInner.stop="isPasswordVisible.value = !isPasswordVisible.value"
      >
        <template #appendInner>
          <VaIcon
            :name="isPasswordVisible.value ? 'mso-visibility_off' : 'mso-visibility'"
            class="cursor-pointer"
            color="secondary"
          />
        </template>
      </VaInput>
    </VaValue>

    <div class="auth-layout__options flex flex-col sm:flex-row items-start sm:items-center justify-between">
      <VaCheckbox v-model="formData.keepLoggedIn" class="mb-2 sm:mb-0" label="Keep me signed in on this device" />
      <RouterLink :to="{ name: 'recover-password' }" class="mt-2 sm:mt-0 sm:ml-1 font-semibold text-primary">
        Forgot password?
      </RouterLink>
    </div>

    <div class="flex justify-center mt-4">
      <VaButton class="w-full" @click="submit"> Login</VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import axios from 'axios'
import {ROLE_EMPLOYER,URL_FRONT_OFFICE,ROLE_ADMIN,LOGIN_ENDPOINT,API_BASE_URL} from '../../stores/constant'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useToast } from 'vuestic-ui'
import { validators } from '../../services/utils'

const { validate } = useForm('form')
const { push } = useRouter()
const { init } = useToast()

const formData = reactive({
  email: '',
  password: '',
  keepLoggedIn: false,
})

const submit = () => {
  if (validate()) {
    let email = formData.email
          let password = formData.password
          let remeberMe = formData.keepLoggedIn
        axios
        .post(API_BASE_URL+LOGIN_ENDPOINT,{email,password,remeberMe}) 
        .then((response: any) => {
          if(response.data &&  response.data.role && (response.data.role == ROLE_ADMIN || response.data.role ==ROLE_EMPLOYER))
          {
         
            console.log('Account login successful')
            init({ message: "You've successfully logged in", color: 'success' })
            push({ name: 'dashboard' })
         //   this.accountLoginAlert()
           // this.logged = true
          }
          else if(response.data && response.data.role && (response.data.role != ROLE_ADMIN  && response.data.role !=ROLE_EMPLOYER )){
            window.location.href = URL_FRONT_OFFICE;
          }
          
        })
        
        .catch((error: { response: { data: any }; message: any }) => {
          console.log(error.response.data)
    
        })

  }
}
</script>
