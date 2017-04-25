Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :update, :destroy, :show, :index]
    resources :events, only: [:create, :update, :destroy, :index, :show]
    resources :memberships, only: [:create, :destroy]
    resources :rsvps, only: [:create, :destroy]
  end
  root "static_pages#root"
end
