<template>
    <div>
        <Nav/>
        <Content/>
        <Footer/>
    </div>
    
</template>

<script>
import Content from './Content.vue';
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
    components:{    
        Footer,
        Nav,
        Content
    }
}
</script>