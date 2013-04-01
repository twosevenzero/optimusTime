/*
 * optimusTime
 * https://github.com/twosevenzero/optimusTime
 *
 * Copyright (c) 2013 Dave West
 * Licensed under the MIT license.
 */

(function($) {
    // Define the plugin.
    var optimusTime = {
        init: function(elem){
            this.$elem    = $(elem);
            this.elemText = Date.parse(this.$elem.text());
            this.nowDate  = new Date();
            this.elemDate = new Date(this.elemText);
            this.minutes  = Math.floor((this.nowDate - this.elemDate)/1000/60);

            this.convertTime();
        },
        convertTime: function(){

            if (this.minutes === 0) {
                this.newElemText = 'just now.';
            }

            if (this.minutes === 1) {
                this.newElemText = this.minutes + ' minute ago.';
            }

            if (this.minutes < 60 && this.minutes > 1) {
                this.newElemText = this.minutes + ' minutes ago.';
            }

            if (this.minutes === 60) {
                    this.newElemText = Math.floor(this.minutes/60) + ' hour ago.';
            }

            if (this.minutes > 60 && this.minutes < 1440) {
                    this.newElemText = Math.floor(this.minutes/60) + ' hours ago.';
            }

            if (this.minutes >= 1440) {
                    this.newElemText = Math.floor(this.minutes/60/24) + ' day ago.';
            }

            if (this.minutes > 2879) {
                    this.newElemText = Math.floor(this.minutes/60/24) + ' days ago.';
            }

            return this.$elem.text(this.newElemText);
        }
    };

    // Create the plugin.
    $.fn.optimusTime = function() {
        var plugin = Object.create(optimusTime);
        return this.each(function() {
            plugin.init(this);
        });
    };

}(jQuery));
