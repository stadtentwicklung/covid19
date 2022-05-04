var jsonVar;
var timestamp;
var realtime;
var todesfaelle = 0;
var genesene = 0;
var aktuelleInfektionen = 0;
var gesamtInfektionen = 0;
var mannSum = 0;
var frauSum = 0;
var mannSumAll = 0;
var frauSumAll = 0;
var todesfaelleFrau = 0;
var todesfaelleMann = 0;
var gruppe1 = 0;
var gruppe2 = 0;
var gruppe3 = 0;
var gruppe4 = 0;
var gruppe5 = 0;
var gruppe6 = 0;
var gruppe1All = 0;
var gruppe2All = 0;
var gruppe3All = 0;
var gruppe4All = 0;
var gruppe5All = 0;
var gruppe6All = 0;
//
var gruppe1AllFrau = 0;
var gruppe1AllMann = 0;
var gruppe2AllFrau = 0;
var gruppe2AllMann = 0;
var gruppe3AllFrau = 0;
var gruppe3AllMann = 0;
var gruppe4AllFrau = 0;
var gruppe4AllMann = 0;
var gruppe5AllFrau = 0;
var gruppe5AllMann = 0;
var gruppe6AllFrau = 0;
var gruppe6AllMann = 0;
//
var gruppe1Frau = 0;
var gruppe1Mann = 0;
var gruppe2Frau = 0;
var gruppe2Mann = 0;
var gruppe3Frau = 0;
var gruppe3Mann = 0;
var gruppe4Frau = 0;
var gruppe4Mann = 0;
var gruppe5Frau = 0;
var gruppe5Mann = 0;
var gruppe6Frau = 0;
var gruppe6Mann = 0;
//
var gruppe1Tot = 0;
var gruppe2Tot = 0;
var gruppe3Tot = 0;
var gruppe4Tot = 0;
var gruppe5Tot = 0;
var gruppe6Tot = 0;
//
var gruppe1FrauTot = 0;
var gruppe1MannTot = 0;
var gruppe2FrauTot = 0;
var gruppe2MannTot = 0;
var gruppe3FrauTot = 0;
var gruppe3MannTot = 0;
var gruppe4FrauTot = 0;
var gruppe4MannTot = 0;
var gruppe5FrauTot = 0;
var gruppe5MannTot = 0;
var gruppe6FrauTot = 0;
var gruppe6MannTot = 0;
//
var genesenFrau = 0;
var genesenMann = 0;
//
var gruppe1Gen = 0;
var gruppe2Gen = 0;
var gruppe3Gen = 0;
var gruppe4Gen = 0;
var gruppe5Gen = 0;
var gruppe6Gen = 0;
//
var gruppe1FrauGen = 0;
var gruppe1MannGen = 0;
var gruppe2FrauGen = 0;
var gruppe2MannGen = 0;
var gruppe3FrauGen = 0;
var gruppe3MannGen = 0;
var gruppe4FrauGen = 0;
var gruppe4MannGen = 0;
var gruppe5FrauGen = 0;
var gruppe5MannGen = 0;
var gruppe6FrauGen = 0;
var gruppe6MannGen = 0;
	
// CB ZAHLEN VON COTTBUS.DE HOLEN 

// cottbusData();

//function cottbusData() {

//    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.cottbus.de/verwaltung/gb_iii/gesundheit/corona/index.html'), function (data) {            
            
//            $("#hiddenCBQuery").html(data.contents);
            
//            var cbTag = document.getElementsByTagName("tbody");

//            var z = $("#filter").append(cbTag)

//            $("#cbUpdate").append(z[0].children[0].children[0].children[1].children[0].innerHTML);
//            $("#cbQuaran").append(z[0].children[0].children[6].children[1].innerHTML);
//            $("#cbAktuellInfi").append(z[0].children[0].children[5].children[1].innerHTML);
//            $("#cbGesamtInfi").append("&nbsp;/" + z[0].children[0].children[1].children[1].innerHTML);
//            $("#cbAktuellInfiChange").append("&nbsp;" + z[0].children[0].children[2].children[1].innerHTML);
//            $("#cbGen").append(z[0].children[0].children[3].children[1].innerHTML);
            
            //$("#cbVerstor").append(z[0].children[0].children[4].children[1].innerHTML);
//            var cbDataVerstorben = z[0].children[0].children[4].children[1].innerHTML;
//            cbDataVerstorben = cbDataVerstorben.replace(")","");
//            cbDataVerstorben = cbDataVerstorben.split('(');
//            $("#cbVerstor").append(cbDataVerstorben[0]);
//            $("#cbVerstorChange").append("&nbsp;" + cbDataVerstorben[1]);

//            $("#cbSieben").append(z[0].children[0].children[7].children[1].innerHTML);
//    });   
//};

// RKI 7-TAGE-INZIDENZ-API // <a style="color: rgb(125,125,125);font-size: 0.7em; padding-left: 10px;">+</a>

sieben();

function sieben() {

$.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN+%3D+%27Cottbus%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=', function(data) {

    var jsonVar7 = data.features;

    $("#cbSieben").append(jsonVar7[0].attributes.cases7_per_100k_txt);

});
}

// RKI "NICH-SIEBEN" = ALLE ABFRAGEN AUßER 7-TAGE-INZIDENZ

nichtSieben(); // Ermittle alle Zahlen außer 7-Tage-Inzidenz über API 1 

function nichtSieben () {

// API 1

            $.getJSON('https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_COVID19/FeatureServer/0/query?where=IdLandkreis=12052&outFields=Refdatum,AnzahlFall,AnzahlTodesfall,NeuerFall,NeuerTodesfall,NeuGenesen,AnzahlGenesen,Altersgruppe2,Geschlecht,Altersgruppe,IstErkrankungsbeginn,Datenstand&f=json', function(data) {
            
                jsonVar = data.features;

                // ERMITTLE DIE GESAMTANZAHL DER TODESFÄLLE
                
                for(i = 0; i < jsonVar.length; i++) {          
                    
                    todesfaelle =  todesfaelle + jsonVar[i].attributes.AnzahlTodesfall;            
                };

                // ERMITTLE DIE GESAMTANZAHL DER GENESENEN

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    genesene =  genesene + jsonVar[i].attributes.AnzahlGenesen;           
                };
                
                // Ermittle Frauen und Männer unter Genesen

                for(i = 0; i < jsonVar.length; i++) {          
                    
                    if (jsonVar[i].attributes.Geschlecht == "W") {

                        genesenFrau =  genesenFrau + jsonVar[i].attributes.AnzahlGenesen;            
                }};

                for(i = 0; i < jsonVar.length; i++) {          
                    
                    if (jsonVar[i].attributes.Geschlecht == "M") {

                        genesenMann =  genesenMann + jsonVar[i].attributes.AnzahlGenesen;            
                }};

                // GESAMT - INFEKTIONEN

                for(i = 0; i < jsonVar.length; i++) {           
                    // GESAMTINFEKTIONEN
                    gesamtInfektionen =  gesamtInfektionen + jsonVar[i].attributes.AnzahlFall;          
                };
		         
                // AKTUELLE INFEKTIONEN
                aktuelleInfektionen = gesamtInfektionen - genesene;          
                   
		    
                // ERMITTLE DIE GESAMTANZAHL DER INFIZIERTEN SEIT ZÄHLUNG = FALSCH
                
                //for(i = 0; i < jsonVar.length; i++) {           
                    
                //    gesamtInfektionen =  gesamtInfektionen + jsonVar[i].attributes.AnzahlFall + jsonVar[i].attributes.AnzahlGenesen;
                //};

                // Alle Fälle Geschlecht männlich

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        mannSumAll = mannSumAll + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                // Aktuelle Fälle Geschlecht männlich

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        mannSum = mannSum + jsonVar[i].attributes.AnzahlFall;
                    };
                };
		
		mannSum = mannSum - genesenMann; 

                // Alle Fälle Geschlecht weiblich

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        frauSumAll = frauSumAll + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                // Ermittle aktuelle Fälle Geschlecht weiblich

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        frauSum = frauSum + jsonVar[i].attributes.AnzahlFall;
                    };
                };
		    
		frauSum = frauSum - genesenFrau;

                // Ermittle Anzahl Frauen und Anzahl Männer bei Verstorbenen

                for(i = 0; i < jsonVar.length; i++) {          
                    
                    if (jsonVar[i].attributes.Geschlecht == "W") {

                        todesfaelleFrau =  todesfaelleFrau + jsonVar[i].attributes.AnzahlTodesfall;            
                }};

                for(i = 0; i < jsonVar.length; i++) {          
                    
                    if (jsonVar[i].attributes.Geschlecht == "M") {

                        todesfaelleMann =  todesfaelleMann + jsonVar[i].attributes.AnzahlTodesfall;            
                }};

                // Ermittle Altersgruppen bei Verstorbenen

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04") {
                                            
                        gruppe1Tot = gruppe1Tot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14") {
                                            
                        gruppe2Tot = gruppe2Tot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34") {
                                            
                        gruppe3Tot = gruppe3Tot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59") {
                                            
                        gruppe4Tot = gruppe4Tot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79") {
                                            
                        gruppe5Tot = gruppe5Tot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+") {
                                            
                        gruppe6Tot = gruppe6Tot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                // Ermitlle Altersgruppe und Geschlecht bei Verstorbenen
                
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe1MannTot = gruppe1MannTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe1FrauTot = gruppe1FrauTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe2FrauTot = gruppe2FrauTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe2MannTot = gruppe2MannTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe3MannTot = gruppe3MannTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe3FrauTot = gruppe3FrauTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe4FrauTot = gruppe4FrauTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe4MannTot = gruppe4MannTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe5MannTot = gruppe5MannTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe5FrauTot = gruppe5FrauTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe6FrauTot = gruppe6FrauTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe6MannTot = gruppe6MannTot + jsonVar[i].attributes.AnzahlTodesfall;
                    };
                };

                // Gesamt - Infektionen für Altersgruppen A00-A04, A05-A14, A15-A34, A35-A59, A60-A79, A80+

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04") { //gruppe1
                                            
                        gruppe1All = gruppe1All + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14") { //gruppe2
                                            
                        gruppe2All = gruppe2All + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34") { //gruppe3
                                            
                        gruppe3All = gruppe3All + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59") { //gruppe4
                                            
                        gruppe4All = gruppe4All + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79") { //gruppe5
                                            
                        gruppe5All = gruppe5All + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+") { //gruppe6
                                            
                        gruppe6All = gruppe6All + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                // Aktive Infektionen für Altersgruppen 00-04, 05-14, 15-34, 35-59, 60-79, 80+
		    
		// 0-4
                for(i = 0; i < jsonVar.length; i++) {  
                    
			if (jsonVar[i].attributes.Altersgruppe == "A00-A04") {
                        
				gruppe1Gen = gruppe1Gen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe1 = gruppe1All - gruppe1Gen;
		
		// 5-14   
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14") {
                                            
                        	gruppe2Gen = gruppe2Gen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe2 = gruppe2All - gruppe2Gen;

		// 15-34
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34") {
                                            
                        gruppe3Gen = gruppe3Gen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe3 = gruppe3All - gruppe3Gen;

		// 35-59
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59") {
                                            
                        gruppe4Gen = gruppe4Gen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe4 = gruppe4All - gruppe4Gen;
		    
		// 60-79
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79") {
                                            
                        gruppe5Gen = gruppe5Gen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe5 = gruppe5All - gruppe5Gen;
		    
		// 80+
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+") {
                                            
                        gruppe6Gen = gruppe6Gen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe6 = gruppe6All - gruppe6Gen;

                
		// Gesamt - Infektionen nach Altersgruppe und Geschlecht
                
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe1AllMann = gruppe1AllMann + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe1AllFrau = gruppe1AllFrau + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe2AllMann = gruppe2AllMann + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe2AllFrau = gruppe2AllFrau + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe3AllMann = gruppe3AllMann + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe3AllFrau = gruppe3AllFrau + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe4AllMann = gruppe4AllMann + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe4AllFrau = gruppe4AllFrau + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe5AllMann = gruppe5AllMann + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe5AllFrau = gruppe5AllFrau + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe6AllMann = gruppe6AllMann + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe6AllFrau = gruppe6AllFrau + jsonVar[i].attributes.AnzahlFall;
                    };
                };

                // Aktive Infektionen nach Altersgruppe und Geschlecht
		
		// 0-4
                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe1MannGen = gruppe1MannGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe1Mann = gruppe1AllMann - gruppe1MannGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A00-A04" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe1FrauGen = gruppe1FrauGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe1Frau = gruppe1AllFrau - gruppe1FrauGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe2MannGen = gruppe2MannGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe2Mann = gruppe2AllMann - gruppe2MannGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A05-A14" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe2FrauGen = gruppe2FrauGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe2Frau = gruppe2AllFrau - gruppe2FrauGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe3MannGen = gruppe3MannGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe3Mann = gruppe3AllMann - gruppe3MannGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A15-A34" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe3FrauGen = gruppe3FrauGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe3Frau = gruppe3AllFrau - gruppe3FrauGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe4MannGen = gruppe4MannGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe4Mann = gruppe4AllMann - gruppe4MannGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A35-A59" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe4FrauGen = gruppe4FrauGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe4Frau = gruppe4AllFrau - gruppe4FrauGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe5MannGen = gruppe5MannGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe5Mann = gruppe5AllMann - gruppe5MannGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A60-A79" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe5FrauGen = gruppe5FrauGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe5Frau = gruppe5AllFrau - gruppe5FrauGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+" && jsonVar[i].attributes.Geschlecht == "M") {
                                            
                        gruppe6MannGen = gruppe6MannGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe6Mann = gruppe6AllMann - gruppe6MannGen;

                for(i = 0; i < jsonVar.length; i++) {           
                    
                    if (jsonVar[i].attributes.Altersgruppe == "A80+" && jsonVar[i].attributes.Geschlecht == "W") {
                                            
                        gruppe6FrauGen = gruppe6FrauGen + jsonVar[i].attributes.AnzahlGenesen;
                    };
                };
		gruppe6Frau = gruppe6AllFrau - gruppe6FrauGen;

                // LOGGE ERGEBNISSE

                //console.log("Datenstand: " + jsonVar[0].attributes.Datenstand);
                $("#cbUpdate").append(jsonVar[0].attributes.Datenstand);

                //console.log("Verstorben: " + todesfaelle);
                //console.log("Verstorbene Frauen: " + todesfaelleFrau);
                //console.log("Verstorbene Männer: " + todesfaelleMann);
                $("#cbVerstor").append(todesfaelle + " (W " + todesfaelleFrau + " / M " + todesfaelleMann + ")");
                
                //console.log("Verstorbene im Alter 0 - 4: " + gruppe1Tot);
                //console.log("Verstorbene im Alter 5 - 14: " + gruppe2Tot);
                //console.log("Verstorbene im Alter 15 - 34: " + gruppe3Tot);
                //console.log("Verstorbene im Alter 35 - 59: " + gruppe4Tot);
                //console.log("Verstorbene im Alter 60 - 79: " + gruppe5Tot);
                //console.log("Verstorbene im Alter 80+: " + gruppe6Tot);

                //console.log("Verstorbene Frauen Alter 0 - 4: " + gruppe1FrauTot);
                //console.log("Verstorbene Frauen Alter 5 - 14: " + gruppe2FrauTot);
                //console.log("Verstorbene Frauen Alter 15 - 34: " + gruppe3FrauTot);
                //console.log("Verstorbene Frauen Alter 35 - 59: " + gruppe4FrauTot);
                //console.log("Verstorbene Frauen Alter 60 - 79: " + gruppe5FrauTot);
                //console.log("Verstorbene Frauen Alter 80+: " + gruppe6FrauTot);
                
                //console.log("Verstorbene Männer Alter 0 - 4: " + gruppe1MannTot);
                //console.log("Verstorbene Männer Alter 5 - 14: " + gruppe2MannTot);
                //console.log("Verstorbene Männer Alter 15 - 34: " + gruppe3MannTot);
                //console.log("Verstorbene Männer Alter 35 - 59: " + gruppe4MannTot);
                //console.log("Verstorbene Männer Alter 60 - 79: " + gruppe5MannTot);
                //console.log("Verstorbene Männer Alter 80+: " + gruppe6MannTot);

                //console.log("Genesen: " + genesene);
                $("#cbGen").append(genesene + " (W " + genesenFrau + " / M " + genesenMann + ")");

                //console.log("Aktuell infiziert: " + aktuelleInfektionen);
                //console.log("Gesamtinfektionen: " + gesamtInfektionen);
                $("#cbAktuellInfi").append(aktuelleInfektionen + " / " + gesamtInfektionen); 
                

                //console.log("Aktuell infizierte Frauen: " + frauSum);
                //console.log("Aktuell infizierte Männer: " + mannSum);
                
                //console.log("Gesamtinfektionen Frauen: " + frauSumAll);
                //console.log("Gesamtinfektionen Männer: " + mannSumAll);
                
                //console.log("Aktuell infiziert im Alter 0 - 4: " + gruppe1);
                //console.log("Aktuell infiziert im Alter 5 - 14: " + gruppe2);
                //console.log("Aktuell infiziert im Alter 15 - 34: " + gruppe3);
                //console.log("Aktuell infiziert im Alter 35 - 59: " + gruppe4);
                //console.log("Aktuell infiziert im Alter 60 - 79: " + gruppe5);
                //console.log("Aktuell infiziert im Alter 80+: " + gruppe6);

                //console.log("Aktuell infizierte Frauen Alter 0 - 4: " + gruppe1Frau);
                //console.log("Aktuell infizierte Frauen Alter 5 - 14: " + gruppe2Frau);
                //console.log("Aktuell infizierte Frauen Alter 15 - 34: " + gruppe3Frau);
                //console.log("Aktuell infizierte Frauen Alter 35 - 59: " + gruppe4Frau);
                //console.log("Aktuell infizierte Frauen Alter 60 - 79: " + gruppe5Frau);
                //console.log("Aktuell infizierte Frauen Alter 80+: " + gruppe6Frau);
                
                //console.log("Aktuell infizierte Männer Alter 0 - 4: " + gruppe1Mann);
                //console.log("Aktuell infizierte Männer Alter 5 - 14: " + gruppe2Mann);
                //console.log("Aktuell infizierte Männer Alter 15 - 34: " + gruppe3Mann);
                //console.log("Aktuell infizierte Männer Alter 35 - 59: " + gruppe4Mann);
                //console.log("Aktuell infizierte Männer Alter 60 - 79: " + gruppe5Mann);
                //console.log("Aktuell infizierte Männer Alter 80+: " + gruppe6Mann);

                //console.log("Gesamtinfektionen Alter 0 - 4: " + gruppe1All);
                //console.log("Gesamtinfektionen Alter 5 - 14: " + gruppe2All);
                //console.log("Gesamtinfektionen Alter 15 - 34: " + gruppe3All);
                //console.log("Gesamtinfektionen Alter 35 - 59: " + gruppe4All);
                //console.log("Gesamtinfektionen Alter 60 - 79: " + gruppe5All);
                //console.log("Gesamtinfektionen Alter 80+: " + gruppe6All);

                //console.log("Gesamtinfektionen Frauen Alter 0 - 4: " + gruppe1AllFrau);
                //console.log("Gesamtinfektionen Frauen Alter 5 - 14: " + gruppe2AllFrau);
                //console.log("Gesamtinfektionen Frauen Alter 15 - 34: " + gruppe3AllFrau);
                //console.log("Gesamtinfektionen Frauen Alter 35 - 59: " + gruppe4AllFrau);
                //console.log("Gesamtinfektionen Frauen Alter 60 - 79: " + gruppe5AllFrau);
                //console.log("Gesamtinfektionen Frauen Alter 80+: " + gruppe6AllFrau);
                
                //console.log("Gesamtinfektionen Männer Alter 0 - 4: " + gruppe1AllMann);
                //console.log("Gesamtinfektionen Männer Alter 5 - 14: " + gruppe2AllMann);
                //console.log("Gesamtinfektionen Männer Alter 15 - 34: " + gruppe3AllMann);
                //console.log("Gesamtinfektionen Männer Alter 35 - 59: " + gruppe4AllMann);
                //console.log("Gesamtinfektionen Männer Alter 60 - 79: " + gruppe5AllMann);
                //console.log("Gesamtinfektionen Männer Alter 80+: " + gruppe6AllMann);
                
                //console.log(jsonVar)
                
                diagramme();
                
            });
        };

// DIAGRAMME
// CHART 1 - VERSTORBEN NACH AG

function diagramme() {

new Chart(document.getElementById("chart1"), {
    type: 'bar',
    data: {
      labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
      datasets: [
        {
          backgroundColor: ["#FF0000", "#FF0000","#FF0000","#FF0000", "#FF0000", "#FF0000"],
          data: [gruppe1Tot,gruppe2Tot,gruppe3Tot,gruppe4Tot,gruppe5Tot,gruppe6Tot]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Verstorben - Altersgruppe'
      }
    }
});

// CHART 2 - VERSTORBEN NACH AG/GESCHLECHT

new Chart(document.getElementById("chart2"), {
    type: 'bar',
    data: {
      labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
      datasets: [
        {
            label: 'W',
          backgroundColor: ["#FF4500","#FF4500","#FF4500","#FF4500","#FF4500","#FF4500"],
          data: [gruppe1FrauTot,gruppe2FrauTot,gruppe3FrauTot,gruppe4FrauTot,gruppe5FrauTot,gruppe6FrauTot]
        }, {
            label: 'M',
          backgroundColor: ["#8B0000","#8B0000","#8B0000","#8B0000","#8B0000","#8B0000"],
          data: [gruppe1MannTot,gruppe2MannTot,gruppe3MannTot,gruppe4MannTot,gruppe5MannTot,gruppe6MannTot]
        }
      ]
    },
    options: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Verstorben - Altersgruppe & Geschlecht'
      }
    }
});

// CHART 3 - AKTUELLE INFEKTIONEN NACH ALTER

new Chart(document.getElementById("chart3"), {
    type: 'bar',
    data: {
      labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
      datasets: [
        {
          backgroundColor: ["#FF0000","#FF0000","#FF0000","#FF0000","#FF0000","#FF0000"],
          data: [gruppe1,gruppe2,gruppe3,gruppe4,gruppe5,gruppe6]
        }
      ]
    },
    options: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Aktive Infekte - Altersgruppe'
      }
    }
});

// CHART 4 - AKTUELLE INFEKTIONEN NACH ALTER UND GESCHLECHT

new Chart(document.getElementById("chart4"), {
    type: 'bar',
    data: {
      labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
      datasets: [
        {
            label: 'W',
          backgroundColor: ["#FF4500","#FF4500","#FF4500","#FF4500","#FF4500","#FF4500"],
          data: [gruppe1Frau,gruppe2Frau,gruppe3Frau,gruppe4Frau,gruppe5Frau,gruppe6Frau]
        }, {
            label: 'M',
          backgroundColor: ["#8B0000","#8B0000","#8B0000","#8B0000","#8B0000","#8B0000"],
          data: [gruppe1Mann,gruppe2Mann,gruppe3Mann,gruppe4Mann,gruppe5Mann,gruppe6Mann]
        }
      ]
    },
    options: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Aktive Infekte - Altersgruppe & Geschlecht'
      }
    }
});

// CHART 5 - GESAMT-INFEKTIONEN NACH ALTER

new Chart(document.getElementById("chart5"), {
    type: 'bar',
    data: {
      labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
      datasets: [
        {
          backgroundColor: ["#FF0000","#FF0000","#FF0000","#FF0000","#FF0000","#FF0000"],
          data: [gruppe1All,gruppe2All,gruppe3All,gruppe4All,gruppe5All,gruppe6All]
        }
      ]
    },
    options: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Gesamten Infekte - Altersgruppe'
      }
    }
});

// CHART 6 - GESAMT-INFEKTIONEN NACH ALTER UND GESCHLECHT

new Chart(document.getElementById("chart6"), {
    type: 'bar',
    data: {
      labels: ["0-4", "5-14", "15-34", "35-59", "60-79", "80+"],
      datasets: [
        {
            label: 'W',
          backgroundColor: ["#FF4500","#FF4500","#FF4500","#FF4500","#FF4500","#FF4500"],
          data: [gruppe1AllFrau,gruppe2AllFrau,gruppe3AllFrau,gruppe4AllFrau,gruppe5AllFrau,gruppe6AllFrau]
        }, {
            label: 'M',
          backgroundColor: ["#8B0000","#8B0000","#8B0000","#8B0000","#8B0000","#8B0000"],
          data: [gruppe1AllMann,gruppe2AllMann,gruppe3AllMann,gruppe4AllMann,gruppe5AllMann,gruppe6AllMann]
        }
      ]
    },
    options: {
        legend: { display: false },
        title: {
        display: true,
        text: 'Gesamten Infekte - Altersgruppe & Geschlecht'
      }
    }
});
};
