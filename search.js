// activation dropdown

$('.ui.multiple.selection.dropdown').dropdown('clear');


// pour reset les informations des dropdown

$('#reset').on('click', function() {
    $('.ui.multiple.selection.dropdown').dropdown('clear');
      console.log('clear check');
  });