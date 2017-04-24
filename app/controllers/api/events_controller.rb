class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end

  def create
    @event = Event.new(event_params)
    @event.organizer_id = current_user.id
    @event.date = Date.new()
    if @event.save
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @group = Group.find(@event.group.id)
    if @event.destroy
      render 'api/groups/show'
    else
      render json: @event.errors.messages, status: 422
    end
  end


  def show
    @event = Event.find(params[:id])
  end

  private
  def event_params
    params.require(:event).permit(:id, :name, :description, :date, :group_id, :organizer_id, :location)
  end
end
