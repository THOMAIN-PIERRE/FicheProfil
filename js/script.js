$('#more').on('click', function(){
    $('progress').val( $('progress').val() + 5);
    return false;
  });
  $('#less').on('click', function(){
    $('progress').val( $('progress').val() - 5);
    return false;
  });