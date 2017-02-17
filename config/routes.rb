Rails.application.routes.draw do
  get 'search' => 'moviesearch#index'
  get 'movies/:id' => 'moviesearch#show'

  root "moviesearch#index"
end
