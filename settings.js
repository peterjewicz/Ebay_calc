function change_tax()
{
	tax_rate = parseFloat($('#tax_rate').val());
	localStorage.tax = tax_rate.toFixed(2)
	alert("new tax rate is:" + " "+ localStorage.tax + "%")
}

function get_tax()
{
	alert("Tax rate is:" + " "+ localStorage.tax + "%")
}