// Initialize the Google Sign-In client
gapi.load('auth2', function () {
    gapi.auth2.init({
        client_id: '38239960397-u6d7vqn3lrvum6o7ou8ql1m2sep15dfm.apps.googleusercontent.com'
    });
});

// Attach a click handler to the login button
document.getElementById('login-button').addEventListener('click', function () {
    // Sign in the user
    var GoogleAuth = gapi.auth2.getAuthInstance();
    GoogleAuth.signIn().then(function (googleUser) {
        // The user is signed in
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    });
});
