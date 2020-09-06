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
    width: 100%;
    height: 100%;
    margin: 0;
}

#nav {
    width: 100%;
    list-style: none;
    background-color: var(--nav-bg-color, #CCC);
    border-style: solid;
    border-width: 0 0 1px 0;
}

#nav a {
    text-decoration: none;
    color: #3b3b3b;
}

#nav a:hover, #nav a:active {
    color: #fefefe
}

#nav ul li {
    /* text-align: center; */
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
    padding: 15px;
}

#nav .button div {
    width: 35px;
    height: 5px;
    background-color: #3b3b3b;
    margin: 6px 0;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--main-bg-color, #EEE);
    font-family: var(--main-font-family, Helvetica, sans-serif);
    color: var(--main-color, #222);
}

@media screen and (min-width: 768px) {
#app {
    flex-direction: row;
}

#nav {
    display: flex;
    flex-direction: column;
    background-color: var(--nav-bg-color, #CCC);
    /* text-align: center; */
    width: 200px;
    height: default;
    border-width: 0 1px 0 0;
}

#nav ul li:not(:first-child) {
    display: block;
}

#nav .button {
    display: none;
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
