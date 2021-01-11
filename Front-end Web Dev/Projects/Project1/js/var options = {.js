
//source code derived from: https://canvasjs.com/javascript-charts/stacked-column-chart/
window.onload = function () {
	CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"                
                ]);

    var chart = new CanvasJS.Chart("chartContainer",
    {
    	colorSet: "greenShades",
      title:{
      	text: "Number of Deaths versus Cause of Death", 
      	fontWeight: "bolder",
        fontColor: "#008B8B",
        fontfamily: "tahoma",        
        fontSize: 25,
        padding: 10      
      },
      subtitles: [{
		text: "As of April, 2009"
		}],
		animationEnabled: true,
		animationDuration: 2000,
		axisX:{
       		title: "Types of Deaths"
      	},
      	axisY:{
      		title: "Deaths per 100,000 people"
      	},
      data: [
      {        
        type: "stackedColumn",
        dataPoints: [
        //Per 100,000 people
			{ label: "Cardiovascular Disease", y: 267.3},
			{ label: "Alzheimer's ", y:  24.7},
			{ label: "Cancer" },
			{ label: "HIV/AIDS", y: 3.7 },
			{ label: "Pneumonia", y: 17.3 },
			{ label: "Road Traffic", y: 14.6 },
			{ label: "Suicide", y: 23 },
			{ label: "Others"}
			]
      }
      ],
      labels: {
      	fontfamily: "Helvetica"
      }
    });

    chart.render();
 }

function updateChart(){
 CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"                
                ]);

    var chart = new CanvasJS.Chart("chartContainer",
    {
    	colorSet: "greenShades",
      title:{
      	text: "Number of Deaths versus Cause of Death", 
      	fontWeight: "bolder",
        fontColor: "#008B8B",
        fontfamily: "tahoma",        
        fontSize: 25,
        padding: 10     
      },
      subtitles: [{
		text: "As of October 5, 2019"
		}],
		animationEnabled: true,
		animationDuration: 2000,
		axisX:{
       		title: "Types of Deaths"
      	},
      	axisY:{
      		title: "Deaths per 100,000 people"
      	},
      data: [
      {        
         type: "stackedColumn",
  			dataPoints: [
        //Per 100,000 people as of October 5, 2019
			{ label: "Cardiovascular Disease", y: 136},
			{ label: "Alzheimer's ", y:  24.7},
			{ label: "Cancer", y: 66.4 },
			{ label: "HIV/AIDS", y: 12.8 },
			{ label: "Pneumonia", y: 24.5 },
			{ label: "Road Traffic", y: 10.3 },
			{ label: "Suicide", y: 8.16 },
			{ label: "Others"}
			]
		}
      ],
      labels: {
      	fontfamily: "Helvetica"
      }
    });

    chart.render();
 }

 var change=document.getElementById("changeChart");
change.addEventListener("click", updateChart);

// source code derived from: http://cmoreira.net/interactive-maps-generator/examples.html

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);
      	
  function drawVisualization() {
  	var data = new google.visualization.DataTable();

	 data.addColumn('string', 'Country');
	 data.addColumn('number', 'Value');
	 data.addColumn({type:'string', role:'tooltip'});
	 var ivalue = new Array();

	 data.addRows([[{v:'US',f:'United States of America'},0,'$511.1 Billion']]);
	 ivalue['US'] = '';

	 data.addRows([[{v:'CN',f:'China'},0,'$451.9 Billion']]);
	 ivalue['CN'] = '';

	 data.addRows([[{v:'JP',f:'Japan'},0,'$165.7 Billion']]);
	 ivalue['JP'] = '';

	 data.addRows([[{v:'GB',f:'United Kingdom'},2,'$44.8 Billion']]);
	 ivalue['GB'] = '';

	 data.addRows([[{v:'DE',f:'Germany'},0,'$118.8 Billion']]);
	 ivalue['DE'] = '';

	 data.addRows([[{v:'KR',f:'South Korea'},1,'$91.6 Billion']]);
	 ivalue['KR'] = '';

	 data.addRows([[{v:'IN',f:'India'},1,'$66.5 Billion']]);
	 ivalue['IN'] = '';

	 data.addRows([[{v:'TW',f:'Taiwan'},2,'$33.7 Billion']]);
	 ivalue['TW'] = '';

	 data.addRows([[{v:'FR',f:'France'},1,'$60 Billion']]);
	 ivalue['FR'] = '';

	 data.addRows([[{v:'ES',f:'Spain'},3,'$19.2 Billion']]);
	 ivalue['ES'] = '';

	 data.addRows([[{v:'CA',f:'Canada'},2,'$25.7 Billion']]);
	 ivalue['CA'] = '';

	 data.addRows([[{v:'SE',f:'Sweden'},3,'$14.2 Billion']]);
	 ivalue['SE'] = '';

	 data.addRows([[{v:'IT',f:'Italy'},2,'$27.4 Billion']]);
	 ivalue['IT'] = '';

	 data.addRows([[{v:'NL',f:'The Netherlands'},3,'$16.3 Billion']]);
	 ivalue['NL'] = '';

	 data.addRows([[{v:'BR',f:'Brazil'},2,'$38.4 Billion']]);
	 ivalue['BR'] = '';

	 data.addRows([[{v:'TR',f:'Turkey'},3,'$15.3 Billion']]);
	 ivalue['TR'] = '';

	 data.addRows([[{v:'CH',f:'Switzerland'},3,'$13.1 Billion']]);
	 ivalue['CH'] = '';

	 data.addRows([[{v:'RU',f:'Russia'},2,'$42.6 Billion']]);
	 ivalue['RU'] = '';

	 data.addRows([[{v:'AU',f:'Australia'},3,'$23.3 Billion']]);
	 ivalue['AU'] = '';

	 data.addRows([[{v:'IL',f:'Israel'},3,'$12.7 Billion']]);
	 ivalue['IL'] = '';

	 data.addRows([[{v:'BE',f:'Belgium'},3,'$12.4 Billion']]);
	 ivalue['BE'] = '';

	 data.addRows([[{v:'AT',f:'Austria'},3,'$11.9 Billion']]);
	 ivalue['AT'] = '';

	 data.addRows([[{v:'PL',f:'Poland'},3,'$11.6 Billion']]);
	 ivalue['PL'] = '';

	 data.addRows([[{v:'MY',f:'Malaysia'},3,'$10.6 Billion']]);
	 ivalue['MY'] = '';

	 data.addRows([[{v:'SG',f:'Singapore'},3,'$10 Billion']]);
	 ivalue['SG'] = '';

	 data.addRows([[{v:'MX',f:'Mexico'},4,'$9 Billion']]);
	 ivalue['MX'] = '';

	 data.addRows([[{v:'DK',f:'Denmark'},4,'$8.2 Billion']]);
	 ivalue['DK'] = '';

	 data.addRows([[{v:'FI',f:'Finland'},4,'$7.2 Billion']]);
	 ivalue['FI'] = '';

	 data.addRows([[{v:'CZ',f:'Czech Republic'},4,'$6.3 Billion']]);
	 ivalue['CZ'] = '';

	 data.addRows([[{v:'EG',f:'Egypt'},4,'$6.2 Billion']]);
	 ivalue['EG'] = '';

	 data.addRows([[{v:'NO',f:'Norway'},4,'$5.8 Billion']]);
	 ivalue['NO'] = '';

	 data.addRows([[{v:'AR',f:'Argentina'},4,'$5 Billion']]);
	 ivalue['AR'] = '';

	 data.addRows([[{v:'ZA',f:'South Africa'},5,'$4.8 Billion']]);
	 ivalue['ZA'] = '';

	 data.addRows([[{v:'AE',f:'United Arab Emirates'},5,'$4.28 Billion']]);
	 ivalue['AE'] = '';

	 data.addRows([[{v:'IE',f:'Ireland'},5,'$3.6 Billion']]);
	 ivalue['IE'] = '';

	 data.addRows([[{v:'PT',f:'Portugal'},5,'$3.6 Billion']]);
	 ivalue['PT'] = '';

	 data.addRows([[{v:'TH',f:'Thailand'},5,'$3.6 Billion']]);
	 ivalue['TH'] = '';
	 
	 data.addRows([[{v:'HU',f:'Hungary'},5,'$3.4 Billion']]);
	 ivalue['HU'] = '';

	 data.addRows([[{v:'UA',f:'Ukraine'},5,'$3 Billion']]);
	 ivalue['UA'] = '';

	 data.addRows([[{v:'HK',f:'Hong Kong'},5,'$2.7 Billion']]);
	 ivalue['HK'] = '';

	 data.addRows([[{v:'GR',f:'Greece'},5,'$2.4 Billion']]);
	 ivalue['GR'] = '';

	 data.addRows([[{v:'PK',f:'Pakistan'},5,'$2.4 Billion']]);
	 ivalue['PK'] = '';

	 data.addRows([[{v:'ID',f:'Indonesia'},5,'$2 Billion']]);
	 ivalue['ID'] = '';

	 data.addRows([[{v:'NZ',f:'New Zealand'},6,'$1.8 Billion']]);
	 ivalue['NZ'] = '';

	 data.addRows([[{v:'SA',f:'Saudi Arabia'},6,'$1.8 Billion']]);
	 ivalue['SA'] = '';

	 data.addRows([[{v:'CO',f:'Columbia'},6,'$1.6 Billion']]);
	 ivalue['CO'] = '';

	 data.addRows([[{v:'CL',f:'Chile'},6,'$1.54 Billion']]);
	 ivalue['CL'] = '';

	 data.addRows([[{v:'SI',f:'Slovenia'},6,'$1.5 Billion']]);
	 ivalue['SI'] = '';

	 data.addRows([[{v:'MA',f:'Morocco'},6,'$1.5 Billion']]);
	 ivalue['MA'] = '';

	 data.addRows([[{v:'RO',f:'Romania'},6,'$1.5 Billion']]);
	 ivalue['RO'] = '';

	 data.addRows([[{v:'SK',f:'Slovakia'},6,'$1.4 Billion']]);
	 ivalue['SK'] = '';

	 data.addRows([[{v:'QA',f:'Qatar'},6,'$1.3 Billion']]);
	 ivalue['QA'] = '';

	 data.addRows([[{v:'BY',f:'Belarus'},6,'$1.12 Billion']]);
	 ivalue['BY'] = '';

	 data.addRows([[{v:'VN',f:'Vietnam'},7,'$0.87 Billion']]);
	 ivalue['VN'] = '';

	 data.addRows([[{v:'KW',f:'Kuwait'},7,'$0.83 Billion']]);
	 ivalue['KW'] = '';

	 data.addRows([[{v:'BG',f:'Bulgaria'},7,'$0.81 Billion']]);
	 ivalue['BG'] = '';

	 data.addRows([[{v:'EC',f:'Ecuador'},7,'$0.8 Billion']]);
	 ivalue['EC'] = '';

	 data.addRows([[{v:'ET',f:'Ethiopia'},7,'$0.79 Billion']]);
	 ivalue['ET'] = '';

	 data.addRows([[{v:'TN',f:'Tunisia'},7,'$0.78 Billion']]);
	 ivalue['TN'] = '';

	 data.addRows([[{v:'LT',f:'Lithuania'},7,'$0.76 Billion']]);
	 ivalue['LT'] = '';

	 data.addRows([[{v:'LU',f:'Luxembourg'},7,'$0.7 Billion']]);
	 ivalue['LU'] = '';

	 data.addRows([[{v:'HR',f:'Croatia'},7,'$0.7 Billion']]);
	 ivalue['HR'] = '';

	 data.addRows([[{v:'RS',f:'Serbia'},7,'$0.7 Billion']]);
	 ivalue['RS'] = '';

	 data.addRows([[{v:'IR',f:'Iran'},7,'$0.7 Billion']]);
	 ivalue['IR'] = '';

	 data.addRows([[{v:'KZ',f:'Kazhakstan'},7,'$0.67 Billion']]);
	 ivalue['KZ'] = '';

	 data.addRows([[{v:'EE',f:'Estonia'},8,'$0.34 Billion']]);
	 ivalue['EE'] = '';

	 data.addRows([[{v:'PH',f:'Phillipines'},8,'$0.48 Billion']]);
	 ivalue['PH'] = '';

	 data.addRows([[{v:'PE',f:'Peru'},8,'$0.4 Billion']]);
	 ivalue['PE'] = '';

	 data.addRows([[{v:'AZ',f:'Azerbaijan'},8,'$0.33 Billion']]);
	 ivalue['AZ'] = '';

	 data.addRows([[{v:'LV',f:'Latvia'},8,'$0.28 Billion']]);
	 ivalue['LV'] = '';

	 data.addRows([[{v:'UG',f:'Uganda'},8,'$0.28 Billion']]);
	 ivalue['UG'] = '';

	 data.addRows([[{v:'CR',f:'Costa Rica'},8,'$0.28 Billion']]);
	 ivalue['CR'] = '';

	 data.addRows([[{v:'IS',f:'Iceland'},8,'$0.27 Billion']]);
	 ivalue['IS'] = '';

	 data.addRows([[{v:'MN',f:'Mongolia'},8,'$0.26 Billion']]);
	 ivalue['MN'] = '';

	 data.addRows([[{v:'UY',f:'Uruguay'},8,'$0.24 Billion']]);
	 ivalue['UY'] = '';

	 data.addRows([[{v:'SD',f:'Sudan'},9,'$0.18 Billion']]);
	 ivalue['SD'] = '';

	 data.addRows([[{v:'DZ',f:'Algeria'},9,'$0.16 Billion']]);
	 ivalue['DZ'] = '';

	 data.addRows([[{v:'CY',f:'Cyprus'},9,'$0.13 Billion']]);
	 ivalue['CY'] = '';

	 data.addRows([[{v:'MT',f:'Malta'},9,'$0.11 Billion']]);
	 ivalue['MT'] = '';

	 data.addRows([[{v:'BO',f:'Bolivia'},10,'$0.08 Billion']]);
	 ivalue['BO'] = '';

	 data.addRows([[{v:'BW',f:'Botswana'},10,'$0.07 Billion']]);
	 ivalue['BW'] = '';

	 data.addRows([[{v:'OM',f:'Oman'},10,'$0.07 Billion']]);
	 ivalue['OM'] = '';

	 data.addRows([[{v:'MO',f:'Macau'},10,'$0.07 Billion']]);
	 ivalue['MO'] = '';

	 data.addRows([[{v:'MD',f:'Moldova'},10,'$0.06 Billion']]);
	 ivalue['MD'] = '';

	 data.addRows([[{v:'BH',f:'Bahrain'},10,'$0.06 Billion']]);
	 ivalue['BH'] = '';

	 data.addRows([[{v:'PY',f:'Paraguay'},10,'$0.06 Billion']]);
	 ivalue['PY'] = '';

	 data.addRows([[{v:'GE',f:'Georgia'},10,'$0.05 Billion']]);
	 ivalue['GE'] = '';

	 data.addRows([[{v:'ME',f:'Montenegro'},10,'$0.03 Billion']]);
	 ivalue['ME'] = '';


	 var options = {
	 backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
	 colorAxis:  {minValue: 0, maxValue: 10,  colors: [ '#3F9E4D','#7FFF00','#BCED91','#FFD700','#FFA500','#FF6347','#F08080','#FF6EC7','#B272A6','#8B4789','#68228B']},
	 legend: "none",
	 backgroundColor: {fill:'#FFFFFF',stroke:'#FFFFFF' ,strokeWidth:0 },
	 datalessRegionColor: '#F5F0E7',
	 displayMode: 'regions',
	 enableRegionInteractivity: 'true',
	 resolution: 'countries',
	 sizeAxis: {minValue: 1, maxValue:1,minSize:10,  maxSize: 10},
	 region:'world',
	 keepAspectRatio: true,
	 width:900,
	 height:600,
	 tooltip: {textStyle: {color: '#444444'}, trigger:'focus'}
	 };

	var colorList = {"> $100 Billion": '#3F9E4D', "$50-$100 Billion": '#7FFF00', "$25-$49.9 Billion": '#BCED91', "$10-$24.9 Billion": '#FFD700', "$5-$9.9 Billion": '#FFA500', "$2-$4.9 Billion": '#FF6347', "$1-$1.9 Billion": '#F08080', "$0.5-$0.9 Billion": '#FF6EC7', "$0.2-$0.49 Billion": '#B272A6', "$0.1-$0.19 Billion": '#8B4789', "< $0.1 Billion": '#68228B'};

colorize = function(colorList) {
    var container = document.getElementById('viewDiv');
  
    for (var key in colorList) {
        var boxContainer = document.createElement("DIV");
        var box = document.createElement("DIV");
        var label = document.createElement("SPAN");

        label.innerHTML = key;
        box.className = "box";
        box.style.backgroundColor = colorList[key];

        boxContainer.appendChild(box);
        boxContainer.appendChild(label);

        container.appendChild(boxContainer);
   }
}

	
       // };
	 var chart = new google.visualization.GeoChart(document.getElementById('visualization'));
	 chart.draw(data, options);
	 colorize(colorList);
}

function fadeAnswer() {
  $(this).next('.answer').slideToggle("slow"); //toggles showing and hiding the answer
  $(this).toggleClass('close'); //toggles adding and removing a class named close to the h2 tag
}



$(document).ready(function () {
  $('.answer').hide(); //selects all divs with class="answer" and hides them
  $('.question').click(fadeAnswer); //toggles fading in and out the answer
}); // end ready
