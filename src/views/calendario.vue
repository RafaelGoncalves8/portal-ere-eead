<template>
    <div class="content">
        <div class="wrapper" id="calendario">
            <h1>Atos contra ERE e EEAD</h1>
            <div id="timer" class="timer">
                <Countdown end="September 14, 2020"></Countdown>
            </div>
        </div>
        <div class="color"></div>
        <div class="wrapper">
            <img src="../assets/3.jpeg">
        </div>
    </div>
</template>

<style>
.content {
    display: flex;
    flex-direction: column;
}

#calendario {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    min-height: 30%;
}

.color {
    background-color: #f18805;
    height: 50px;
}

img {
    filter: grayscale(100%);
    min-height: 100%;
}

.wrapper {
    background-color: #DDD;
}


@media screen and (min-width: 768px) {
.content {
    flex-direction: row;
    width: calc(100% - 200px);
    height: 100%;
}

.color {
    width: 50px;
    height: 100%;
}

#calendario {
    padding: 50px;
    width: 300px;
}
}

</style>

<script>
    import Countdown from 'vuejs-countdown'

    export default {
        components: {Countdown}
}
</script>
