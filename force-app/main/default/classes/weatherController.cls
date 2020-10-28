public  class weatherController {
    public static string apiKey = '1ff4c47eb4342ac91cca92d81d4109a4';
    public static string method = 'GET';
    @AuraEnabled
    public static Decimal  getWeather( string city){
        try {
            string endPoint = 'api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;
            string temperature;
            Decimal  convertedTemp;
            string humidity;
            HTTP http = new HTTP();
            HTTPRequest req = new HTTPRequest();
            req.setMethod(method);
            req.setEndpoint(endPoint);
            HTTPResponse  res = http.send(req);
            string body = res.getBody();  
           if(res.getStatusCode()<300){
               system.JSONParser jP = JSON.createParser(body);
               while (jP.nextToken()!=null) {
                   string key = jP.getText();
                   if(key == 'temp'){
                    jP.nextToken();
                       temperature = (string)jP.getText();
                       convertedTemp = decimal.valueof(temperature) - 273;
                   }
                   
               }
           }
           return convertedTemp;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
