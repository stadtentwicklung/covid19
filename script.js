datenstand();
inzidenzen();
infizierte();

function datenstand() {

	// LAST UPDATE
	$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN+%3D+%27Cottbus%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=', function(data) {
		var updateAPI = data.features;
		var updateData = updateAPI[0].attributes.last_update;
		var updateDate = updateData.slice(0,10);
		var updateTime = updateData.slice(12,21);
		// TEST
		console.log(updateDate);
		console.log(updateTime);
		// IMPLEMENT
		$("#cbUpdate").append(updateDate);
	});
};

function inzidenzen () {
	
	// HISTORY-INZIDENZ (Wie war Inzidenz am Tag vor der aktuellsten Inzidenz)
	// Summe "AnzFallVortag" + Summe "AnzFallNeu"
	$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_history_v/FeatureServer/0/query?where=AdmUnitId%3D12052&objectIds=&time=&resultType=none&outFields=Datum%2CAnzFallVortag%2C+AnzFallNeu&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Datum&groupByFieldsForStatistics=Datum&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=standard&f=pjson&token=', function(data) {
		var historySevenAPI = data.features;
		var totalLastSeven = 0;
		for (i = historySevenAPI.length - 8; i < historySevenAPI.length - 1; i++) {
			totalLastSeven = totalLastSeven + historySevenAPI[i].attributes.AnzFallVortag + historySevenAPI[i].attributes.AnzFallNeu;
		};
		// TEST
		console.log("Fallzahlen der gestrigen Inzidenz: " + totalLastSeven);
		// HISTORY-INZIDENZ: Citizens
		$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN+%3D+%27Cottbus%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=', function(data) {
			var einwohnerzahlAPI = data.features;
			var einwohnerzahl = einwohnerzahlAPI[0].attributes.EWZ;
			// TEST
			console.log("Einwohnerzahl: " + einwohnerzahl);
			// HISTORY-INZIDENZ: Formula
			var inzidenzGestern = Math.round(totalLastSeven / einwohnerzahl * 100000);
			// TEST
			console.log("gestern: " + inzidenzGestern)
			// TODAY-INZIDENZ
			$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN+%3D+%27Cottbus%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=', function(data) {
				var todayInzidenz = data.features;
				var inzidenzHeute = todayInzidenz[0].attributes.cases7_per_100k;
				var inzidenzHeuteGanzzahl = Math.round(inzidenzHeute);
				// IMPLEMENT
				$("#cbSieben").append(inzidenzHeuteGanzzahl);
				// TEST
				console.log("heute: " + inzidenzHeuteGanzzahl);
				// COMPARING
				if (inzidenzGestern < inzidenzHeuteGanzzahl) {
					var rise = 0;
					rise = inzidenzHeuteGanzzahl - inzidenzGestern;
					$("#cbSiebenRed").append("  +" + rise); //rot
					// TEST
					console.log("Unterschied: " + "+ " + rise);
				}
				if (inzidenzGestern > inzidenzHeuteGanzzahl) {
					var sink = 0;
					sink = inzidenzGestern - inzidenzHeuteGanzzahl;
					$("#cbSiebenGreen").append("  -" + sink); //gruen
					// TEST
					console.log("Unterschied: " + " -" + sink);
				}
				if (inzidenzGestern == inzidenzHeuteGanzzahl) {
					$("#cbSiebenGreen").append("  gestern gleich");
					// TEST
					console.log("gestern auch")
				};
			});
		});
	});	
};

function infizierte () {
	
	// FÄLLE INSGESAMT
	$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN+%3D+%27Cottbus%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=', function(data) {
		var casesAPI = data.features;
		var casesData = casesAPI[0].attributes.cases;
		// IMPLEMENT
		$("#cbGesamtInfi").append(casesData);
		counting();
		// FÄLLE NEU
		$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_history_v/FeatureServer/0/query?where=AdmUnitId%3D12052&objectIds=&time=&resultType=none&outFields=Datum%2CAnzFallNeu&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Datum&groupByFieldsForStatistics=Datum&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=standard&f=pjson&token=', function(data) {
			var newAPI = data.features;
			var newCount = newAPI[newAPI.length - 1].attributes.AnzFallNeu;
			// IMPLEMENT
			if (newCount > 0) {
				$("#cbNewRed").append("  +" + newCount);
			} else {
				$("#cbNewGreen").append("  gestern gleich");
			};
		});
	});
};

// UPCOUNTER
// https://jshakespeare.com/simple-count-up-number-animation-javascript-react/
// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );
// The animation function, which takes an Element
const animateCountUp = el => {
	let frame = 0;
	const countTo = parseInt( el.innerHTML, 10 );
	// Start the animation running 60 times per second
	const counter = setInterval( () => {
		frame++;
		// Calculate our progress as a value between 0 and 1
		// Pass that value to our easing function to get our
		// progress on a curve
		const progress = easeOutQuad( frame / totalFrames );
		// Use the progress value to calculate the current count
		const currentCount = Math.round( countTo * progress );

		// If the current count has changed, update the element
		if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
			el.innerHTML = currentCount;
		}

		// If we’ve reached our last frame, stop the animation
		if ( frame === totalFrames ) {
			clearInterval( counter );
		}
	}, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
function counting () {
	const countupEls = document.querySelectorAll( '#cbGesamtInfi' );
	countupEls.forEach( animateCountUp );
};

/*DIAGRAMM*/

const labels = [];
const datapoints = [];

function labelizing () {

	$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_history_v/FeatureServer/0/query?where=AdmUnitId%3D12052&objectIds=&time=&resultType=none&outFields=Datum%2CAnzFallVortag%2C+AnzFallNeu&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Datum&groupByFieldsForStatistics=Datum&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=standard&f=pjson&token=', function(data) {
		
		const dataFromAPI = data.features;
		for (let i = 0; i < dataFromAPI.length; i++) {
			const timestamp = dataFromAPI[i].attributes.Datum;
			const date = new Date(timestamp);
			const dateLabels = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
			labels.push(dateLabels.toString());
		};
		myChart.update();
	});
};

labelizing();

function datalizing () {

	 $.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_history_v/FeatureServer/0/query?where=AdmUnitId%3D12052&objectIds=&time=&resultType=none&outFields=Datum%2CAnzFallVortag%2C+AnzFallNeu&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Datum&groupByFieldsForStatistics=Datum&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=standard&f=pjson&token=', function(data) {
		
		const dataFromAPI = data.features;
		for (let i = 0; i < dataFromAPI.length; i++) {
			const helper = dataFromAPI[i].attributes.AnzFallVortag + dataFromAPI[i].attributes.AnzFallNeu;	
			datapoints.push(helper.toString());
		};
		myChart.update();
	});
};

datalizing();

const data = {
  labels: labels,
  datasets: [{
    label: 'Verlauf',
    data: datapoints,
	pointStyle: 'circle',
    pointRadius: 0,
    pointHoverRadius: 15,
    fill: true,
    borderColor: 'red',
	borderWidth: 1,
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: false
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: false
        },
        suggestedMin: 0,
        suggestedMax: 800
      }
    }
  },
};

const myChart = new Chart(
	document.getElementById('myChart'),
    config
);












