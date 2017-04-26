Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :update, :destroy, :show, :index] do
      resources :memberships, only: [:create, :destroy]
    end
    resources :events, only: [:create, :update, :destroy, :index, :show] do
      resources :rsvps, only: [:create, :destroy]

    end
  end
  # root "static_pages#root"
  root to: "static_pages#root"
end
