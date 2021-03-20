<template>
    <div>
        <public-header></public-header>
        <router-view></router-view>
        <public-footer></public-footer>
    </div>
</template>

<script>
import PublicFooter from './partial/PublicFooter.vue'
import PublicHeader from './partial/PublicHeader.vue'
export default {
    name: "PublicMaster",
    components: {
        PublicHeader,
        PublicFooter,
    }
}
</script>
