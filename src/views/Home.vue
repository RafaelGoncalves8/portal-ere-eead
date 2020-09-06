<template>
    <div class="content">
        <div class="wrapper">
            <img id="slideshow" src="../assets/1.jpeg">
        </div>
        <div id="right-pane">
            <h1>COVID-19 E A EDUCAÇÃO</h1>
            <p>O que a pandemia de COVID-19 tem a ver com o projeto de precarização da educação pública?</p>
        </div>
    </div>
</template>

<style>
/* * { */
/*     margin: 0; */
/*     padding: 0; */
/* } */

.content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.wrapper {
    background: #111;
    overflow: hidden;
}

#right-pane {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify: space-around;
    background-color: #f7db04;
    border-style: solid;
    border-width: 1px 0 0 0;
    padding: 30px;
}

h1 {
    text-align: center;
}

#slideshow {
    filter: grayscale(100%);
}

@media screen and (min-width: 768px) {
.content {
    flex-direction: row;
    width: calc(100% - 200px);
    height: 100%;
}

#right-pane {
    width: 500px;
    padding: 50px;
    height: 100%;
    border-width: 0 0 0 1px;
}
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
