google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
	var data = google.visualization.arrayToDataTable([
		['Age', 'Male', 'Female'],
		['0',      0.006990,      57],
		['1',      0.000447,      57],
		['2',      0.000301,      57],
		['3',      0.000233,      57],
		['4',      0.000177,      57],
		['5',      0.000161,     57],
		['6',      0.000150,      57],
		['7',      0.000139,      57],
		['8',      0.000123,      57],
		['9',      0.000105,      57],
		['10',      0.000091,      57],
		['11',      0.000096,      57],
		['12',      0.000135,      57],
		['13',      0.000217,      57],
		['14',      0.000332,      57],
		['15',      0.000456,      57],
		['16',      0.000579,      57],
		['17',      0.000709,      57],
		['18',      0.000843,      57],
		['19',      0.000977,      57],
		['20',      0.001118,      57],
		['21',      0.001250,      57],
		['22',      0.001342,      57],
		['23',      0.001382,      57],
		['24',      0.001382,      57],
		['25',      0.001370,      57],
		['26',      0.001364,      57],
		['27',      0.001362,      57],
		['28',      0.001373,      57],
		['29',      0.001393,      57],
		['30',      0.001419,      57],
		['31',      0.001445,      57],
		['32',      0.001478,      57],
		['33',      0.001519,      57],
		['34',      0.001569,      57],
		['35',      0.001631,      57],
		['36',      0.001709,      57],
		['37',      0.001807,      57],
		['38',      0.001927,      57],
		['39',      0.002070,      57],
		['40',      0.002234,      57],
		['41',      0.002420,      57],
		['42',      0.002628,      57],
		['43',      0.002860,      57],
		['44',      0.003117,      57],
		['45',      0.003396,      57],
		['46',      0.003703,      57],
		['47',      0.004051,      57],
		['48',      0.004444,      57],
		['49',      0.004878,      57],
		['50',      0.005347,      57],
		['51',      0.005838,      57],
		['52',      0.006337,      57],
		['53',      0.006837,      57],
		['54',      0.007347,      57],
		['55',      0.007905,      57],
		['56',      0.008508,      57],
		['57',      0.009116,      57],
		['58',      0.009723,      57],
		['59',      0.010354,      57],
		['60',      0.011046,      57],
		['61',      0.011835,      57],
		['62',      0.012728,      57],
		['63',      0.013743,      57],
		['64',      0.014885,      57],
		['65',      0.016182,      57],
		['66',      0.017612,      57],
		['67',      0.019138,      57],
		['68',      0.020752,      57],
		['69',      0.022497,      57],
		['70',      0.024488,      57],
		['71',      0.026747,      57],
		['72',      0.029212,      57],
		['73',      0.031885,      57],
		['74',      0.034832,      57],
		['75',      0.038217,      57],
		['76',      0.042059,      57],
		['77',      0.046261,      57],
		['78',      0.050826,      57],
		['79',      0.055865,      57],
		['80',      0.061620,      57],
		['81',      0.068153,      57],
		['82',      0.075349,      57],
		['83',      0.083230,      57],
		['84',      0.091933,      57],
		['85',      0.101625,      57],
		['86',      0.112448,      57],
		['87',      0.124502,      57],
		['88',      0.137837,      57],
		['89',      0.152458,      57],
		['90',      0.168352,      57],
		['91',      0.185486,      57],
		['92',      0.203817,      57],
		['93',      0.223298,      57],
		['94',      0.243867,      57],
		['95',      0.264277,      57],
		['96',      0.284168,      57],
		['97',      0.303164,      57],
		['98',      0.320876,      57],
		['99',      0.336919,      57],
		['100',     0.353765,      57]
	]);

	var options = {
		title: 'Company Performance'
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}
