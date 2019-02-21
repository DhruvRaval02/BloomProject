fetch('https://raw.githubusercontent.com/DhruvRaval02/BloomProject/master/SBHSData.json').then(function(response){
        return response.json();
      }).then(function(dataAct){

      var areaArray = [];
      areaArray.push(dataAct[0].area)

      for(var i = 1; i < dataAct.length; i++){
        if(!(areaArray.includes(dataAct[i].area)))
          areaArray.push(dataAct[i].area)
      }

      var data = anychart.data.set([
        [areaArray[0], countTimes(areaArray[0], dataAct)],
        [areaArray[1], countTimes(areaArray[1], dataAct)],
        [areaArray[2], countTimes(areaArray[2], dataAct)],
        [areaArray[3], countTimes(areaArray[3], dataAct)],
        [areaArray[5], countTimes(areaArray[5], dataAct)],
        [areaArray[10], countTimes(areaArray[10], dataAct)],
        [areaArray[6], countTimes(areaArray[6], dataAct)],
        [areaArray[7], countTimes(areaArray[7], dataAct)],
        [areaArray[8], countTimes(areaArray[8], dataAct)],
        [areaArray[9], countTimes(areaArray[9], dataAct)],
        [areaArray[4], countTimes(areaArray[4], dataAct)]
      ]);
    
      var xAndValue = data.mapAs({
        'x': 0,
        'value': 1
      });
    
      var chart = anychart.pie(xAndValue);
      chart.labels()
        .hAlign('center')
        .position('outside')
        .format('{%PercentValue} Percent');
    
      chart.title('Composition of Different Areas in JSON Data');
    
      chart.legend()
        .position('center-bottom')
        .itemsLayout('horizontal')
        .align('center');
    
      chart.container('container');
      chart.draw();
    })
  
    function countTimes(str, jsonVar){
      var counter = 0;
        for(var x = 0; x < jsonVar.length; x++){
          if(jsonVar[x].area == str)
            counter++;
        }
      return counter;
    }




