if Rails.env === 'production'
  Rails.application.config.session_store :cookie_store, key: '_test-factorial', domain: 'test-factorial.herokuapp.com'
else
  Rails.application.config.session_store :cookie_store, key: '_test-factorial' 
end
