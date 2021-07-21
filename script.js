    window.sr=ScrollReveal();
    sr.reveal('.navbar',{
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.header-content-left',{
        duration: 2000,
        origin: 'top',
        distance: '300px'
    });
    sr.reveal('.page-header',{
        duration: 2000,
        origin: 'right',
        distance: '300px'
    });
    sr.reveal('.row',{
        duration: 2000,
        origin: 'right',
        delay: 1000
    });
    sr.reveal('.pa',{
        duration: 2000,
        origin: 'right',
        delay: 1000
    });
    sr.reveal('#testi',{
        duration: 2000,
        origin: 'left',
        distance: '300px',
        viewFactor: '0.2'
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
    });
    });

    $(document).ready(function(){
        $("#myInput1").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
     
      $(document).ready(function(){
        $("#myInput2").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });


      $(document).ready(function(){
        $("#myInput3").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myDIV *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });

      $(document).ready(function() {
        var toggletabla = $("#toggletabla");
        var toggleLista = $("#toggleLista");
        var toggleCulCosa = $("#toggleCulCosa");
        
        var tabla1 = $("#tabla1");
        var Lista1 = $("#Lista1");
        var CualCosa = $("#CualCosa");
      
            
        toggletabla.click(function() {
            Lista1.hide(1000);
            CualCosa.hide(1000);
            tabla1.toggle(1000);
        });
        toggleLista.click(function() {
            tabla1.hide(1000);
            CualCosa.hide(1000);
            Lista1.toggle(1000);
        });
        toggleCulCosa.click(function() {
            Lista1.hide(1000);
            tabla1.hide(1000);
            CualCosa.toggle(1000);
        });
      });