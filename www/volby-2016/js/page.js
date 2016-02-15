//this will depend on way of accessing the carousel (generated by php)
//direct access to 2nd page ~ number 1 or direct access to 1st page ~ number 0
$('document').ready(function() {
 hash = window.location.hash
 if (hash != '') {
   $("#carousel").carousel(parseInt(hash.substr(2)));  // we expect names like #p1
   if (parseInt(hash.substr(2)) === 0) $('.carousel-control.left').hide();
 } else {
   $('.carousel-control.left').hide();
 }
});

// Hiding the first and last arrow
//http://stackoverflow.com/questions/9860436/twitter-bootstrap-carousel-access-current-index  
$('document').ready(function() {
    $('#carousel').on('slide.bs.carousel',function(e){
      var slideFrom = $(this).find('.item.active').index();
      var slideTo = $(e.relatedTarget).index();
      
      if (slideTo === 0) $('#carousel-control-left').hide();
      else $('#carousel-control-left').show();
      
      //to the last one (weight selection)
      if (slideTo == ($('.item').length - 1)) {
        $('#carousel-control-right').hide();
        $('#carousel-control-last').show();
        $('.carousel-indicators').hide();
        
        hideAndZebra();
      }
      else {
        $('#carousel-control-right').show();
        $('#carousel-control-last').hide();
        $('.carousel-indicators').show();
      }
      
      window.location.hash = '#p' + slideTo;
    });
});


//weight selection: hide unused questions and make zebra
function hideAndZebra() {
    hideob = {};
    shownob = {};
    showni = 0;
    $(":radio").each(function(i) {
      //alert($(this).attr('name'));
      name = $(this).attr('name');
      if ((typeof ( $("input[name="+name+"]:checked").val()) === 'undefined')
        ||
         ( $("input[name="+name+"]:checked").val() == '0'))
        {
          name = $(this).attr('name');
          hideob[name] = true;
       } else {
         shownob[name] = true;
       }  
    });
    
    $.each(hideob, function (index, value) {
      id = index.substr(1); //we expect something like "q13"
      $("#weightsel-row-" + id).hide();
    });
    i = 0;
    $.each(shownob, function (index, value) {
      id = index.substr(1); //we expect something like "q13"
      $("#weightsel-row-" + id).show();
      //zebra
      if (parseInt(i) % 2) cl = 'primary';
      else cl = 'info';
      $("#weightsel-row-" + id + ">td>label").addClass('btn-'+cl);
      i++;
      showni++;
    });
    //right height
    toph = $("#top").height();
    //does not work, because it is not visible yet:
    //rowh = $(".weightsel-td:visible").outerHeight();
    //so hardcoding ... )-:
    rowh = 46;
    rown = showni;
    seth = Math.max(toph,500 + rowh * rown);
    $("#item-last").height(seth);
}

//on load - check all radios and weights and make the active
//(hide&zebra also on load (when accessing directly or returning))
$('document').ready(function() {
  //check all radios
  for (key in user['vote']) {
    val = user['vote'][key];
    $('input[name=q'+key+'][value='+val+']','#calc').prop('checked',true);
  }
  //check all selected weights
  for (key in user['weight']) {
    if (user['weight'][key]) {
      $('#w'+key,+'#calc').prop('checked',true);
    }
  }
  // hide&zebra; also on load (when accessing directly or returning
  hideAndZebra();
  // activate the buttons (selection)
  $('.vote-button>input').each(function (i) {
    id = $(this).attr('name');
    val = $('input[name='+id+']:checked','#calc').val();
    if ((typeof(val) != "undefined") && ($(this).val() == val))
      $(this).parent().addClass('active');
  });
});

// submit calc also by clicking on the last arrow
document.getElementById("carousel-control-last").onclick = function() {
    document.getElementById("calc").submit();
}
