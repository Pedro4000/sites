// $('#para1').on('click', hello);
//
// $('.para').on('click', sayalert);
//
//
// var para1 = document.getElementById('para1');
//
// para1.addEventListener('click', hello);
//
// var para = document.querySelector('.para');
//
// for (var i = 0; i < para.length; i++) {
// 	para[i].addEventListener('click', alert);
// }
//
//
//   function hello() {
//   	console.log('hello');
//   }
//
//   function sayalert() {
//   	alert($(this).text());  // equivalent TextContent
//   }
//
//
//   $(document).on('keyup', function() {
//
//       $('#para3').css('color', 'red');
//       $('#para4').css('border', '1px solid red');
//       $('#para2').toggleClass('hide');
//       //$('#para2').addClass('hide');
//       //$('#para2').removeClass('hide');
//
//   });
//
//
//   $('#but').on('click', alertButton);
//
//   function alertButton(event) {
//
//     event.preventDefault();
//   	alert($('#inp1').val());
//
//   }



// var nombre= document.class-form.lastName.value;
// document.write('nombre');
var Adress = "Adress Book"
var datatab = functionload();
displayList();

function functionhide(event) {

    event.preventDefault();
    $('#contact-form').toggleClass('hide')
}


function functionsave(event) {

    event.preventDefault();
    // $('#contact-form').addClass('hide')
    var lastName=document.formulaire.lastName.value;
    var firstName=document.formulaire.firstName.value;
    var phone=document.formulaire.phone.value;
    datatab.push({'nomdefamille':lastName,'prenom':firstName,'telephone':phone});
    var datatabstring = JSON.stringify(datatab);
    console.log(datatabstring);
    window.localStorage.setItem(Adress,datatabstring);
}


function functionload(event) {

  var y=window.localStorage.getItem(Adress)

  if (y == null){
    var y =[]
    return y;
  }
  else{
    var x = JSON.parse(y);
    return x;
  }

}

function displayList() {
u
  var list= $('<ul>');

  for (var i = 0; i < datatab.length; i++) {

    list.append("<li class=contact-title data-index="+i+ ">"+datatab[i]['nomdefamille']+"  "+datatab[i]['prenom']+" "+"</li>");
  }
  $('#address-book').html(list);
}


function displayContactDetails() {
  var index = $(this).data('index');
  $('#contact-details').removeClass('hide')
  $('#contact-details h3').text(datatab[index]['nomdefamille']+' '+datatab[index].prenom);
  $('#oeoeoe').removeClass('oeoeoe');
  $(this).toggleClass('oeoeoe');
}


function editcontact (){
  $('#contact-form').removeClass('hide');
  var index=$('#oeoeoe');
  console.log(index);
  // document.formulaire.lastName.value=datatab[index][2];

}

function deleteOneContact() {

	var index = $(this).data('index');

    contacts.splice(index, 1);

    saveDataToDomStorage('addressBook', contacts);

	displayContact();
}



/*

displaycontact();
function displaycontact(){

    $('.section-contact').append(datatab[2]['nom de famille']);

}
*/

$('#add-contact').on('click',functionhide);

$('#save-contact').on('click',functionsave);

$('#contact-details a').on('click',editcontact);

// $('.contact-title').on('click',displaycontact);

$(document).on('click', '#address-book li', displayContactDetails);
