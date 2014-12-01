$(function() {
   $( "#sortable" ).sortable({ revert: true,
    
       update: function( event, ui ) {

           var basketItems = $(this).sortable('toArray').toString();
        $.jnotify(basketItems, 1);

           //alert(basketItems);
           //$.get('updatebasket.cfm', {basketItems:basketItems});

       }

   })

   $( "#sortable_dos" ).sortable({ revert: true,
    
       update: function( event, ui ) {

           var basketItems = $(this).sortable('toArray').toString();
        $.jnotify(basketItems, 1);

           //alert(basketItems);
           //$.get('updatebasket.cfm', {basketItems:basketItems});

       }

   })

   $( "#sortable_tres" ).sortable({ revert: true,
    
       update: function( event, ui ) {

           var basketItems = $(this).sortable('toArray').toString();
        $.jnotify(basketItems, 1);

           //alert(basketItems);
           //$.get('updatebasket.cfm', {basketItems:basketItems});

       }

   })


   $( ".draggable" ).draggable({
       connectToSortable: "#sortable",
       helper: "clone",
       revert: "invalid"
   });

   $( ".draggable.dos" ).draggable({
       connectToSortable: "#sortable_dos",
       helper: "clone",
       revert: "invalid"
   });

   $( ".draggable.tres" ).draggable({
       connectToSortable: "#sortable_tres",
       helper: "clone",
       revert: "invalid"
   });


   $( "ul, li, .draggable, .boxe, .sortable" ).disableSelection();
    
});