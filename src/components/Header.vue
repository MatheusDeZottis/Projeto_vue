
<template>
    <header>
    <div class="Header">
      <h1> <img src="" alt=""></h1>
      <nav>
        <ul class="Navegação">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>
          <li><router-link to="/services">Serviços</router-link></li>
          <li><router-link to="/contact">Contato</router-link></li>
          <input type="button" value="Login">
        </ul>
      </nav>
    </div>
  </header>



</template>

<style scoped>
input {
    background-color: rgb(177, 240, 174);
    font-size: 16px;
    box-shadow: black 5px;
    border-radius: 7px;
    color: black;
    margin: 0;
  

}
.Header{
    position: fixed;
    width: 100%;
    margin: 0%;
    height: 20%;
    background-color: blue;
    border-radius: 7%;

}

.Navegação {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    text-decoration: none;
    list-style: none;
  
}
.Navegação:hover{
    text-decoration: underline;
   
}





</style>

<script setup></script>