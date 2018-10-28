odoo.define('popup_notifications.popup_notifications', function (require) {
    var WebClient = require('web.WebClient');
    var core = require('web.core');
    var QWeb = core.qweb;
    WebClient.include({
        check_popup_notifications: function () {
            console.log('Called')
            var self = this;
            this.rpc('/popup_notifications/notify')
                .done(
                    function (notifications) {
                        _.each(notifications, function (notif) {
                            setTimeout(function () {
                                if ($('.ui-notify-message p#p_id').filter(function () {
                                    return $(this).html() == notif.id;
                                }).length) {
                                    return;
                                } // prevent displaying same notifications
                                notif.title = QWeb.render('popup_title', {'title': notif.title, 'id': notif.id});
                                notif.message += QWeb.render('popup_footer');
                                self.do_notify(notif.title, notif.message, true);
                                self.$el.find(".link2showed").on('click', function () {
                                    console.log(self.$el)
                                    self.$el.find('.o_notification_manager').hide();
                                    self.rpc("/popup_notifications/notify_ack", {'notif_id': notif.id});
                                });
                            }, 1000);
                        });
                    }
                )
                .fail(function (err, ev) {
                    if (err.code === -32098) {
                        // Prevent the CrashManager to display an error
                        // in case of an xhr error not due to a server error
                        ev.preventDefault();
                    }
                });
        },

        start: function () {
            var self = this;
            self._super();
            $(document).ready(function () {
                self.check_popup_notifications();
                setInterval(function () {
                    // console.log('Working!');
                    self.check_popup_notifications();
                }, 300 * 1000);
            });
        },

    })
});
