# -*- coding: utf-8 -*-
{
    "name": "Popup notifications",
    "version": "9.10.11.12",
    "category": "Extra Tools",
    "author": "Mostafa Mohamed",
    "website": "m.dev.odoo@gmail.com",
    "license": "AGPL-3",
    "application": True,
    "installable": True,
    "auto_install": False,
    "depends": [
        "base"
    ],
    "data": [
        "security/ir.model.access.csv",
        "views/popup_notifications.xml"
    ],
    "qweb": [
        "static/xml/base_popup.xml"
    ],
    "external_dependencies": {},
    "summary": "Use popup notification to develop your modules",
    "description": """
This is the tool of generating popups similar to calendar events alarims in your own modules
Popup is generated Odoo for users
Popup is invoked each 3 minutes by standard Odoo javascript cron jobs
You may close the popup just by clicking "Ok"
Notifications do not depend on a definite object. You may create in any place disregarding Odoo models
""",
    "images": [
        "static/description/main.png"
    ],
    "price": "0.0",
}
