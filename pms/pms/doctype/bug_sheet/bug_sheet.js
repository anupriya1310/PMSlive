// Copyright (c) 2017, Valiant Systems  and contributors
// For license information, please see license.txt

frappe.ui.form.on('Bug Sheet', {
	onload: function(frm) {
    console.log(frm)
	}
});

frappe.ui.form.on("Bug Sheet", "validate", function(frm){
var data = frappe.datetime.now_date();
if (frm.doc.status == "Fixed") {
cur_frm.set_value("fixed_on", data);
}
else if (frm.doc.status == "Verified") {
cur_frm.set_value("verified_on", data);	
}
});


frappe.ui.form.on("Bug Sheet", "assign", function(frm){
var arr = frm.doc.table_11;
if (frm.doc.__unsaved == 1){
  frappe.msgprint("Please Save before sharing the bug");
}
else{

      for(var i=0; i<arr.length; i++){


         frappe.call({
                method: "frappe.client.insert",
                args: {
                   doc:{"doctype":"DocShare",
                        "user" : arr[i].assign_to,
                        "share_doctype" : frm.doc.doctype,
                        "share_name" : frm.doc.name,
                        "read" : 1,
                        "write" : 1,
                        "share" : 1

                    }

                },
                callback: function(r) {
                    console.log(r);
                }
            });

    }
    frappe.msgprint("Sucessfully Shared!!!!!");
} 

});




