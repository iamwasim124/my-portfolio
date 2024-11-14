//email submission script code start
(function(){
    emailjs.init({
      publicKey: "AAA6Nsx0qTJRlLfOj",
    });
  })();
  
  function sendMail(){
    
    let parms = {
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone_number: document.getElementById("phone_number").value,
      message: document.getElementById("message").value,
    }
    try {
      let isEmpty = Object.values(parms).some(value => value.trim() === "");
      if (isEmpty) {
    
  } else {
    $(".contact_form").html('<h5 style="text-align: center;">Thank you for your Enquiry <br><br> We will get back to you shortly...!</h5>');
  
  }
    } catch (error) {
        console.log(error)
    }
    }
  
  
  //email submission script code end
