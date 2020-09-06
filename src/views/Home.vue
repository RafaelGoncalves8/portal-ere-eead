<template>
    <div class="content">
        <img id="slideshow" src="../assets/1.jpeg">
    </div>
</template>

<style>
div {
    overflow: hidden;
}

#slideshow {
    min-width: 100%;
    height: 100%;
    filter: grayscale(100%);
}
</style>

<script>
    export default {
        name: 'App',
        data() {
            return {
                i: 0,
                imgsrc: [
                    "/assets/1.jpeg",
                    "/assets/2.jpeg",
                    "/assets/3.jpeg",
                    ]
            };
        },
        methods: {
            startSlideshow: function() {
                document.getElementById("slideshow").src = this.imgsrc[this.i];
                this.i++;
                if (this.i == this.imgsrc.lenght) {
                    this.i = 0;
                }
                setTimeout("startSlideshow()", 1000);
            } 
        }
    }
</script>
