if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_michaelsnook-dot-com', domain: 'michaelsnook.com'
else
  Rails.application.config.session_store :cookie_store, key: '_michaelsnook-dot-com'
end
