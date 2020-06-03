# README

A rails6 + react app, using the react-rails gem, based on [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-project-with-a-react-frontend).

Running locally:
* `bundle install`
* `bundle exec rails db:setup` or pg_restore from [this snapshot](http://michaelsnook.com.s3.us-east-1.amazonaws.com/mydb.dump)
* `bundle exec rails s` will also buil the react app with yarn
