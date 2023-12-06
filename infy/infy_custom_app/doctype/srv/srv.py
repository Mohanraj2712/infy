# Copyright (c) 2023, infy and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SRV(Document):
	def validate(self):
		frappe.msgprint(("Hello Customer '{0}' ").format(self.customer))

		# if frappe.db.exists('CS SCRIPT','8'):
		# 	frappe.msgprint(("Record exists"))
		# else
		# 	frappe.msgprint(("record does not exist"))

		self.get_document()
	def get_document(self):
		doc = frappe.get_doc('CS SCRIPT',self.refernce_doc)
		frappe.msgprint(("driver name is {0} and his age is {1}").format(doc.drivername, doc.age))

		self.new_document()
	def new_document(self):
		doc = frappe.new_doc('CS SCRIPT')
		doc.drivername ='RAJAN'
		doc.country ='INDIA'
		doc.age = 42
		doc.append("driver_family",{"name1":"ramya","relation":"sister","country":"uae"})
		doc.insert()

		# frappe.delete_doc('CS SCRIPT',9)

		self.db_set_document()
	def db_set_document(self):
		doc = frappe.get_doc('CS SCRIPT',8)
		doc.db_set('age',9)



	# def before_save(self):
	# 	frappe.throw("this is my sample message BEFORE SAVE ERR")

	# def before_insert(self):
	# 	frappe.throw("this is my message before insert error")

	# def before_submit(self):
	#  	frappe.msgprint("this is my message before submit error")

	# def on_submit(self):
	# 	frappe.msgprint("this is my message after submit error")

	# def before_cancel(self):
	# 	frappe.throw("this is my message before cancel error")

	# def on_cancel(self):
	# 	frappe.msgprint("this is my message after cancel error")

	# def on_update(self):
	# 	frappe.msgprint("this is my message during update")