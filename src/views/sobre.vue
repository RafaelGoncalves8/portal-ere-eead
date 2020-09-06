<template>
    <div class="content">
        <div class="wrapper">
            <img src="../assets/2.jpeg">
        </div>
        <div class="color"></div>
        <div class="wrapper" id="a-luta">
            <h1>A LUTA</h1>
            <p>...</p>
        </div>
    </div>
</template>

<style>
.content {
    display: flex;
    flex-direction: column;
}

.color {
    background-color: #D95d39;
    height: 50px;
}

img {
    filter: grayscale(100%);
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

#a-luta {
    padding: 50px;
    min-width: 300px;
}
}

</style>
