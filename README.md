# :drop_of_blood: Showcase #1: Covid-19 Dashboard

### :white_check_mark: Update 19. Mai 2022

### :camera_flash: Screenshot:
![This is a Screenshot of the Dashboard for Covid-19 Data in Cottbus](https://raw.githubusercontent.com/digital-codebuz/covid19/main/screenshot3.PNG)

### :white_check_mark: Update 5. April 2022

### :camera_flash: Screenshot:
![This is a Screenshot of the Dashboard for Covid-19 Data in Cottbus](https://raw.githubusercontent.com/digital-codebuz/covid19/main/screenshot2.PNG)

:heavy_check_mark: Open-Source-Software-Showcase: Seitenaufruf führt zu Covid-19-Datenabruf für [Cottbus/Chóśebuz](https://www.cottbus.de/verwaltung/gb_iii/gesundheit/corona/index.html) vom [RKI Datahub](https://npgeo-corona-npgeo-de.hub.arcgis.com/).

## :computer: Link: [https://stadtentwicklung.github.io/covid19/](https://stadtentwicklung.github.io/covid19/)

### :computer: ESRI DATAHUB RKI API INFO:

**Cottbus REST-API: where AdmUnitId=12052**

**ArcGIS REST Services Directory => Home > services > rki_history_v (FeatureServer) > rki_history > query**
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=GEN+%3D+%27Cottbus%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=

**ArcGIS REST Services Directory => query template (Out Fields: Datum,AnzFallVortag)**
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_history_v/FeatureServer/0/query?where=AdmUnitId%3D12052&objectIds=&time=&resultType=none&outFields=Datum%2CAnzFallVortag%2C+AnzFallNeu&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Datum&groupByFieldsForStatistics=Datum&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=standard&f=html&token=

**ArcGIS REST Services Directory => query template (Out Fields: Datum,AnzFallVortag,AnzFallNeu)**
https://services7.arcgis.com/mOBPykOjAyBO2ZKk/ArcGIS/rest/services/rki_history_v/FeatureServer/0/query?where=AdmUnitId%3D12052&objectIds=&time=&resultType=none&outFields=Datum%2CAnzFallVortag%2C+AnzFallNeu&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnDistinctValues=false&cacheHint=false&orderByFields=Datum&groupByFieldsForStatistics=Datum&outStatistics=&having=&resultOffset=&resultRecordCount=&sqlFormat=standard&f=pjson&token=

### :rocket: Technology:
- HTML, CSS, JAVASCRIPT, JQUERY, JSON
- Verwendung von [Bootstrap.js](https://getbootstrap.com/) für die Layoutgrundlage and [Chart.js](https://www.chartjs.org/) für die Visualisierung in Diagrammen
- Anbindung an [REST API von RKI/Esri ArcGIS](https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/dd4580c810204019a7b8eb3e0b329dd6_0/api) zum Vergleich der Zahlen - bei Seitenaufruf abgefragt
- Auswertung der [JSON-Datensätze](https://en.wikipedia.org/wiki/JSON) und Darstellung in Balkendiagrammen
- Anwendung steht zur kostenlosen und freien Verwendung unter der [Creative Commons Lizenz CC-BY-SA](https://de.creativecommons.net/was-ist-cc/)
- Weiterverwendung supersimpel als Template für andere Städte/Gemeinden mit minimalen Anpassungen

### :camera_flash: Screenshot (works perfect before DATAHUB updates):
![This is a Screenshot of the Dashboard for Covid-19 Data in Cottbus](https://raw.githubusercontent.com/digital-codebuz/covid19/main/screenshot.png)

### :coffee::coffee::coffee: by [Stefan](https://github.com/stefanstoehr)
