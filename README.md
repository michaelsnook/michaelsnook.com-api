# README

A rails app, serving an API for use with the client app at
[https://github.com/michaelsnook/site-client-nextjs](https://github.com/michaelsnook/site-client-nextjs).

Running locally:
* `bundle install`
* `bundle exec rails db:setup` or pg_restore from [this snapshot](http://michaelsnook.com.s3.us-east-1.amazonaws.com/mydb.dump) like so: `pg_restore -d michaelsnook_com_development -c mydb.dump`
* `bundle exec rails s`

System requirements:
* Postgres
* Ruby 2.7

Site architecture:
* Domain registration and DNS with Google Domains
* This app, the API, is at api.michaelsnook.com using Heroku and Heroku Postgres
* The client app is at michaelsnook.com using Vercel hosting
