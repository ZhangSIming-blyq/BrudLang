<template>
    <navbar position="fixed" type="primary" :transparent="transparent" :color-on-scroll="colorOnScroll"
        menu-classes="ml-auto">
        <template>
            <router-link v-popover:popover1 class="navbar-brand" to="/">
                BrudLang
            </router-link>
            <el-popover ref="popover1" popper-class="popover" placement="bottom" width="200" trigger="hover">
                <div class="popover-body">
                    Designed by bailiyingqi
                </div>
            </el-popover>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a class="nav-link" href="#/"><i class="now-ui-icons ui-1_send" aria-hidden="true"></i>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/courses"><i class="now-ui-icons ui-1_send"
                        aria-hidden="true"></i>Courses</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/news"><i class="now-ui-icons ui-1_send" aria-hidden="true"></i>News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/login"><i class="now-ui-icons users_circle-08"
                        aria-hidden="true"></i>Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn btn-neutral" href="https://www.creative-tim.com/product/vue-now-ui-kit-pro"
                    target="_blank">
                    <i class="now-ui-icons arrows-1_share-66"></i>
                    <p>Upgrade to PRO</p>
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom"
                    href="https://twitter.com/CreativeTim" target="_blank">
                    <i class="fab fa-twitter"></i>
                    <p class="d-lg-none d-xl-none">Twitter</p>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom"
                    href="https://www.facebook.com/CreativeTim" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                    <p class="d-lg-none d-xl-none">Facebook</p>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom"
                    href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                    <i class="fab fa-instagram"></i>
                    <p class="d-lg-none d-xl-none">Instagram</p>
                </a>
            </li>
        </template>
    </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components'
import { Popover } from 'element-ui'
export default {
    name: 'main-navbar',
    props: {
        transparent: Boolean,
        colorOnScroll: Number
    },
    components: {
        DropDown,
        Navbar,
        NavLink,
        [Popover.name]: Popover
    }
}
</script>

<style scoped></style>
