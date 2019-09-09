$(document).ready(function(){

	$("#archivo").change(function(even){
		console.log("-------------1-------> "  + even.target.file[0]);
		var selectedFile = even.target.file[0];
		console.log("--------------------> "  + JSON.stringify(selectedFile));
		var reader = new FileReader();

		reader.onload= function(event){
			var data = event.target.result;
			var workbook = XLSX.reader(data,{type:'binary'})
		
		workbook.SheetNames.forEach(function(sheetName)  {
		
			var XL_row_objeto = XLSX.util.sheet_to_row_object_array(workbook.Sheet[sheetName]);
			var json_object = JSON.stringify(XL_row_objeto);
			document.getElementById("jsonObject").innerHTML=json_object;

		});
		
		};

		reader.onerror=function(event){
			console.errorE("Erroe");
		};
		reader.readAsBinaryString(selectedFile);

	});

});
