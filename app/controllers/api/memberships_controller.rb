class Api::MembershipsController < ApplicationController

  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      render 'api/groups/show'
    else
      render json: @membership.errors.messages, status: 422
    end
  end

  def destroy
    @membership = Membership.find_by(params[:id])
    if @membership.destroy
      render 'api/groups/show'
    else
      render json: @membership.errors.messages, status: 422
    end
  end

  private
  def membership_params
    params.require(:membership).permit(:member_id, :group_id)

  end

end
