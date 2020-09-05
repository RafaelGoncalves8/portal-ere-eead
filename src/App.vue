<template>
    <div id="app">
        <div id="nav"> 
            <ul class="menu">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/sobre">Sobre</router-link></li>
                <li><router-link to="/calendario">Calendário</router-link></li>
                <li><router-link to="/contato">Contato</router-link></li>
            </ul>
            <a href="javascript:void(0);" class="showmenu" v-on:click="myFunction()">
            <div class="button">

                <div></div>
                <div></div>
                <div></div> 
            </div>
            </a>
        </div>
    <router-view></router-view>
    </div>
</template>
 
<style>
:root {
    --main-bg-color: #EEE;
    --nav-bg-color: #CCC;
    --main-color: #222;
    --main-font-family: Arial;
}

html, body {
    margin: 0px;
    width: 100%;
    height: 100%;
}

#nav {
    width: 100%;
    list-style: none;
    background-color: var(--nav-bg-color, #CCC);
}

#nav a {
    text-decoration: none;
}

#nav ul li {
    text-align: center;
}

#nav ul li:not(:first-child) {
    display: none;
}

#nav.responsive ul li {
    display: block;
}

#nav .button {
    position: absolute;
    right: 20px;
    top: 20px;
}

#nav .button {
    float: right;
    display: block;
}

#nav ul li {
    display: block;
    padding: 10px;
}

#nav .button div {
    width: 35px;
    height: 5px;
    background-color: #ebebeb;
    margin: 6px 0;
}

#app {
    display: flex;
    flex-direction: row;
    height: 100%;
    background-color: var(--main-bg-color, #EEE);
    font-family: var(--main-font-family, Helvetica, sans-serif);
    color: var(--main-color, #222);
}

@media screen and (min-width: 768px) {
#nav {
    display: flex;
    flex-direction: column;
    background-color: var(--nav-bg-color, #CCC);
    text-align: center;
    width: 200px;
    height: default;
}

#nav ul li:not(:first-child) {
    display: block;
}
}
</style>

<script>
    export default {
        name: 'App',
        methods: {
            myFunction: function() {
              var x = document.getElementById("nav");
              if (x.className === "nav") {
                x.className += " responsive";
              } else {
                x.className = "nav";
              }
            } 
        }
    }
</script>
