$(document).ready(function(){$(".Enquiry_form").validate({rules:{firstname:{required:!0,lettersonly:!0},lastname:{required:!0,lettersonly:!0},email:{required:!0,validEmail:!0},phone_number:{required:!0,validPhoneNumber:!0},"text-area":{required:!0}},messages:{firstname:{required:"Please enter your first name"},lastname:{required:"Please enter your last name"},email:{required:"Please enter your email",validEmail:"Please enter a valid email address"},phone_number:{required:"Please enter your phone number",validPhoneNumber:"Please enter valid phone number"},"text-area":{required:"Please enter your message"}},errorPlacement:function(e,t){e.insertAfter(t)},submitHandler:function(e){e.submit()}}),jQuery.validator.addMethod("validEmail",function(e,t){return this.optional(t)||/^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/.test(e)},"Please enter a valid email address"),jQuery.validator.addMethod("lettersonly",function(e,t){return this.optional(t)||/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(e)},"Please enter only letters with single spaces between words if required"),jQuery.validator.addMethod("validPhoneNumber",function(e,t){return this.optional(t)||/^[0-9]{7,17}$/.test(e)},"Please enter a valid phone number (between 7 and 17 digits)"),$("#myList li").slice(0,4).show(),$("#myList li").slice(4).hide(),$("#toggleButton").click(function(){let e=$("#myList li:hidden");e.length>0?(e.slideDown(),$(this).text("Show Less")):($("#myList li").slice(4).slideUp(),$(this).text("Show More"))})});
