
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Test',
    backgroundColor:'#fff'
});

var data = [];
for (var i=0; i<100000; i++) {
	
	var bgcolor = "red";
	if (i % 2 == 0)
	   bgcolor = "blue";
	
	var row = Titanium.UI.createTableViewRow();
	var label = Ti.UI.createLabel({
		text: 'Row '+i,
		touchEnabled:false
	});
	row.height = 60;
	row.add(label);
	
	data.push(row);
}

var tbl = Titanium.UI.createTableView({data: data});

win1.add(tbl);
win1.open();
