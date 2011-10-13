/*
 * Title: Letters plugin
 * Author: Scott Gledhill
 * URL: gleddy.com
 * Description: Alphabet madness...
 *
 * Usage: $('body').letters();
 *
 * 
 *
 */
 
(function($) {

    $.fn.letters = function(options) {

        var options = $.extend({
            // opacity : [],
            // size : [],
            // xPos : [],
            // yPos : [],
            // num : [],
            
            portWidth : $(window).width(),
            portHeight : $(window).height(),
            alphabet : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        }, options);
        
        
        var lettersCSS = {
            // css here
            'color' : 'red'
        }
        
        function getRandomArbitary (min, max) {
            return Math.random() * (max - min) + min;
        }
        
        return this.each(function() {

            var $this = $(this); // body
            var container = '<div class="letters">';
            $this.append(container);
            
            // style each letter
            $(options.alphabet).each(function(index, value) {
                var $span = '<span>' + value + '</span>';
                $('div.letters').append($span);
            });
            // style each letter
            $('div.letters span').each(function(index) {
                $(this)
                    .css('opacity', getRandomArbitary(0,.2))
                    .css('font-size', getRandomArbitary(10, 1000) + 'px')
                    .css('position', 'absolute')
                    .css('top', getRandomArbitary(options.portHeight*-1, options.portHeight) + 'px') 
                    .css('left', getRandomArbitary(options.portWidth*-1, options.portWidth) + 'px')
            });
            
            // iterate through alphabet
            var fadeIndex = $('div.letters span');
            var anIndex = 0;
            setInterval(function() {
                $(fadeIndex).eq(anIndex).fadeIn(2000);
                anIndex++;
            }, 500);
            
        }); 
        
    };  
    
})(jQuery);










