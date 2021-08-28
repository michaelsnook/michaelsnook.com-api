Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get    'posts/index'
      get    'posts/drafts',      to: 'posts#drafts'
      post   'posts/create'
      get    'posts/show/:name',    to: 'posts#show'
      post   'posts/update/:id',  to: 'posts#update'
      delete 'posts/destroy/:id', to: 'posts#destroy'

      post   '/login',            to: 'sessions#create'
      post   '/logout',           to: 'sessions#destroy'
      get    '/logged_in',        to: 'sessions#is_logged_in?'
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
