<template>
  <header>
    <div class="Header">
      <h1><img src="" alt=""></h1>
      <nav>
        <ul class="Navegação">
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">Sobre</router-link></li>
          <li><a href="https://github.com/MatheusDeZottis" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/matheus-de-zottis-2108b82b5/edit/forms/skills/new/?profileFormEntryPoint=PROFILE_SECTION" target="_blank">Contato</a></li>
          <li><router-link to="/login"><input type="button" value="Login"></router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<style scoped>
input {
  background-color: rgb(177, 240, 174);
  font-size: 16px;
  border-radius: 7px;
  color: black;
  margin: 0;
  


} 

@media (min-width: 724px) and (max-width: 1024px) {
  .Header {
    position: fixed;
    width: 100%;
    margin: 0%;
    height: 20%;
    background-color: #3dff00;
    border-radius: 3%;
    color: white;
  }
}

@media (min-width: 320px) and (max-width: 480px) {
  .Header {
    position: fixed;
    width: 100%;    
    height: 12%;
    background-color:#3dff00 ;
    color: white;
    border-radius: 3%;
    margin: -9px;

  }
}
@media (min-width: 480px) and (max-width: 724px) {
  .Header {
    position: absolute;
    width: 100%;
    height: 10%;
    background-color:#3dff00;
    color: white;
    border-radius: 3%;
   

  }
}
@media (min-width: 1024px){
  .Header {
    position: fixed;
    width: 101%;
    height: 10%;
    background-color: #3dff00;
    border-radius: 3%;
    color: white;
    margin: -8px;
  }
}

.Navegação {
  width: 74%;
  margin: -60px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  text-decoration: none;
  list-style: none;

}

.Navegação:hover {
  text-decoration: solid;

}
</style>

<script setup></script>