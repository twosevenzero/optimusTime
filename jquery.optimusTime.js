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
            this.$elem   = $(elem);
            this.alertText    = Date.parse(this.$elem.text());
            this.nowTime      = new Date();
            this.alertTime    = new Date(this.alertText);
            this.minutes      = Math.floor((this.nowTime - this.alertTime)/1000/60);

            this.convertTime();
        },
        convertTime: function(){

            if (this.minutes === 1) {
                this.newAlertText = this.minutes + ' minute ago.';
            }

            if (this.minutes < 60) {
                this.newAlertText = this.minutes + ' minutes ago.';
            }
            
            if (this.minutes === 60) {
                    this.newAlertText = Math.floor(this.minutes/60) + ' hour ago.';
            }

            if (this.minutes > 60 && this.minutes < 1440) {
                    this.newAlertText = Math.floor(this.minutes/60) + ' hours ago.';
            }

            if (this.minutes >= 1440) {
                    this.newAlertText = Math.floor(this.minutes/60/24) + ' day ago.';
            }

            if (this.minutes > 2879) {
                    this.newAlertText = Math.floor(this.minutes/60/24) + ' days ago.';
            }

            return this.$elem.text(this.newAlertText);
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