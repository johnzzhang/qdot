var input = document.getElementById('icon-upload');
var preview = document.querySelector('.preview');

input.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
	var curFiles = input.files;
	var para = preview.querySelector('p');
	if(curFiles.length === 0) {
		para.textContent = 'No files currently selected for upload';
	} else {
	  	if(validFileType(curFiles[0])) {
	    	if(curFiles[0].size > 50000) {
	    		para.textContent = 'File size too large. Must be under 50kbytes.';
	    	}
	    	else
	    	{
		    	var image = preview.querySelector('img');
		    	image.src = window.URL.createObjectURL(curFiles[0]);
	    	}
	  	} else {
	    	para.textContent = 'File name ' + curFiles[0].name + ': Not a valid file type. Update your selection.';
	  	}
	}
}

var fileTypes = [
  'image/jpeg',
  'image/pjpeg',
  'image/png'
]

function validFileType(file) {
  for(var i = 0; i < fileTypes.length; i++) {
    if(file.type === fileTypes[i]) {
      return true;
    }
  }
  return false;
}

var albumBucketName = 'natural-twenty';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:1e1b4d5b-4b12-4426-baac-2161180bb752',
});

//create an S3 instance that we can use to access the databaseph
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: albumBucketName}
});

//adds a photo to our S3 database
function createCharacter() {
	var form = document.getElementById('msform');
	//get the file out of the upload widget	
	var files = document.getElementById('icon-upload').files;
	if (!files.length) {
		return alert('Please choose a file to upload first.');
	}
	var file = files[0];
	var photoKey = files[0].name;

	var charAppearance = document.getElementById('charAppearance');
	charAppearance.value='https://s3.amazonaws.com/natural-twenty/'+photoKey;

	s3.upload({
		Key: photoKey,
		Body: file,
		ACL: 'public-read'
	}, function(err, data) {
	if (err) {
		console.log(file);
		console.log(err.message);
	}
		console.log('Successfully uploaded photo.');
		form.action = "/api/create";
		form.method = "post";
		console.log(form);
		form.submit();
	});
}
