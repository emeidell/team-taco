# team-taco
 just export an object with some values needed to config your project a bit.
 like your secret for user auth and your database name

 I also like to add any private keys for any apis that I have access to in here, that way you can add this config to .gitignore and you aren't sharing the api publicly when you push to github.

 We will probably have to set up this file manually then if it won't be put up on github. Though, really, the only thing that matters is the api key, the secret can differ on our machines and so can the database since they will only be local.