$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Siguiente",
            previous: "Regresar",
            finish: 'Enviar contratación'
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex >= 1 ) {
                $('.steps ul li:first-child a img').attr('src','images/usuario.png');
            } else {
                $('.steps ul li:first-child a img').attr('src','images/usuario-active.png');
            }

            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(2) a img').attr('src','images/evento-active.png');
            } else {
                $('.steps ul li:nth-child(2) a img').attr('src','images/evento.png');
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(3) a img').attr('src','images/productos-active.png');
            } else {
                $('.steps ul li:nth-child(3) a img').attr('src','images/productos.png');
            }

            if ( newIndex === 3 ) {
                $('.steps ul li:nth-child(4) a img').attr('src','images/finalizar-active.png');
                $('.actions ul').addClass('finalizar');
            } else {
                $('.steps ul li:nth-child(4) a img').attr('src','images/finalizar.png');
                $('.actions ul').removeClass('finalizar');
            }
            return true; 
        }
    });

    $('#filterOptions a').click(function () {
        var ourClass = $(this).attr('class');
        $('#filterOptions a').removeClass('active');
        $(this).parent().addClass('active');

        if (ourClass == 'all') {
            $('#ourHolder').children().show();
        } else {
            $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
            $('#ourHolder').children('div.' + ourClass).show();
        }

        return false;
    });

    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Click to see password 
    $('.password i').click(function(){
        if ( $('.password input').attr('type') === 'password' ) {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    }) 
    // Create Steps Image
    $('.steps ul li:first-child').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/usuario-active.png" alt=""> ').append('<span class="step-order">Paso 1</span>');
    $('.steps ul li:nth-child(2').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/evento.png" alt="">').append('<span class="step-order">Paso 2</span>');
    $('.steps ul li:nth-child(3)').append('<img src="images/step-arrow.png" alt="" class="step-arrow">').find('a').append('<img src="images/productos.png" alt="">').append('<span class="step-order">Paso 3</span>');
    $('.steps ul li:last-child a').append('<img src="images/finalizar.png" alt="">').append('<span class="step-order">Paso 4</span>');
    // Count input 
    $(".quantity span").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.hasClass('plus')) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
           // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
            } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
    
})


