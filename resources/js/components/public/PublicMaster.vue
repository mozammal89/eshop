<template>
    <div>
        <public-header></public-header>
        <public-bread-crum></public-bread-crum>
        <router-view></router-view>
        <public-footer></public-footer>
    </div>
</template>

<script>
import PublicFooter from './partial/PublicFooter.vue'
import PublicHeader from './partial/PublicHeader.vue'
import PublicBreadCrum from './partial/PublicBreadCrum.vue'
export default {
    name: "PublicMaster",
    components: {
        PublicHeader,
        PublicFooter,
        PublicBreadCrum,
    }
}
</script>
