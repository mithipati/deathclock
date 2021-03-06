// Initial Chart Data
var lifeArray =	[
	['Age', 'Male', 'Female'],
	['0',      0.006990,      0.005728],
	['1',      0.000447,      0.000373],
	['2',      0.000301,      0.000241],
	['3',      0.000233,      0.000186],
	['4',      0.000177,      0.000150],
	['5',      0.000161,     0.000133],
	['6',      0.000150,      0.000121],
	['7',      0.000139,      0.000112],
	['8',      0.000123,      0.000104],
	['9',      0.000105,      0.000098],
	['10',      0.000091,      0.000094],
	['11',      0.000096,      0.000098],
	['12',      0.000135,      0.000114],
	['13',      0.000217,      0.000143],
	['14',      0.000332,      0.000183],
	['15',      0.000456,      0.000229],
	['16',      0.000579,      0.000274],
	['17',      0.000709,      0.000314],
	['18',      0.000843,      0.000347],
	['19',      0.000977,      0.000374],
	['20',      0.001118,      0.000402],
	['21',      0.001250,      0.000431],
	['22',      0.001342,      0.000458],
	['23',      0.001382,      0.000482],
	['24',      0.001382,      0.000504],
	['25',      0.001370,      0.000527],
	['26',      0.001364,      0.000551],
	['27',      0.001362,      0.000575],
	['28',      0.001373,      0.000602],
	['29',      0.001393,      0.000630],
	['30',      0.001419,      0.000662],
	['31',      0.001445,      0.000699],
	['32',      0.001478,      0.000739],
	['33',      0.001519,      0.000780],
	['34',      0.001569,      0.000827],
	['35',      0.001631,      0.000879],
	['36',      0.001709,      0.000943],
	['37',      0.001807,      0.001020],
	['38',      0.001927,      0.001114],
	['39',      0.002070,      0.001224],
	['40',      0.002234,      0.001345],
	['41',      0.002420,      0.001477],
	['42',      0.002628,      0.001624],
	['43',      0.002860,      0.001789],
	['44',      0.003117,      0.001968],
	['45',      0.003396,      0.002161],
	['46',      0.003703,      0.002364],
	['47',      0.004051,      0.002578],
	['48',      0.004444,      0.002800],
	['49',      0.004878,      0.003032],
	['50',      0.005347,      0.003289],
	['51',      0.005838,      0.003559],
	['52',      0.006337,      0.003819],
	['53',      0.006837,      0.004059],
	['54',      0.007347,      0.004296],
	['55',      0.007905,      0.004556],
	['56',      0.008508,      0.004862],
	['57',      0.009116,      0.005222],
	['58',      0.009723,      0.005646],
	['59',      0.010354,      0.006136],
	['60',      0.011046,      0.006696],
	['61',      0.011835,      0.007315],
	['62',      0.012728,      0.007976],
	['63',      0.013743,      0.008676],
	['64',      0.014885,      0.009435],
	['65',      0.016182,      0.010298],
	['66',      0.017612,      0.011281],
	['67',      0.019138,      0.012370],
	['68',      0.020752,      0.013572],
	['69',      0.022497,      0.014908],
	['70',      0.024488,      0.016440],
	['71',      0.026747,      0.018162],
	['72',      0.029212,      0.020019],
	['73',      0.031885,      0.022003],
	['74',      0.034832,      0.024173],
	['75',      0.038217,      0.026706],
	['76',      0.042059,      0.029603],
	['77',      0.046261,      0.032718],
	['78',      0.050826,      0.036034],
	['79',      0.055865,      0.039683],
	['80',      0.061620,      0.043899],
	['81',      0.068153,      0.048807],
	['82',      0.075349,      0.054374],
	['83',      0.083230,      0.060661],
	['84',      0.091933,      0.067751],
	['85',      0.101625,      0.075729],
	['86',      0.112448,      0.084673],
	['87',      0.124502,      0.094645],
	['88',      0.137837,      0.105694],
	['89',      0.152458,      0.117853],
	['90',      0.168352,      0.131146],
	['91',      0.185486,      0.145585],
	['92',      0.203817,      0.161175],
	['93',      0.223298,      0.177910],
	['94',      0.243867,      0.195774],
	['95',      0.264277,      0.213849],
	['96',      0.284168,      0.231865],
	['97',      0.303164,      0.249525],
	['98',      0.320876,      0.266514],
	['99',      0.336919,      0.282504],
	['100',     0.353765,      0.299455]
];

// Make Google DataTable from life Array
var data = google.visualization.arrayToDataTable(lifeArray);

// Chart Options
var options = {
	title: 'Death Chart',
	animation: {duration: 3000,
				easing: 'in'},
	vAxis: {viewWindow: {max: 1,
						 min: 0},
			direction: -1},
	backgroundColor: 'rgb(90,90,90)'
};

var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

// Draw Chart
chart.draw(data, options);

var userData = [];
var k = parseInt(results[0].death_age / 90 * 100);// death coefficient

var grabColumn = function ( index ) {
	limit = lifeArray.length
	for ( x = 1; x < limit; x++ ) {
		userData.push( lifeArray[x][index] );
	};
};

var updateUserData = function () {
	var size = userData.length;
	for ( var i = results[0].current_age; i < size; i++ ) {
		userData[i] = k * userData[i];
	}
};

var deathYear = function () {
	var age = results[0].death_age;
	var size = userData.length
	userData[age] = 1;
	for ( var i = age + 1; i < size -1; i++ ) {
		userData[i] = 2;
	};
};

// Find out the last users sex
if ( results[0].gender === "male" ) {
	grabColumn( 1 );
} else {
	grabColumn( 2 );
};
// Generate new userData with death coefficient
updateUserData();
deathYear();

// Add last user as new column header
data.addColumn('number', results[0].name);

// Populate dataTable
for ( i = 0; i <= 100; i++ ) {
	data.setValue(i, 3, userData[i]);
};

// Redraw
chart.draw(data, options);

// Grab data from JSON
var pieCharts = function() {

	//
	var seedArray = function ( array, object, control ) {
		for ( var i = 0; i < results.length; i++) {
			if ( results[i][object] === control ) {
				array[1][1]++;
			} else {
				array[2][1]++;
			};
		};
	};

	var gender = [
		[ 'Gender', 'People' ],
		[ 'Male',    0],
		[ 'Female',  0]
	];

	var handed = [
		[ 'Hand', 'People' ],
		[ 'Left',  0 ],
		[ 'Right', 0 ]
	];

	var play = [
		[ 'Activity', 'People' ],
		[ 'Sports',   0],
		[ 'Video Games', 0]
	];

	var alcohol = [
		[ 'Alcohol', 'People' ],
		[ 'Beer', 0 ],
		[ 'Liquor', 0 ]
	];

	var party = [
		[ 'Party', 'People' ],
		[ 'Republican', 0 ],
		[ 'Democrat', 0]
	];

	var street = [
		[ 'Street', 'People' ],
		[ 'Dirty', 0 ],
		[ 'Rainey', 0 ]
	];

	var fanboy = [
		[ 'Fanboy/ Fangirl', 'People' ],
		[ 'Sega', 0 ],
		[ 'Nintendo', 0 ]
	];

	var language = [
		[ 'Language', 'People' ],
		[ 'Ruby/JS', 0 ],
		[ 'CSS', 0 ]
	];

	seedArray( gender,   'gender', 'male');
	seedArray( handed,  'handed', 'left');
	seedArray( play,     'sport_vid', 'sport');
	seedArray( alcohol,   'beer_liq', 'beer');
	seedArray( party,    'rep_dem', 'rep');
	seedArray( street,   'dirty_rainey', 'dirty');
	seedArray( fanboy,   'sega_nin', 'sega');
	seedArray( language,   'ruby_js', 'ruby');

	// Google pie graphs

	var options = {
		backgroundColor: 'rgb(90,90,90)'
	};

	var genderPie   = new google.visualization.PieChart(document.getElementById('genderPie'));
	var handedPie   = new google.visualization.PieChart(document.getElementById('handedPie'));
	var playPie     = new google.visualization.PieChart(document.getElementById('playPie'));
	var alcoholPie  = new google.visualization.PieChart(document.getElementById('alcoholPie'));
	var partyPie    = new google.visualization.PieChart(document.getElementById('partyPie'));
	var streetPie   = new google.visualization.PieChart(document.getElementById('streetPie'));
	var fanboyPie   = new google.visualization.PieChart(document.getElementById('fanboyPie'));
	var languagePie = new google.visualization.PieChart(document.getElementById('languagePie'));

	genderPie.draw(google.visualization.arrayToDataTable(gender), options);
	handedPie.draw(google.visualization.arrayToDataTable(handed), options);
	playPie.draw(google.visualization.arrayToDataTable(play), options);
	alcoholPie.draw(google.visualization.arrayToDataTable(alcohol), options);
	partyPie.draw(google.visualization.arrayToDataTable(party), options);
	streetPie.draw(google.visualization.arrayToDataTable(street), options);
	fanboyPie.draw(google.visualization.arrayToDataTable(fanboy), options);
	languagePie.draw(google.visualization.arrayToDataTable(language), options);

};


// --- IMMORTAL GAUGE CHART BEGIN
// Create and populate the data table.
// var gaugeChart = function () {

// 	var immortalCount = 0;
// 	if (results[0].sega_nin === 'nin') {
// 		immortalCount += 20;
// 	}
// 	if (results[0].rep_dem === 'dem') {
// 		immortalCount += 20;
// 	}
// 	if (results[0].outlook === 'cheerful') {
// 		immortalCount += 20;
// 	}
// 	if (results[0].diet === 'meat') {
// 		immortalCount += 20;
// 	}
// 	if (results[0].location === 'MakerSquare') {
// 		immortalCount += 20;
// 	}

//   if (results[0].death_age > 999) {
//   	immortalCount = 100;
//   }

// 	var immortalData = google.visualization.arrayToDataTable([
// 		['Label', 'Value'],
// 		['Immortality', immortalCount]
// 	]);

// 	var immortalOptions = {
// 		width: 400, height: 400,
// 		redFrom: 75, redTo: 80,
// 		yellowFrom:80, yellowTo: 90,
// 		greenFrom: 90, greenTo: 100,
// 		minorTicks: 5
// 	};

// 	// Create and draw the visualization.
// 	var immortalChart = new google.visualization.Gauge(document.getElementById('chart_gauge_immortal'));
// 	immortalChart.draw(immortalData, immortalOptions);
// };
// gaugeChart();
pieCharts();
