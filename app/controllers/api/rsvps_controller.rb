class Api::RsvpsController < ApplicationController
    def create
      @rsvp = current_user.rsvps.new(rsvp_params)
      if @rsvp.save
        @event = Event.find(params[:event_id])
        render :show
      else
        render json: @rsvps.errors.messages, status: 422
      end
    end

    def destroy
      @rsvp = rsvp.find_by(user_id: current_user.id, event_id: params[:event_id])
      if @rsvp.destroy
        render 'api/events/show'
      else
        render json: @membership.errors.messages, status: 422
      end
    end

    private
    def rsvp_params
      params.require(:rsvp).permit(:attendee_id, :event_id)

    end

  end

end
