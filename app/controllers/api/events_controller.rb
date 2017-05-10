class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end

  def create
    @event = current_user.organized_events.new(event_params)
    if @event.save
      @event.attend
      render :show
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def update
    @event = Event.includes(:group, :organizer, :attendees).find(params[:id])
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

  def search
    debugger
    @events= Event.includes(:group, :organizer, :attendees).search_by_details(params[:search]).order(:date)
    render :search
  end

  private
  def event_params
    params.require(:event).permit(:id, :name, :description, :date, :time, :group_id, :group, :organizer_id, :location_name, :location_address, :rsvps, :attendees)
  end
end
