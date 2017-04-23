class Api::GroupsController < ApplicationController

  def index
    @groups = Group.all
    render :index
  end

  def create
    @group = Group.new(group_params)
    @group.creator_id = current_user.id
    @group.founded_date = Date.new()
    if @group.save
      render :show
    else
      render json: @group.errors.messages, status: 422
    end
  end

  def update
    @group = current_user.groups.find(params[:id])
    if @group.update_attributes(group_params)
      render :show
    else
      render json :groups.errors.messages, status: 422
    end
  end

  def destroy
    @group = current_user.groups.find(params[:id])
    if @group.destroy
      render :index
    else
      render json :groups.errors.messages, status: 422
    end
  end


  private
  def group_params
    params.require(:group).permit(
      :name,
      :description,
      :category,
      :location,
      :founded_date)

  end
end
