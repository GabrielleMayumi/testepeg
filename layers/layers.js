var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_EspaovividopeloPEG_1 = new ol.format.GeoJSON();
var features_EspaovividopeloPEG_1 = format_EspaovividopeloPEG_1.readFeatures(json_EspaovividopeloPEG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspaovividopeloPEG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspaovividopeloPEG_1.addFeatures(features_EspaovividopeloPEG_1);
var lyr_EspaovividopeloPEG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspaovividopeloPEG_1, 
                style: style_EspaovividopeloPEG_1,
                popuplayertitle: "Espaço vivido pelo PEG",
                interactive: true,
                title: '<img src="styles/legend/EspaovividopeloPEG_1.png" /> Espaço vivido pelo PEG'
            });
var format_20132015_2 = new ol.format.GeoJSON();
var features_20132015_2 = format_20132015_2.readFeatures(json_20132015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20132015_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20132015_2.addFeatures(features_20132015_2);
var lyr_20132015_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20132015_2, 
                style: style_20132015_2,
                popuplayertitle: "2013-2015",
                interactive: true,
                title: '<img src="styles/legend/20132015_2.png" /> 2013-2015'
            });
var format_2020_3 = new ol.format.GeoJSON();
var features_2020_3 = format_2020_3.readFeatures(json_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2020_3.addFeatures(features_2020_3);
var lyr_2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2020_3, 
                style: style_2020_3,
                popuplayertitle: "2020",
                interactive: true,
                title: '<img src="styles/legend/2020_3.png" /> 2020'
            });
var format_20232024_4 = new ol.format.GeoJSON();
var features_20232024_4 = format_20232024_4.readFeatures(json_20232024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20232024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20232024_4.addFeatures(features_20232024_4);
var lyr_20232024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20232024_4, 
                style: style_20232024_4,
                popuplayertitle: "2023-2024",
                interactive: true,
                title: '<img src="styles/legend/20232024_4.png" /> 2023-2024'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_EspaovividopeloPEG_1.setVisible(true);lyr_20132015_2.setVisible(true);lyr_2020_3.setVisible(true);lyr_20232024_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_EspaovividopeloPEG_1,lyr_20132015_2,lyr_2020_3,lyr_20232024_4];
lyr_EspaovividopeloPEG_1.set('fieldAliases', {'Nome': 'Nome', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Cidade/UF': 'Cidade/UF', });
lyr_20132015_2.set('fieldAliases', {'Name': 'Name', 'Endereço': 'Endereço', 'Cidade/UF': 'Cidade/UF', 'Atividade': 'Atividade', 'Bairro': 'Bairro', });
lyr_2020_3.set('fieldAliases', {'Name': 'Name', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Cidade/UF': 'Cidade/UF', });
lyr_20232024_4.set('fieldAliases', {'Name': 'Name', 'Endereço': 'Endereço', 'Bairro': 'Bairro', 'Cidade/UF': 'Cidade/UF', });
lyr_EspaovividopeloPEG_1.set('fieldImages', {'Nome': 'TextEdit', 'Endereço': 'TextEdit', 'Bairro': 'TextEdit', 'Cidade/UF': 'TextEdit', });
lyr_20132015_2.set('fieldImages', {'Name': '', 'Endereço': '', 'Cidade/UF': '', 'Atividade': '', 'Bairro': '', });
lyr_2020_3.set('fieldImages', {'Name': '', 'Endereço': '', 'Bairro': '', 'Cidade/UF': '', });
lyr_20232024_4.set('fieldImages', {'Name': '', 'Endereço': '', 'Bairro': '', 'Cidade/UF': '', });
lyr_EspaovividopeloPEG_1.set('fieldLabels', {'Nome': 'inline label - always visible', 'Endereço': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Cidade/UF': 'inline label - always visible', });
lyr_20132015_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Endereço': 'inline label - always visible', 'Cidade/UF': 'inline label - always visible', 'Atividade': 'inline label - always visible', 'Bairro': 'inline label - always visible', });
lyr_2020_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Endereço': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Cidade/UF': 'inline label - always visible', });
lyr_20232024_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Endereço': 'inline label - always visible', 'Bairro': 'inline label - always visible', 'Cidade/UF': 'inline label - always visible', });
lyr_20232024_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});