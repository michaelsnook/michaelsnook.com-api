# README

A rails + react app, using the react-rails gem, based on [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend).

Running locally:
* `bundle install`
* `bundle exec rails db:setup` or pg_restore from [this snapshot](http://michaelsnook.com.s3.us-east-1.amazonaws.com/mydb.dump) like so: `pg_restore -d michaelsnook_com_development -c mydb.dump`
* `bundle exec rails s` will also build the react app with yarn

System requirements:
* Postgres
* Ruby 2.7
* Node 12+, Yarn

Site architecture:
* Domain registration and DNS with Google Domains
* Apex domain forwards to `www`
* The app is hosted on Heroku, using Heroku Postgres
