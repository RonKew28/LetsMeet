class Api::GroupsController < ApplicationController

  def index
    @groups = Group.includes(:members).all
    render :index
  end

  def create
    @group = current_user.created_groups.new(group_params)
    if @group.save_and_join
      if params['group']['categorizations']
        params['group']['categorizations'].each do |categorization|
          category = Category.find_by(title: categorization)
          CategoryGroup.create(group_id: @group.id, category_id: category.id)
        end
      end
      render :show
    else
      render json: @group.errors.messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      render :show
    else
      render json :groups.errors.messages, status: 422
    end
  end

  def destroy
    @group = current_user.created_groups.find(params[:id])
    if @group.destroy
      render :show
    else
      render json :groups.errors.messages, status: 422
    end
  end

  def show
    @group = Group.find(params[:id])
  end

  def search
    @groups = Group.includes(:members).search_by_details(params[:search])
    render :search
  end

  def category
    category_id = Category.find_by(title: params[:category]).id
    @groups = Group.includes(:members).joins(:categories).where("categories.id = ?", category_id)
  end


  private
  def group_params
    params.require(:group).permit(
      :id,
      :name,
      :creator_id,
      :creator,
      :description,
      :category,
      :location,
      :founded_date,
      :memberships,
      :members,
      :categorizations)

  end
end
