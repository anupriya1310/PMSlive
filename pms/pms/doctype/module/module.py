# -*- coding: utf-8 -*-
# Copyright (c) 2017, Valiant Systems  and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Module(Document):
	pass


@frappe.whitelist()
def delete(project, module):
	frappe.db.sql("""DELETE FROM `tabModule Screen Child` where parent=%s""",(module))
	return 0

@frappe.whitelist()
def get_screens(project, module):
	data = frappe.db.sql("""SELECT screen_name FROM `tabScreen` WHERE project=%s AND module=%s""",(project, module))
	return data


