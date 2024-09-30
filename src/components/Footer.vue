<template>
    
    <footer>
        <div class="Rodape"> 
         <p id="text_rodape">&copy; Desenvolvido por 
        <nav id="link_footer">
             <a href="https://github.com/MatheusDeZottis" target="_blank">Matheus De Zottis</a>
        </nav>
        </p>   
        </div>
    </footer>
    

</template>


<style scoped>

.Rodape {
    width: 100%;
    height: 60px;
    margin-top: 22%;
    margin-bottom: 2%;
    margin-left: 0%;
    margin-left: 0%;
    text-align: center;
    background-color: #3dff00;
    display: block;
 

}


a {
    text-decoration: none;
}

#text_rodape {
    color: black;
    font-style: italic;
    font-size: large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: dashed;
    
}

#link_footer {
    position: relative;
    display: inline-block;
    color: #000000;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s ease; 
    
}

#link_footer::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ff3300;
    transition: width 0.3s ease; 
    
}

#link_footer:hover {
    color: #0bff71; 
}

#link_footer:hover::after {
    width: 100%; 
}


</style>

<script>

</script>