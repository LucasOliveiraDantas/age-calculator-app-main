


function calcAge(){

	 let Iyear = document.getElementById('input-year').value

	 let year = 2023

	 let calcYear = (year - parseInt(Iyear))

	 document.getElementById('result-year').innerHTML = calcYear


	 let Imonth = document.getElementById('input-month').value
	 var dateMonthNow = new Date()
	 var dateMonth = dateMonthNow.getMonth()

	 var monthAge = parseInt(Imonth) - dateMonth

	 document.getElementById('result-month').innerHTML = monthAge * -1

	 let Iday = document.getElementById	('input-day').value

	 var dateDayNow = new Date()

	 var dateDay = dateDayNow.getDay()


	 document.getElementById('result-day').innerHTML = ((parseInt(Iday) - dateDay)- 1)
	 
}		