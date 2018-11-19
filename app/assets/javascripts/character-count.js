$(document).ready(function() {
    var text_max = 99; // This the maximum character count
    var text_spread = 20; // This calculates when to change the text colour to red
    
    $('#character_count').html('Character count: 0 /' + text_max);

    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;

        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });
});