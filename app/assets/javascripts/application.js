// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

// Waits for turbolinks and DOM to load before calling function
$(document).on('turbolinks:load', function() {
  // enables dropdown
  $('.ui.dropdown').dropdown();
  // allows flash message close icon to close message
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
})

// Renders page without an HTTP request
// $(docuemnt).ready(function(){
//   $('#msg-lookup-form').on('ajax:complete', function(event, data, status){
//     $('#results').html(data.responseText)
//   })
// })
