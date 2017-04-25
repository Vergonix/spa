var view = {
		display: function (data) {
            
            var table, header, td, tdt, row;
            var hrs = ["Code", "Name", "Rate"];
            var rws = [data[i].code]
            this.clear();
            
            table = document.createElement("table");
            table.setAttribute("border", 1);
            header = document.createElement("hr");
            
            for(var i=0; i<3; i++) {
                td = document.createElement("td");
                tdt = document.createTextNode(hrs[i]);
                td.appendChild(tdt);
                header.appendChild(td);
            }
            
            for(var i=0; i<data.length; i++) {
                row = document.createElement("tr");
                for(var j=0; j<3; j++) {
                    td = document.createElement("td");
                    tdt = document.createTextNode();
                    td.appendChild(tdt);
                }
            }
            
            table.appendChild(header);
            
            
            document.getElementById('dataview').appendChild(table);
            
			// create new data view to be displayed
            /*var elem, text, i;
			this.clear();
			for (i = 0; i < data.length; i++) {
				elem = document.createElement("h3");
				text = document.createTextNode(
						data[i].code + "/" + data[i].name + " " + data[i].rate
						);
				elem.appendChild(text);
				document.getElementById('dataview').appendChild(elem);
			}*/
		},
		clear: function () {
			// remove old data
			var dataView = document.getElementById('dataview');
			while (dataView.firstChild) {
				dataView.removeChild(dataView.firstChild);
			}
		},
		addCurrency: function () {
			var currency = {
					code: document.getElementById('code').value,
					rate: document.getElementById('rate').value,
					name: document.getElementById('name').value
			}
			controller.storeCurrency(currency);
		}
	};
