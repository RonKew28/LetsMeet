Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :update, :destroy, :show, :index] do
      resources :memberships, only: [:create]
    end
    delete 'groups/:id/memberships', to: 'memberships#destroy', as: 'group_membership'
    resources :events, only: [:create, :update, :destroy, :index, :show] do
      resources :rsvps, only: [:create]
    end
    delete 'events/:event_id/rsvps', to: 'rsvps#destroy', as: 'event_membership'
  end
  # root "static_pages#root"
  root to: "static_pages#root"
end
