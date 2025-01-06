<template>
    <div class="page-header clear-filter" filter-color="orange">
        <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <card type="login" plain>
                        <div slot="header" class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="" />
                        </div>

                        <fg-input v-model="email" class="no-border input-lg"
                            addon-left-icon="now-ui-icons users_circle-08" placeholder="Email...">
                        </fg-input>

                        <fg-input v-model="password" class="no-border input-lg"
                            addon-left-icon="now-ui-icons text_caps-small" placeholder="Password..." type="password">
                        </fg-input>

                        <template slot="raw-content">
                            <div class="card-footer text-center">
                                <button @click="handleLogin" class="btn btn-primary btn-round btn-lg btn-block">
                                    Login
                                </button>
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <a href="#pablo" class="link footer-link">Create Account</a>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <a href="#pablo" class="link footer-link">Need Help?</a>
                                </h6>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components'
import MainFooter from '@/layout/MainFooter'
import { DefaultApi } from '@/api' // 引入生成的 DefaultApi

export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        async handleLogin() {
            try {
                const response = await apiClient.loginPost({
                    email: this.email,
                    password: this.password,
                })
                localStorage.setItem('accessToken', response.data.accessToken) // 保存 Token
                this.$router.push('/') // 跳转到主页
            } catch (err) {
                console.error('登录失败:', err)
                this.error = '登录失败，请检查账号和密码'
            }
        },
    },
    name: 'login-page',
    bodyClass: 'login-page',
    components: {
        Card,
        MainFooter,
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput
    }
}
</script>
<style></style>
