// Copyright (c) 2023, infy and contributors
// For license information, please see license.txt

frappe.ui.form.on("CS SCRIPT", {
	// refresh: function(frm) {
    // frappe.msgprint("MY FIRST MESSAGE")
    // frappe.throw("this is a error")
    // }
    // onload: function(frm) {
    //    frappe.throw("during on load")
    // }
    // validate: function(frm){
    //     frappe.throw("during on validations")
    // }

    // before_save: function(frm){
    //     frappe.throw("before save error")
    // }

    // after_save: function(frm){
    //     frappe.throw("after save error")
    // }

    // drivername: function(frm){
    //     frappe.throw("this is a message from the field")
    // }

    // driver_family_on_form_rendered: function(frm){
    //     frappe.throw("this error during Child table load")
    // }

    before_submit: function(frm){
        frappe.throw("this message before submit event")
    }
    ,
    refresh: function(frm){
        frm.set_intro('This is a Customized screen using script')
        // frm.add_custom_button('Action Button',()=>{
        //     frappe.msgprint("you clicked button")
        // })
        frm.add_custom_button('Driver history',()=>{
            frappe.msgprint("you clicked driver history")
        },'Action Button')   
        frm.add_custom_button('Driver Actions',()=>{
            frappe.msgprint("you clicked actions of driver")
        },'Action Button')    
        if(frm.is_new()){
            frm.set_intro('This is a custom message only for new')
        }
    }
 	,
    validate: function(frm){
    frm.set_value('age',32)
    //frm.set_value('dob',Date.now())
     }
     ,
     drivername:function(frm){
        frm.set_df_property('dob','reqd',1)
        //frm.set_df_property('age','read_only',1)
     },
 });

 frappe.ui.form.on("Driver Family", {
    relation: function(frm){
        frappe.msgprint("this message comes from child table")
    }
    ,
    before_save:function(frm){
        frappe.msgprint("this message comes from child table save event")
    }
 });
