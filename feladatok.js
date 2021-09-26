$(function() {
	//Niki
	const osztalyTomb = [];
	const allatokTomb = [];
	let valasztott;
	console.log($('option:selected').index());
	if ($('option:selected').index() == 0) {
		valasztott = 'osztaly1.json';
	} else if ($('option:selected').index() == 1) {
		valasztott = 'osztaly2.json';
	} else if ($('option:selected').index() == 2) {
		valasztott = 'osztaly3.json';
	}

	$.ajax({
		url: valasztott,
		success: function(result) {
			console.log(result);
			osztalyTomb = result.osztalyTomb;
			console.log(osztalyTomb);
		}
	});

	$.ajax({
		url: "adatok.json",
		success: function(result) {
			console.log(result);
			allatokTomb = result.allatokTomb;
			console.log(allatokTomb);
		}
	});

	//Petra
	//Bíborka
});
