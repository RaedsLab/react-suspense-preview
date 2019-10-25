const express = require('express');
const path = require('path');

const app = express();

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/user', async (req,res) => {
	const user = {name: "Super Toto"}
	await sleep(2000)
	res.json(user)
});

app.get('/api/posts', async (req,res) => {
	var posts = [{id:'1', title:'Super post'}, {id:'2', title:'Mega post'}, {id:'3', title:'Ultra post'}];
	await sleep(3000)
	res.json(posts);
});

app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/front/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('Express app is listening on port ' + port);
