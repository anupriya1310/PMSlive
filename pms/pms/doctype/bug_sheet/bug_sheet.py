# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems  and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class BugSheet(Document):
	pass


@frappe.whitelist()
def post(user, share_name, doctype):
	frappe.db.sql("""INSERT INTO `tabDocShare` (user, share_doctype, share_name, read, write, share, everyone, notify_by_email) 
		VALUES (%s, %s, %s, %s, %s, %s, %s, %s)""",(user, doctype, share_name, 1, 1, 0, 0, 0))	
	return 0