# -*- coding: utf-8 -*-
from odoo import models, fields, api, _

class popup_notification(models.Model):
    _name = "popup.notification"

    title = fields.Char()
    message = fields.Text()
    status = fields.Selection([('shown', 'shown'), ('draft', 'draft')], defaul='draft')
    partner_ids = fields.Many2many('res.users')

    @api.multi
    def get_notifications(self):
        result = []
        for obj in self:
            result.append({
                'title': obj.title,
                'message': obj.message,
                'status': obj.status,
                'id': obj.id,
            })
        return result