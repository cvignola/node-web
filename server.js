/*** OPTION: AutoScaling - START ***/
const as_agent = require('bluemix-autoscaling-agent');
/*** OPTION: AutoScaling - END ***/
const express = require('express');
const app = express();


let vcapServices = '';
if (process.env.VCAP_SERVICES) {
    vcapServices = JSON.parse(process.env.VCAP_SERVICES);
} else {
  try {
    vcapServices = require('./services.json');
  } catch(e) {
    console.error('No Service information available from process.env.VCAP_Services'
      + ' or local ./services.json');
  }
}

/*** APPTYPE: WEB - START ***/
app.use(express.static(__dirname + '/public'));
/*** APPTYPE: WEB - END ***/





const port = 'PORT' in process.env ? process.env.PORT : 3000

app.listen(port, function () {
  console.log(`Example app listening on port ${this.address().port}!`)
})

