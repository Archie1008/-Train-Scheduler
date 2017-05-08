
	// Collect values from input
	// On click "Add" button submit the values from the input fields to Firebase
	// Values disappear from input fields after submitting to Firebase
	// Three input values , Train Name , Destination , Frequency appear in the table in the first panel
	// Next Arrival and Minutes Away will be counted with a moment.js
	// Time results would be in a realtime

	// Initialize Firebase
  	var config = {
		apiKey: "AIzaSyDMSFWox-80zMc8Y0KsVW0bgfdptWIBnSo",
		authDomain: "train-scheduler-2ff54.firebaseapp.com",
		databaseURL: "https://train-scheduler-2ff54.firebaseio.com",
		projectId: "train-scheduler-2ff54",
		storageBucket: "train-scheduler-2ff54.appspot.com",
		messagingSenderId: "238984154409"
  	};
  
  	firebase.initializeApp(config);

  	// Get a reference to the database service
  	var database = firebase.database();

	$("#add").on("click", function(event) {
  		
		event.preventDefault();

		var trainName = $("#name").val().trim();
		var destination = $("#destination").val().trim();
		var firstTrain = $("#first").val().trim();
		var frequency = $("#frequency").val().trim();

		var newTrain = {
			trainName : trainName,
			destination : destination,
			firstTrain : firstTrain,
			frequency : frequency,
		}

  		// Uploads train data to the database
  		database.ref().push(newTrain);
  		
  		$("#name").val("");
  		$("#destination").val("");
  		$("#first").val("");
  		$("#frequency").val("");

  	});

  	

