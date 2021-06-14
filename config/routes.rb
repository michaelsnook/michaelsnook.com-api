Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get    'posts/index'
      post   'posts/create'
      get    'posts/show/:id',    to: 'posts#show'
      post   'posts/update/:id',  to: 'posts#update'
      delete 'posts/destroy/:id', to: 'posts#destroy'
    end
  end

  get 'resume', :to => redirect('/resume.html')

  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
