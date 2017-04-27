class Api::RsvpsController < ApplicationController
    def create
      @rsvp = current_user.rsvps.new(event_id: params[:event_id])
      if @rsvp.save
        @event = Event.find(params[:event_id])
        render 'api/events/show'
      else
        render json: @rsvps.errors.messages, status: 422
      end
    end

    def destroy
      @rsvp = Rsvp.find_by(attendee_id: current_user.id, event_id: params[:event_id])
      @event = Event.find(params[:event_id])
      if @rsvp.destroy
        render 'api/events/show'
      else
        render json: @rsvp.errors.messages, status: 422
      end
    end

    private
    def rsvp_params
      params.require(:rsvp).permit(:event_id)

    end

end
