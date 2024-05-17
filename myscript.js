function validate()
	{

		      //validation for first name 
           if(document.f1.fname.value=="")
           {
           	 alert("Please enter the  first name ");
           	 document.f1.fname.focus();
           	 return false;
           }

           var data=/^[A-Za-z]+$/;   
           
           if(!document.f1.fname.value.match(data))
           {
           	   alert("Please enter valid first name ")
           	   document.f1.fname.focus();
           	   return false;
           }

           if(document.f1.lname.value=="")
           {
           	 alert("Please enter the  last name ");
           	 document.f1.lname.focus();
           	 return false;
           }

            var data=/^[A-Za-z]+$/;   
           
           if(!document.f1.lname.value.match(data))
           {
           	   alert("Please enter valid last name ")
           	   document.f1.lname.focus();
           	   return false;
           }


             // validation for phoneno
           if(document.f1.phoneno.value=="")
           {
           	 alert("Please enter the  phoneno");
           	 document.f1.phoneno.focus();
           	 return false;
           }
                     
           if(document.f1.phoneno.value.length!=10)
           {
           	alert("Please enter the valid phone No");
           	document.f1.phoneno.focus();
           	 return false;
           }

           if(document.f1.msg.value=="")
           {
           	alert("Please enter the message ");
           	document.f1.msg.focus();
           	 return false;
           }






           



	} // end of function