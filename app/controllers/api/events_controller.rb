class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end

  def create
    @event = current_user.organized_events.new(event_params)
    if @event.save_and_attend
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def destroy
    @event = current_user.organized_events.find(params[:id])
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
    params.require(:event).permit(:id, :name, :description, :date, :group_id, :organizer_id, :location, :rsvps, :attendees)
  end
end
