Rails.application.routes.draw do
  root "rooms#index"

  resources :messages
  resources :rooms
  
  devise_for :users  
end
