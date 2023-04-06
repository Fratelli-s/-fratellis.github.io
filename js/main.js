$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    const targetDiv2 = document.getElementById("step-1");
    const targetDiv = document.getElementById("step-2");
    const targetDiv3 = document.getElementById("step-3");
    const btn = document.getElementById("toggle");
    const btn2 = document.getElementById("toggle2");
    const sendbutton = document.getElementById("Send");

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-default');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url'], input[type='date']"), 
            eSelect = document.getElementById("SelectOption"),
            check1 = document.getElementById("myCheck1"),
            check2 = document.getElementById("myCheck2"),
            check3 = document.getElementById("myCheck3"),
            check4 = document.getElementById("myCheck4"),
            valueSelect = eSelect.value,
            isValid = true;

        $(".form-group").removeClass("has-error");

        if(curStepBtn=="step-2"){
            for(var i=0; i<curInputs.length; i++){
                if (!curInputs[i].validity.valid || valueSelect == ""){
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                    $(valueSelect).closest(".form-group").addClass("has-error");
                }
            }
        }
        else if(curStepBtn == "step-3"){
            if (check1.checked == false & check2.checked == false & check3.checked == false & check4.checked == false) {  
                isValid = false;
                $(check1).closest(".form-group").addClass("has-error");
                $(check2).closest(".form-group").addClass("has-error");
                $(check3).closest(".form-group").addClass("has-error");
                $(check4).closest(".form-group").addClass("has-error");
            } 
        } 
        else{
            for(var i=0; i<curInputs.length; i++){
                if (!curInputs[i].validity.valid){
                    isValid = false;
                    $(curInputs[i]).closest(".form-group").addClass("has-error");
                
                }
            }
        } 

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');

    btn.onclick = function () {
        if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
        targetDiv2.style.display="block";
        } else {
        targetDiv.style.display = "block";
        }
    };
    btn2.onclick = function () {
        if (targetDiv3.style.display !== "none") {
        targetDiv3.style.display = "none";
        targetDiv.style.display="block";
        } else {
        targetDiv3.style.display = "block";
        }
    };

    sendbutton.onclick = function(){
        $('#formevent').on('submit', function(event) {
            
            event.preventDefault(); // prevent reload
            
            var formData = new FormData(this);
            formData.append('service_id', 'FratellisEvents');
            formData.append('template_id', 'template_r7iyesn');
            formData.append('user_id', 'vAIa6XoMxcQbeubwZ');
         
            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function() {
                window.location.reload();
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });
        });
    }

    const full_name = document.getElementById("full_name");
    const email_address = document.getElementById("email_address");
    const message = document.getElementById("message");
    const Send_index = document.getElementsByClassName("form-footer")[0];

    Send_index.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log("Clicked");

        Email.send({
            SecureToken : "13ad6542-f3c0-49ab-ab23-a63e56f66621",
            To : 'chofasbff@gmail.com',
            From : "chofasbff@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );

    });

});