<template>
    <div class="content">
        <div class="wrapper">
            <img src="../assets/1.jpeg">
        </div>
        <div class="color"></div>
        <div class="wrapper" id="contato">
            <h1>Participe da discussão!</h1>
            <a href="http://aminoapps.com/c/EREEAD">
            <div class="button">
            <p>Forum</p>
            </div>
            </a>
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

#contato {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#contato p {
    line-height: 50px;
    color: #000;
    text-decoration: none;
}

#contato a {
    text-decoration: none;    
}

#contato .button {
    text-align: center;
    background-color: #D95d39;
    border-radius: 20px;
    height: 50px;
    width: 100px;
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
    min-width: 20px;
    width: 50px;
    height: 100%;
}

#contato {
    padding: 50px;
    min-width: 300px;
}
}

</style>
