$(document).ready(function () {
  $(".Enquiry_form").validate({
    rules: {
      firstname: {
        required: true,
        lettersonly: true,
      },
      lastname: {
        required: true,
        lettersonly: true,
      },
      email: {
        required: true,
        validEmail: true,
      },
      phone_number: {
        required: true,
        validPhoneNumber: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      firstname: {
        required: "Please enter your first name",
      },
      lastname: {
        required: "Please enter your last name",
      },
      email: {
        required: "Please enter your email",
        validEmail: "Please enter a valid email address",
      },
      phone_number: {
        required: "Please enter your phone number",
        validPhoneNumber: "Please enter valid phone number",
      },
      message: {
        required: "Please enter your message",
      },
    },
    errorPlacement: function (error, element) {
      error.insertAfter(element); // Place error message after input field
    },
    submitHandler: function (form) {
      form.submit(); // Submit form when valid
    },
  });

  // Email validation method
  jQuery.validator.addMethod(
    "validEmail",
    function (value, element) {
      var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
      return this.optional(element) || emailRegex.test(value);
    },
    "Please enter a valid email address"
  );

  // Name validation method (only letters and single spaces)
  jQuery.validator.addMethod(
    "lettersonly",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(value);
    },
    "Please enter only letters with single spaces between words if required"
  );

  // Phone number validation
  jQuery.validator.addMethod(
    "validPhoneNumber",
    function (value, element) {
      var phoneRegex = /^[0-9]{7,17}$/; // Allows only digits, between 7 and 17 characters
      return this.optional(element) || phoneRegex.test(value);
    },
    "Please enter a valid phone number (between 7 and 17 digits)"
  );

// showmore script start

$("#myList li").slice(0, 4).show();
$("#myList li").slice(4).hide();
$("#toggleButton").click(function () {
  const hiddenItems = $("#myList li:hidden");

  if (hiddenItems.length > 0) {
    // If there are hidden items, show them and change button text to "Show Less"
    hiddenItems.slideDown();
    $(this).text("Show Less");
  } else {
    // Otherwise, hide items from the 5th onward and change button text to "Show More"
    $("#myList li").slice(4).slideUp();
    $(this).text("Show More");
  }
});

// showmore script end



});
