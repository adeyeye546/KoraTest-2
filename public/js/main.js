var APP = (function() {

    var _init = function() {
        _bindEvents();
    };

    var _bindEvents = function() {
     $('#form_shorten').on('submit', function(e) {
            e.preventDefault();
            var url = $.trim($('.text-url').val());
            console.log(url);
            $.ajax({
                url: '/shorten',
                type: 'POST',
                data: {
                    url: url
                },
                success: function(data) {
                    console.log(data);
                    var _buildUrl = window.location.origin + '/' + data.hash;
                    $('.shortened-url').html('<a id="url-To-Copy" href="' + _buildUrl + '" target="_blank">' + _buildUrl + '</a>');
                    $('#shorten_area').removeClass('hide').show();
                }
            })
        });
    };

    return {
        init: _init
    };

})();

$(function() {
    APP.init();
});
  var copyText;
var copy = function(){
    
    /* Get the span */
 copyText = $('#url-To-Copy')[0];

var fullLink = document.createElement('input');
    document.body.appendChild(fullLink);
    fullLink.value = copyText.textContent;
    
     /* highlight the span */
    fullLink.select();
    
      /* Copy the text inside the span */
     document.execCommand("copy");
  
    fullLink.remove();
 
  /* Alert the copied text */
  $('#copy_message').text('Link copied!!')
}
