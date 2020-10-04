Rails.application.routes.draw do

  root 'pages#index'
  # get '/api/v1/', to: 'contacts#index'
  # get '/', to: 'contacts#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # post '/login', to: 'sessions#create'
      # delete '/logout', to: 'sessions#destroy'
      # get '/logged_in', to: 'sessions#is_logged_in?'
      resources :contacts
      resources :users, only: [:create]
      post "/login", to: "auth#login"
      get "/logged_in", to: "auth#auto_login"
      delete '/logout', to: 'auth#logout'
    end
  end

  get '*path', to: 'pages#index', via: :all

end
