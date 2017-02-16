Rails.application.routes.draw do
  get 'search' => 'moviesearch#index'
  root "moviesearch#index"
end
