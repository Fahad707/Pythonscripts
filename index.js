const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    const { spawn } = require('child_process');
    const pyProg = spawn('python', ['./runwithnode.py']);
   
    pyProg.stdout.on('data', function(data) {
       console.log("hello");
        console.log(data.toString());
        res.write(data);
        res.send('end');
    });

});

app.listen(3000, () => {
  console.log('Express application running on localhost:3000');
});

