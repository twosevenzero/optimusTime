/*
 * optimusTime
 * version: 0.1.7
 * https://github.com/twosevenzero/optimusTime
 *
 * Copyright (c) 2013 Dave West
 * Licensed under the MIT license.
 */

(function($) {
    // Define the plugin.
    var optimusTime = {
        init: function(elem, config){
            this.$elem    = $(elem);
            this.config   = $.extend({}, $.fn.optimusTime.defaults, config);
            this.elemText = Date.parse(this.$elem.text());
            this.nowDate  = new Date();
            this.elemDate = new Date(this.elemText);
            this.minutes  = Math.floor((this.nowDate - this.elemDate)/1000/60);

            this.convertTime();
        },
        convertTime: function(){
            if (this.config.detail === 'fine') {

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

            } else {

                if (this.minutes < 1440) {
                    this.newElemText = 'today.';
                }

            }

            if (this.minutes >= 1440 && this.minutes < 2880) {
                    this.newElemText = 'yesterday.';
            }

            if (this.minutes >= 2880 && this.minutes < 10080) {
                    this.newElemText = Math.floor(this.minutes/60/24) + ' days ago.';
            }

            if (this.minutes >= 10080 && this.minutes < 20160) {
                    this.newElemText = 'a week ago.';
            }

            if (this.minutes >= 20160 && this.minutes < 40320) {
                    this.newElemText =  Math.floor(this.minutes/60/24/7) + ' weeks ago.';
            }

            if (this.minutes >= 40320 && this.minutes < 80640) {
                    this.newElemText = 'a month ago.';
            }

            if (this.minutes >= 80640) {
                    this.newElemText = Math.floor(this.minutes/60/24/7/4) + ' months ago.';
            }

            return this.$elem.text(this.newElemText);
        }
    };

    // Create the plugin.
    $.fn.optimusTime = function(config) {
        var plugin = new Object(optimusTime);
        return this.each(function() {
            plugin.init(this, config);
        });
    };

    $.fn.optimusTime.defaults = {
        detail: 'fine'
    };

}(jQuery));
